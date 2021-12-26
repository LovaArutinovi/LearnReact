import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {followAC, setUsersAC, unfollowAC} from "../../../redux/reducers/main-content/users/users-reducer";


// const Users = (props) => {
//     debugger
//     let usersElement = props.users.map(u => <User name={u.fullName} status={u.status} followers={u.city} city={u.location.city} country={u.location.country}/>);
//     return (
//         <section className={s.users}>
//
//             <div className={s.usersList}>
//                 {usersElement}
//             </div>
//
//             <div className={s.usersShowMore}>
//                 <button className={s.usersShowMoreButton}>Show More</button>
//             </div>
//         </section>
//     )
// }follow
let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    }
}

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);
export default UsersContainer;