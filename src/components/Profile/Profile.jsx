import PropTypes from 'prop-types';
// import s from 'components/Profile/Profile.module.css';

const defaultImage = 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png';

function Profile(props) {
  const {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = props;
  return (
    <div className="profile">
      <div className="description">
        <img
          src={avatar || defaultImage}
          alt="User avatar"
          className="avatar"
        />
        <p className="name">{username}</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
