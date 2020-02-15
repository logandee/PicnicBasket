import React from 'react';
import './Product.css';


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            product: {
                name: this.props.name,
                qty: 0
            } ,
            maxAvailable: 10
        };

    }

    minusOne = () => {
        if(this.state.product.qty > 0){
            this.setState( prevState =>({
                product: {
                    ...prevState.product,
                    qty: prevState.product.qty - 1
                }
            }),() => {this.props.updateProduct(this.state.product)});
        }
        this.props.updateProduct(this.state.product);
    }
    addOne = () => {
        if(this.state.product.qty < this.state.maxAvailable){
            this.setState(prevState => ({
                product: {
                    ...prevState.product,
                    qty: prevState.product.qty + 1
                }
            }),() => {this.props.updateProduct(this.state.product)});
        }
    }

    render(){
        return (
            <div className="card col-6 col-md-3">
                <img src={require(`../img/${this.props.img}`)} alt="PB and J" className="card-img-top"></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <i className="fa-lg fas fa-minus-circle" onClick={this.minusOne}></i>
                    <p className="qty">{this.state.product.qty}</p>
                    <i className="fa-lg fas fa-plus-circle" onClick={this.addOne}></i>
                    {/* <button onClick={() => this.props.updateProduct(this.state.product)}>add</button> */}
                </div>
            </div>
        )
    }
}

export default Product;