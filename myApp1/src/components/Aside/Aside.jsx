import s from'./Aside.module.css'
import {NavLink} from "react-router-dom";

const Aside = () => {
    return (
        <aside className={s.sidebar}>
            <nav className={s.nav}>
                <NavLink className={s.nav__link} activeClassName={s.active} to="/profile">Profile</NavLink>
                <NavLink className={s.nav__link} activeClassName={s.active} to="/messages">Messages</NavLink>
                <NavLink className={s.nav__link} activeClassName={s.active} to="/news">News</NavLink>
                <NavLink className={s.nav__link} activeClassName={s.active} to="/music">Music</NavLink>
                <NavLink className={s.nav__link} activeClassName={s.active} to="/settings">Settings</NavLink>
                <NavLink className={`${s.nav__link} ${s.nav__linkFriends}`} activeClassName={s.active} to="/friends">Friends</NavLink>
                <NavLink className={s.nav__link} activeClassName={s.active} to="/users">Users</NavLink>
                <div className={s.mainFriends}>
                    <div className={s.item}>
                        <a href="#">
                            <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt=""/>
                        </a>
                    </div>
                    <div className={s.item}>
                        <a href="#">
                            <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt=""/>
                        </a>
                    </div>
                    <div className={s.item}>
                        <a href="#">
                            <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt=""/>
                        </a>
                    </div>
                </div>
            </nav>
        </aside>
    )
}

export default Aside;