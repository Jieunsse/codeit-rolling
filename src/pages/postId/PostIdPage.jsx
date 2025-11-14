import AddCard from "@/components/card/AddCard";
import Card from "@/components/card/Card";
import Header from "@/components/common/header/Header";
import Toast from "@/components/toast/Toast";
import styles from "@/pages/postId/PostIdPage.module.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { getMappedColor } from "@/pages/postId/type/colorMap";
import { getRecipient, getMessages } from '@/shared/api/recipientApi';
import Modal from "@/components/modal/Modal";

function PostIdPage() {
  // URL에서 recipientId 가져오기
  const params = useParams();
  const recipientId = params.recipientId;

  const [recipientData, setRecipientData] = useState(null);
  const [messages, setMessages] = useState([]);

  // 모달 상태, 클릭된 카드 데이터 상태
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClcik = (cardData) => {
    setSelectedCard(cardData);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };
  
  useEffect(() => {
    if (!recipientId) return; 

    const fetchData = async () => {
      try {
        const recipient = await getRecipient(recipientId);
        const messagesResult = await getMessages(recipientId);

        setRecipientData(recipient);
        setMessages(messagesResult);

      } catch (error) {
        console.error("데이터 로드 실패:", error);
        setRecipientData(null);
        setMessages([]);
      } 
    };

    fetchData();
  }, [recipientId]);

  if (!recipientData) {
    return null;
  }

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
          {/* <HeaderService 
              recipientName={recipientName}
              messageCount={recipientData.messageCount}
            /> */}
          <h1>To. {recipientName}</h1>
        </div>
      </div>

      <div className={styles.container}> 
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
        <div className={styles.toast}>
          {/* 토스트 조건부 렌더링 */}
          <Toast />  
        </div>
        { isModalOpen && selectedCard && (
          <Modal 
            isOpen={isModalOpen}
            onClose={closeModal}
            profileImg={selectedCard.profileImgURL}
            name={selectedCard.sender}
            badge={selectedCard.relationship}
            createAt={selectedCard.createAt}
            message={selectedCard.content}  
          />
        )}   
      </div>
    </div>
  )
}

export default PostIdPage;