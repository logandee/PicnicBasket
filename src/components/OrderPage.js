import React from 'react';
import Product from './Product';
import {Link} from 'react-router-dom';


export default class OrderPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items: [],
            products: []
        };
    }

    componentDidMount() {
        this.getProducts();
      }

    async getProducts() {
        const response = await fetch('http://localhost:8080/api/product');
        const data = await response.json();
        this.setState({ products: data });
    
    }

    addOrUpdateProducts = (item) => {
        for(let i = 0; i < this.state.items.length; i++){
            if(this.state.items[i].name === item.name){
                this.setState( prevState =>{
                    item.qty > 0 ? prevState.items.splice(i,1,item) : prevState.items.splice(i,1);
                    const items = prevState.items;
                    return {
                        items
                    };

                });
                return;
            }
        }
        this.setState(state => {
            if(item.qty > 0){

                const items = state.items.concat(item);
                console.log(items);
                return {
                    items
                };
            }
        });
    }

    render(){
        let productList = this.state.products.map((p) => {
            return <Product key={p.productId} name={p.name} img={p.description} inventory={p.inventory} updateProduct={(item) => this.addOrUpdateProducts(item)} />;
        });
        return (
        <div className="orderPage">
            <div className="d-flex justify-content-between">

            <Link to="/">
            <button className="btn btn-secondary">
            Home
            </button>
            </Link>
            <Link to="/summary">
            <button onClick={this.props.setProducts(this.state.items)} className="btn btn-secondary">
            Add to Basket ->
            </button>
            </Link>
            </div>
            <div className="zoom-in">
                <h1 className="Hello">Let's add some goods to your basket!</h1>
            </div>
            {productList}
        </div>
        )
    }
}