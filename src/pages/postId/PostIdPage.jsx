import AddCard from "@/components/card/AddCard";
import Card from "@/components/card/Card";
import Header from "@/components/common/header/Header";
import SubHeader from "@/components/subHeader/SubHeader";
import Toast from "@/components/toast/Toast";
import Modal from "@/components/modal/Modal";
import styles from "@/pages/postId/PostIdPage.module.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from 'react';
import { getMappedColor } from "@/pages/postId/type/colorMap";
import { getRecipient, getMessages, createReaction, getReactions } from '@/shared/api/recipientApi';


function PostIdPage() {
  const params = useParams();
  const recipientId = params.recipientId;

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
      
      console.log("리액션 성공:", newReaction);
      
      setRefreshReactions(prev => prev + 1); 
      
    } catch (error) {
      console.error("이모지 추가 오류:", error);
    } 
  }, [recipientId]); 
  
  const handleShare = useCallback((type) => {
      console.log("Share Type:", type);
  }, []);

  
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
          <button className={styles.deleteBtn}>삭제하기</button>
        </div>
        <div className={styles.main}>
          <AddCard recipientId={recipientId} />
          
          {messages.map((cardData) => (
            <Card 
              key={cardData.id} 
              data={cardData}  
              onClick={() => handleCardClcik(cardData)}
            />
          ))}
        </div>
        { isModalOpen && selectedCard && (
          <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            profileImg={selectedCard.profileImgURL}
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