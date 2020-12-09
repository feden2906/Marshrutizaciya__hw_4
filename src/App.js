import React from 'react';
import './App.css'
import {Switch, Route} from "react-router-dom";

import Header from "./components/header/Header";
import AllUsers from "./components/allUsers/AllUsers";
import AllPosts from "./components/allPosts/AllPosts";

const App = () => {

    return (
        <div>
            <Header/>
            <Switch>
                <Route path={'/Користувачі'} component={AllUsers}/>
                <Route path={'/Пости'} component={AllPosts}/>
                {/*<Route path={'/Фото'} component={}/>*/}
                {/*<Route path={'/Коменти'} component={}/>*/}
            </Switch>
        </div>
    );
}

export default App;
