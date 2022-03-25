import React, {Component} from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import {Home} from "./components/Home";
import { Layout } from './components/Layout';


export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Routes>
                    <Route path='/' component={Home}/>
                </Routes>
            </Layout>
        );
    }
}


