import styles from './sideLeaderboard.module.css';
export default function Sideleaderboard(){
    return (
        <div className={styles.leaderboard}>
          <h3>Top Scorers</h3> 
           <div className={styles.heading}><div>Name</div><span>Points</span></div> 

              <div className={styles.list}>
             
              <div className={styles.content}><div>Mohsin</div><span>Infinity</span></div>
              <div className={styles.content}><div>Mohsin</div><span>Infinity-1</span></div>
              <div className={styles.content}><div>Mohsin</div><span>Infinity-2</span></div>
              <div className={styles.content}><div>Mohsin</div><span>Infinity-3</span></div>
          </div>      
        </div>
      )
}