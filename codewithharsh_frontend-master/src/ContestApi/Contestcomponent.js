import styles from "../components/ContestReminder/contestReminder.module.css"
import codeforcesPic from "../assets/codeforceslog.jpg";
import codechefPic from "../assets/icons8-codechef-50.png";
import leetcodePic from "../assets/leetcode (1).png";
export default function ContestComponent({obj}) {
    const isoString = new Date(obj.start_time);
    let pic;
   if(obj.url.includes("codeforces")) {
    pic = codeforcesPic;
   }
   else if(obj.url.includes("codechef")) {
    pic = codechefPic;
   }
   else {
    pic = leetcodePic;
   }
    return (
    <div className={styles.contest}>
      <div className={styles.platform_logo}>
        <img
          src={pic}
          alt="Picture of the author"
          className={styles.img}
          width={35}
          height={35}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.h4}>{isoString.toUTCString()}</div>
        <h5 className={styles.h4}><a href={obj.url} target="_blank" style={{fontSize: "12px", textDecoration : "none", color: "white"}}>{obj.name}</a> </h5>
      </div>
    </div>
  );
}