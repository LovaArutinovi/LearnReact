import s from './Message.module.css'

const Message = (props) => {
    
    return (
        <div className={s.DialogItem}>
            <div className={s.DialogItemCol}>
                <img src="https://img.pngio.com/png-avatar-108-images-in-collection-page-3-png-avatar-300_300.png" alt="s"/>
            </div>
            <div className={s.DialogItemCol}>
                <p className={s.DialogItemText}>{props.message}</p>
                <p className={s.DialogItemInfo}></p>
            </div>
        </div>
    )
}

export default Message;