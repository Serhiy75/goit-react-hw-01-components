import { FriendListItem } from 'components/FriendListItem/FriendListItem';
import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
    return <div>
        <h3 className={css.titlelistfriends}>LIST FRIENDS</h3>
        <ul className={css.friendlist}>{friends.map((el) => {
            return < FriendListItem {...el} key={el.id} />
        })}
        </ul>
    </div>
};

FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool
    }))

}
