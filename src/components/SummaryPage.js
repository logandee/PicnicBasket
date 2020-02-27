import React from 'react';
import Product from './Product';
import './SummaryPage.css';
import {Link} from 'react-router-dom';


export default class SummaryPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: props.products
        }
    }
// ToDo: make into a table
    render(){
        const list = this.props.products.map((x, i) => {
            return (<tr key={i}>
                <td>{x.name}</td>
                <td>{x.qty}</td>
                <td className="text-right">1</td>
                </tr>);
        })
        return (
        <div className="orderPage">
            <div className="d-flex justify-content-between">
            <Link to="/order">
            <button className="btn btn-secondary">
            Back
            </button>
            </Link>
            <Link to="/summary">
            <button className="btn btn-secondary">
            Checkout ->
            </button>
            </Link>
            </div>
            <div className="">
                <h1 className="Hello">Check that everything is correct</h1>
            </div>
            <form>
                <label>Name for the Order:</label>
                <input type="text"></input>
            </form>
            <div className="summary">
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Item</th>
                    <th scope="col">Qty</th>
                    <th className="text-right" scope="col">Price</th>
                </tr>
                </thead>
                <tbody>
                {list}
                </tbody>
            </table>
            </div>

        </div>
        )
    }
}