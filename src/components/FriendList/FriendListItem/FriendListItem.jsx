import PropTypes from 'prop-types';
import s from './FriendListItem.module.css';

export default function FriendListItem({ name, avatar, isOnline }) {
  return (
    <li className={s.item}>
      <span className={[s.status, isOnline && s.online].join(' ')}></span>
      <img className={s.avatar} src={avatar} alt={name + 'avatar'} width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
