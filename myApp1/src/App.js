import './App.css';
import Aside from './components/Aside/Aside';
import Header from './components/Header/Header';
import Profile from './components/main-content/Profile/Profile';
import News from "./components/main-content/News/News";
import Music from "./components/main-content/Music/Music";
import Settings from "./components/main-content/Settings/Settings";
import Friends from './components/main-content/Friends/Friends';
import {BrowserRouter, Route} from "react-router-dom";
import MessagesContainer from "./components/main-content/Messages/MessagesContainer";
import UsersContainer from "./components/main-content/Users/UsersContainer";



const App = (props) => {

    return (
        <div className="app-wrapper">
            <Header/>
            <Aside/>

            <main className="main-content">
                <Route /*exact*/ path='/profile' render={() =><Profile/>}/>
                <Route path='/messages' render={() =><MessagesContainer/>}/>

                <Route path='/news' render={() => <News/>}/>
                <Route path='/music' component={() => <Music/>}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/friends' component={Friends}/>

                <Route path='/users' component={() =><UsersContainer/>}/>
            </main>

        </div>
    );
}


export default App;
