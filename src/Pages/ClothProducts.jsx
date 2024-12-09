import React, {Component} from "react";
import ClothGrid from "../component/ClothGrid";

class ClothProducts extends Component{

    render(){
        const { addToCart, toggleCart  } = this.props; 
        return(
            <main className="page-layout">
            <h1><strong>Clothes</strong></h1>
            <ClothGrid addToCart={addToCart}  toggleCart={toggleCart}></ClothGrid>
            </main>
        );
    }
}
export default ClothProducts;