import s from './Users.module.css'
import User from "./User/User";
import * as axios from "axios";
import userPhoto from "../../../assets/images/avatar.jpeg"
import userBg from "../../../assets/images/bg.jpg"
import React from "react";


class Users extends React.Component {

    constructor(props) {
        super(props);
 alert('rabotaet bratishka')
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        });
    }

    render() {
        return (
            <section className={s.users}>
                <div className={s.usersList}>
                    {
                        this.props.users.map(
                            u => <User
                                photosLarge={u.photos.large != null ? u.photos.large : userBg}
                                photosSmall={u.photos.small != null ? u.photos.small : userPhoto}
                                name={u.name} status={u.status}
                                // followers={u.followers} city={u.location.city}
                                // country={u.location.country}

                                followButton={u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }} className={s.userFollowButton}>UnFollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }} className={s.userUnFollowButton}>Follow</button>}
                            />
                        )
                    }
                </div>

                <div className={s.usersShowMore}>
                    <div></div>
                    <button className={s.usersShowMoreButton}>Show More</button>
                </div>
            </section>
        )
    }
}

export default Users;