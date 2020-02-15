import React from 'react';
import Product from './Product';
import './SummaryPage.css';


export default class SummaryPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: props.products
        }
    }
// ToDo: make into a table
    render(){
        const list = this.props.products.map(x => {
            return <li>{x.name} x {x.qty}</li>;
        })
        return (
        <div className="orderPage">
            <div className="">
                <h1 className="Hello">Check that everything is correct</h1>
            </div>
            <form>
                <label>Name for the Order:</label>
                <input type="text"></input>
            </form>
            <div className="summary">

            <ul>
                {list}
            </ul>
            </div>

        </div>
        )
    }
}