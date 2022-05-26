import './App.module.css';
import Container from './Container';
import Profile from './Profile';
import Statistics from './Statistics';
import FriendList from './FriendList';
import TransactionHistory from './TransactionHistory';
import user from '../fetched-data/user.json';
import data from '../fetched-data/data.json';
import friends from '../fetched-data/friends';
import transactions from '../fetched-data/transactions';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 40,
        maxWidth: 1200,
        margin: '0 auto',
        fontSize: 40,
        color: '#010101',
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

      <Container>
        <FriendList friends={friends} />
      </Container>

      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </div>
  );
};
