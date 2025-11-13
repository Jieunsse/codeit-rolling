import AddCard from "@/components/card/AddCard";
import Card from "@/components/card/Card";
import Header from "@/components/common/header/Header";
import Toast from "@/components/toast/Toast";
import styles from "@/pages/postId/PostIdPage.module.css";

const mockList = [
  { id: 1, sender: "박접신", content: "..." },
  { id: 2, sender: "강준모", content: "..." },
  { id: 3, sender: "장서영", content: "..." },
  { id: 4, sender: "강준모", content: "..." },
  { id: 5, sender: "장서영", content: "..." },
  { id: 6, sender: "강준모", content: "..." },
  { id: 7, sender: "장서영", content: "..." },
  { id: 8, sender: "강준모", content: "..." },
  { id: 9, sender: "장서영", content: "..." },
  { id: 10, sender: "강준모", content: "..." },
]


function PostIdPage() {
  return(
    <div className={styles.pageBackground}>
      <div className={styles.headerWrap}>
        <div className={styles.container}>
          <Header />
          {/* header_service 컴포넌트 */}
        </div>
      </div>

      <div className={styles.container}> 
        <div className={styles.main}>
          <AddCard />
          
          {mockList.map((mockData) => (
            <Card 
              key={mockData.id} 
              data={mockData}  
            />
          ))}
        </div>
        <div className={styles.toast}>
          {/* 토스트 조건부 렌더링 */}
          <Toast />  
        </div>            
      </div>
    </div>
  )
}

export default PostIdPage;