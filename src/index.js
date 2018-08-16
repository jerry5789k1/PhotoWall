import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';
import './style/stylesheet.css'
import {BrowserRouter} from 'react-router-dom'

ReactDOM.render(<BrowserRouter><Main/></BrowserRouter>, document.getElementById('root'));
//BrowserRouter tag之間不能有空白會出錯
