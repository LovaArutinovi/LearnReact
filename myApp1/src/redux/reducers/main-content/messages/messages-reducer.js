const SEND_MESSAGE = 'SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE_NEW_MESSAGE_TEXT';
let initialState = {
    dialogs: [
        {id: 1, name: 'Shota'},
        {id: 2, name: 'Vladik'},
        {id: 3, name: 'Sasha'},
        {id: 4, name: 'Lussi'},
        {id: 5, name: 'Moldir'},
        {id: 6, name: 'Dimych'},

    ],
    messages: [
        {message: 'Hello', who: 'him'},
        {message: 'Hello', who: 'him'},
        {message: 'How are you?', who: 'him'},
        {message: 'I\'m fine and you?', who: 'him'},
        {message: 'I\'m fine too', who: 'me'},
        {message: 'Were you to the cinema?', who: 'me'},
        {message: 'Yes but movie was bad', who: 'me'}
    ],
    newMessageText: ''
}
const messagesReducer = (state = initialState, action) => {

    let stateCopy;

    switch(action.type){

        case UPDATE_NEW_MESSAGE_TEXT: {
            return  {
                ...state,
                newMessageText: action.newText,
            }
        }

        case SEND_MESSAGE: {
            let newMessage = state.newMessageText;
            return {
                ...state,
                messages: [...state.messages, {message: newMessage, who: 'me'}],
                newMessageText: '',
            }
        }

        default:
            return state;
    }
}

export const sendMessageActionCreator = () => ({type: SEND_MESSAGE,})

export const updateNewMessageActionCreator = (text) =>
    ({type: UPDATE_NEW_MESSAGE_TEXT, newText: text})


export default messagesReducer;