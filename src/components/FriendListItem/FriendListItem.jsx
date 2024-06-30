import clsx from "clsx";
import css from './FriendListItem.module.css'
export default function FriendListItem({friends: { name, avatar, isOnline}}) {
   const statusClasses = clsx(isOnline ? css.online : css.offline) 
    
  return (
    <div className={css.container}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={statusClasses}>{isOnline === true ? "online" : "offline"}</p>
    </div>
  );
}
