import styles from '../../styles/announce.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Reply({obj}){
    return( 
      <div className={styles.reply}>
        <p className={styles.p}>{obj?obj.comment:'not there '}</p>
        <hr className={styles.line}></hr>
        <div className={styles.postedBy}>
          <div>
            <span style={{ marginLeft: "10px" }}>
              <FontAwesomeIcon icon={faUser} className={styles.icon} />
            </span>{" "}
            {obj?obj.person:'not there'}
            <span></span>
            <span className={styles.time}>date&time</span>
          </div>
        </div>
      </div>

    );
}