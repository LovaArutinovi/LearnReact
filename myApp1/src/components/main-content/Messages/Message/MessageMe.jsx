import s from './Message.module.css'
import {NavLink} from "react-router-dom";

const MessageMe = (props) => {
    return (
        <div className={`${s.DialogItem} ${s.me}`}>
            <div className={s.DialogItemCol}>
                <img src="https://post.greatist.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
                     alt="s"/>
            </div>
            <div className={s.DialogItemCol}>
                <p className={s.DialogItemText}>{props.message}</p>
                <p className={s.DialogItemInfo}></p>
            </div>
        </div>
    )
}

export default MessageMe;
