import { Profile } from "./Profile/Profile";
import user from '../data/user.json'
import data from '../data/data.json';
import { Statistics } from "./Statistics/Statistics";

export const App = () => {
  return (
    <div
      style={{
        flexDirection: 'column',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <Statistics
      title={'APLOAD STATS'}
      stats={data}
      />  

    </div>
  );
};


