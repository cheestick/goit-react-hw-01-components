import './App.module.css';
import Profile from './Profile';
import Statistics from './Statistics';
import user from '../fetched-data/user.json';
import data from '../fetched-data/data.json';
import Container from './Container';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        gap: 40,
      }}
    >
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>

      <Container>
        <Statistics title="Upload stats" stats={data} />
        <Statistics stats={data} />
      </Container>
    </div>
  );
};
