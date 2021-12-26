import {combineReducers, createStore} from "redux";
import asideReducer from "./reducers/aside/aside-reducer";

import profileReducer from "./reducers/main-content/profile/profile-reducer";
import messagesReducer from "./reducers/main-content/messages/messages-reducer";
import usersReducer from "./reducers/main-content/users/users-reducer";

let reducers = combineReducers({
    aside: asideReducer,
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    usersPage: usersReducer
});

let store = createStore(reducers);

window.store = store;
export default store;