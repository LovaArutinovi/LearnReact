import s from './DialogItem.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "/messages/" + props.id;
    return (
        <div className={s.item} activeClassName={s.active}>
            <NavLink className={s.itemText} activeClassName={s.active} to={path}>
                <div className={s.itemImg}>
                    <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt=""/>
                </div>
                <p>{props.name}</p>
            </NavLink>
        </div>
    )
}

export default DialogItem;