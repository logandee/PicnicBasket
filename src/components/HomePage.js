import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


export default function HomePage(){
        return (
        <div className="orderPage">
            <div className="zoom-in">
                <h1 className="welcome">Welcome to The Picnic Basket!</h1>
            </div>
            <p>We make your picnic meal prep EASY!</p>
            <p>So all you have to do is grab and go to whatever adventure is waiting you!</p>
            <Link to="/order">
            <button className="btn btn-secondary">
            Start an Order ->
            </button>
            </Link>
        </div>
        )
}