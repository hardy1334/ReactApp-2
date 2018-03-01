import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter,Route} from 'react-router-dom'
import Home from './components/home'
import Artist from './components/artist'


const App=()=>{
    return(
        <BrowserRouter>
          <div>
              <Route exact path="/" component={Home}/>
              <Route path="/artist/:artistid" component={Artist}/>
          </div>
        </BrowserRouter>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();
