import s from './Messages.module.css';
import DialogItem from "./Dialogs/DialogItem";
import Message from "./Message/Message";
import React from 'react';

const Messages = (props) => {
    let dialogsElements = props.messagesPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messagesPage.messages.map(m => <Message message={m.message}/>);
    let newMessageText = props.messagesPage.newMessageText;

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        props.sendMessage();
    }
    let onNewMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text)
    }

    return (
        <section className={s.Messages}>
            <h1 className={s.MessagesTitle}>Messages</h1>
            <div className={s.MessagesWrapper}>
                <div className={s.Dialogs}>
                    {dialogsElements}
                </div>
                <div className={s.Dialog}>
                    <div className={s.DialogItems}>
                        {messagesElements}
                    </div>
                    <div className={s.DialogSend}>
                        <div>
                            <textarea onChange={onNewMessageChange} className={s.DialogTextarea} ref={newMessageElement}
                                      value={newMessageText} placeholder='Enter your message'></textarea>
                        </div>
                        <div>
                            <button onClick={sendMessage} className={s.DialogButton}>Send message</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Messages;