import AddCard from "@/components/card/AddCard";
import Card from "@/components/card/Card";
import Header from "@/components/common/header/Header";
import SubHeader from "@/components/subHeader/SubHeader";
import Modal from "@/components/modal/Modal";
import styles from "@/pages/postId/PostIdPage.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useCallback } from 'react';
import { getMappedColor } from "@/pages/postId/type/colorMap";
import { getRecipient, getMessages, createReaction, getReactions, deleteMessage, deleteRecipient } from '@/shared/api/recipientApi';


function PostIdPage() {
  const params = useParams();
  const recipientId = params.recipientId;
  const navigate = useNavigate();

  const [recipientData, setRecipientData] = useState(null);
  const [messages, setMessages] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const [reactions, setReactions] = useState([]); 
  const [refreshReactions, setRefreshReactions] = useState(0);

  const handleCardClcik = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  const handleEmojiSelect = useCallback(async (emojiData) => {
    try {
      const selectedEmoji = emojiData; 
      
      if (!selectedEmoji || typeof selectedEmoji !== 'string') {
        console.error("이모지 문자열이 유효하지 않습니다.");
        return; 
      }

      const newReaction = await createReaction(recipientId, selectedEmoji);
      setRefreshReactions(prev => prev + 1); 
      
    } catch (error) {
      console.error("이모지 추가 오류:", error);
    } 
  }, [recipientId]); 
  
  const handleShare = useCallback((type) => {
      console.log("Share Type:", type);
  }, []);

  const handleDeleteMessage = async (messageId) => {
    if (window.confirm("메시지를 삭제하시겠습니까?")) {
      try {
        await deleteMessage(messageId);
        setMessages(messages.filter(msg => msg.id !== messageId));
      } catch (error) {
        console.error("메시지 삭제 실패:", error);
      }
    }
  };

  const handleDeleteRecipient = async () => {
    if (myName !== recipientName) {
      alert("이 롤링페이퍼를 삭제할 권한이 없습니다.");
      return;
    }
    const inputId = window.prompt("⚠️ 이 롤링페이퍼를 삭제합니다.\n계속하려면 비밀번호를 입력해주세요.");
    if (inputId === null || inputId.trim() === "") {
      alert("입력이 취소되었습니다.");
      return;
    }
    if (String(inputId) !== String(recipientId)) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }
    if (window.confirm("롤링페이퍼를 삭제하시겠습니까?")) {
      try {
          await deleteRecipient(recipientId); 
          navigate('/list'); 
      } catch (error) {
          console.error("롤링 페이퍼 삭제 실패:", error);
          alert("롤링 페이퍼 삭제에 실패했습니다.");
      }
    }
  };
  
  useEffect(() => {
    if (!recipientId) return; 

    const fetchData = async () => {
      try {
        const [recipient, messagesResult, reactionsResult] = await Promise.all([
          getRecipient(recipientId),
          getMessages(recipientId),
          getReactions(recipientId), 
        ]);

        setRecipientData(recipient);
        setMessages(messagesResult);
        setReactions(reactionsResult);

      } catch (error) {
        console.error("데이터 로드 실패:", error);
        setRecipientData(null);
        setMessages([]);
        setReactions([]);
      } 
    };

    fetchData();
  }, [recipientId, refreshReactions]);

  if (!recipientData) {
    return null;
  }

  const subHeaderData = {
    writerCount: recipientData.messageCount || 0,
    emojiRanking: reactions.map(r => ({ emoji: r.emoji, count: r.count })), 
    profileCount: recipientData.messageCount || 0,
    profileImages: recipientData.recentMessages 
                   ? recipientData.recentMessages.slice(0, 3).map(m => m.profileImageURL) 
                   : [],
  };

  const recipientName = recipientData.name;
  const myName = localStorage.getItem('my_name');
  const canDeleteRecipient = myName === recipientName;

  const apiColorKey = recipientData.backgroundColor;
  const mappedColor = getMappedColor(apiColorKey);

  const pageStyle = {
    backgroundColor: mappedColor,
    backgroundImage: recipientData.backgroundImageURL ? `url(${recipientData.backgroundImageURL})` : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  
  return(
    <div className={styles.pageBackground} style={pageStyle}>
      <div className={styles.headerWrap}>
        <div className={styles.container}>
          <Header />
          <SubHeader 
            title={recipientName}
            data={subHeaderData}
            onSelectEmoji={handleEmojiSelect}
            onShare={handleShare}
          />
        </div>
      </div>

      <div className={styles.container}> 
        <div className={styles.buttonContainer}>
          <Link to='/list'>
            <button className={styles.backBtn}>← 뒤로가기</button>
          </Link>
          {canDeleteRecipient && (
            <button className={styles.deleteBtn} onClick={handleDeleteRecipient}>삭제하기</button>
          )}
        </div>
        <div className={styles.main}>
          <AddCard recipientId={recipientId} />
          
          {messages.map((cardData) => (
            <Card 
              key={cardData.id} 
              data={cardData}  
              onClick={() => handleCardClcik(cardData)}
              onDelete={handleDeleteMessage}
              recipientName={recipientName}
            />
          ))}
        </div>
        { isModalOpen && selectedCard && (
          <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            profileImg={selectedCard.profileImageURL}
            name={selectedCard.sender}
            badge={selectedCard.relationship}
            createAt={selectedCard.createdAt}
            message={selectedCard.content}  
          />
        )}            
      </div>
    </div>
  )
}

export default PostIdPage;