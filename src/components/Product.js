import React from 'react';
import './Product.css';


class Product extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: {
                name: this.props.name,
                qty: 0
            }
        };

    }

    minusOne = () => {
        if(this.state.item.qty > 0){
            this.setState( prevState =>({
                item: {
                    ...prevState.item,
                    qty: prevState.item.qty - 1
                }
            }),() => {this.props.updateProduct(this.state.item)});
        }
        this.props.updateProduct(this.state.item);
    }
    addOne = () => {
        if(this.state.item.qty < this.props.inventory){
            this.setState(prevState => ({
                item: {
                    ...prevState.item,
                    qty: prevState.item.qty + 1
                }
            }),() => {this.props.updateProduct(this.state.item)});
        }
    }

    render(){
        return (
            <div className="card col-6 col-md-3">
                <img src={require(`../img/${this.props.img}`)} alt="PB and J" className="card-img-top"></img>
                <div className="card-body">
                    <h5 className="card-title">{this.props.name}</h5>
                    <i className="fa-lg fas fa-minus-circle" onClick={this.minusOne}></i>
                    <p className="qty">{this.state.item.qty}</p>
                    <i className="fa-lg fas fa-plus-circle" onClick={this.addOne}></i>
                    {/* <button onClick={() => this.props.updateProduct(this.state.item)}>add</button> */}
                </div>
            </div>
        )
    }
}

export default Product;