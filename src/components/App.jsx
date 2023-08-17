import { Profile } from "./Profile/Profile";
import user from '../data/user.json'
import data from '../data/data.json';
import friends from '../data/friends.json';
import { Statistics } from "./Statistics/Statistics";
import { FriendList } from "./FriendList/FriendList"
import items from '../data/transactions.json'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";

export const App = () => {
  return (
    <div
      style={{
        flexDirection: 'column',
        height: '70vh',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        overflowY: 'auto',
        fontSize: 40,
        gap: '50px',
        padding: '50px',
        color: '#010101',

      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      <Statistics
        title={'UPLOAD STATS'}
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={items} />

    </div>
  );
};


