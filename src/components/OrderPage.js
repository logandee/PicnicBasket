import React from 'react';
import Product from './Product';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';


export default class OrderPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: []
        };
    }

    addOrUpdateProducts = (product) => {
        for(let i = 0; i < this.state.products.length; i++){
            if(this.state.products[i].name === product.name){
                this.setState( prevState =>{
                    product.qty > 0 ? prevState.products.splice(i,1,product) : prevState.products.splice(i,1);
                    const products = prevState.products;
                    return {
                        products
                    };

                });
                return;
            }
        }
        this.setState(state => {
            if(product.qty > 0){

                const products = state.products.concat(product);
                console.log(products);
                return {
                    products
                };
            }
        });
    }

    render(){
        return (
        <div className="orderPage">
            <Link to="/summary">
            <button onClick={this.props.setProducts(this.state.products)} className="btn btn-secondary">
            Add to Basket ->
            </button>
            </Link>
            <div className="zoom-in">
                <h1 className="Hello">Let's add some goods to your basket!</h1>
            </div>
            <Product name="PB and J" img="PBJ.png" updateProduct={(product) => this.addOrUpdateProducts(product)} />
            <Product name="Apple" img="apple.png" updateProduct={(product) => this.addOrUpdateProducts(product)} />
        </div>
        )
    }
}