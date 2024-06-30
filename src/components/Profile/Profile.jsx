import css from './Profile.module.css'
export default function Profile({
  name,
  image,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.container}>
      <div className={css.containerImg}>
        <img src={image} alt={name} className={css.img}/>
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={css.containerList}>
        <li className={css.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
