import profileReducer from "./reducers/main-content/profile/profile-reducer";
import messagesReducer from "./reducers/main-content/messages/messages-reducer";
import asideReducer from "./reducers/aside/aside-reducer";

let store = {
    // _state: {
    //     profilePage: {
    //         posts: [
    //             {id: 1, message: 'Hey to day i decided to learn English', likesCount: '15'},
    //             {id: 2, message: 'Hey to day i decided to learn English', likesCount: '15'},
    //             {id: 3, message: 'Hey to day i decided to learn English', likesCount: '15'},
    //             {id: 4, message: 'Hey to day i decided to learn English', likesCount: '15'},
    //         ],
    //         newPostText: 'Add New Post'
    //     },
    //     messagesPage: {
    //         dialogs: [
    //             {id: 1, name: 'Vladik'},
    //             {id: 2, name: 'Shota'},
    //             {id: 3, name: 'Sasha'},
    //             {id: 4, name: 'Lussi'},
    //             {id: 5, name: 'Moldir'},
    //             {id: 6, name: 'Dimych'},
    //             {id: 7, name: 'Aleksandre'}
    //         ],
    //         messages: [
    //             {message: 'Hello', who: 'him'},
    //             {message: 'Hello', who: 'him'},
    //             {message: 'How are you?', who: 'him'},
    //             {message: 'I\'m fine and you?', who: 'him'},
    //             {message: 'I\'m fine too', who: 'me'},
    //             {message: 'Were you to the cinema?', who: 'me'},
    //             {message: 'Yes but movie was bad', who: 'me'}
    //         ],
    //         newMessageText: 'Write New Message'
    //     },
    //     aside: {}
    // },
    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;  // observer
    },
    _callSubscriber() {
        console.log('State changed');
    },
    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.aside = asideReducer(this._state.aside, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.state = store;