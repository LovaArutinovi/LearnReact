import s from './User.module.css'


const User = (props) => {
    return (
        <div className={s.user}>
            <div className={s.userHead}>
                <div className={s.userBg}><img
                    src={props.photosLarge}
                    alt="bg"/></div>
                <div className={s.userImg}>
                    <a href="#">
                        <img src={props.photosSmall}
                             alt="avatar"/>
                    </a>
                </div>
            </div>
            <div className={s.userBody}>
                <h1 className={s.userTitle}><a href="#">{props.name}</a></h1>
                <p className={s.userSubtitle}>{props.status}</p>
                <div className={s.userInfo}>
                    <p className={s.userFollowers}>Followers: {props.followers}</p>
                    <p className={s.userLocation}>
                        <span className={s.userLocationSpan}>{props.city}</span>,
                        <span className={s.userLocationSpan}>{props.country}</span>
                    </p>
                </div>

                <div className={s.userFollow}>
                    {props.followButton}
                </div>
            </div>
        </div>
    )
}

export default User;