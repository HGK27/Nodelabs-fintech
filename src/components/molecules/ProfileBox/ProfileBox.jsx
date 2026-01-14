import styles from "./ProfileBox.module.scss";
import Avatar from "../../atoms/Avatar/Avatar";
import ProfileBoxArrow from "../../icons/ProfileBoxArrow";

export default function ProfileBox({
  name,
  avatar,
  onClick,
}) {
  return (
    <div className={styles.profileBox} onClick={onClick}>
      <Avatar src={avatar} name={name} />

      <div className={styles.info}>
        <span className={styles.name}>{name}</span>        
      </div>
      <ProfileBoxArrow/>
    </div>
  );
}
