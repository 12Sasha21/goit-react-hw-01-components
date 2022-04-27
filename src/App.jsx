import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user.json';

import Statistics from 'components/Statistics/Statistics';
import data from 'components/Statistics/data.json';

import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends.json';

import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions.json';

export default function App() {
  return (
    <div className="tasks">
      <div>
        <Profile
          name={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          followers={user.stats.followers}
          views={user.stats.views}
          likes={user.stats.likes}
        />
      </div>
      <div>
        <Statistics title="Upload stats" stats={data} />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory items={transactions} />
      </div>
    </div>
  );
}
