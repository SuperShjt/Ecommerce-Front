import React, { Component } from "react";
import ProductCard from "./ProductCard";

class ProductGrid extends Component {
  state = {
    products: [],
    isLoading: true,
    error: null,
  };

  async componentDidMount() {
    const query = `{
      products {
        id
        name
        price
        img_url
        inStock
      }
    }`;

    try {
      const response = await fetch("https://store-marco-backend.space/Controller/test.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      const result = await response.json();
      if (result.data && result.data.products) {
        this.setState({ products: result.data.products, isLoading: false });
      }
    } catch (error) {
      this.setState({ error: error.message, isLoading: false });
    }
  }

  render() {
    const { products, isLoading, error } = this.state;
    const { addToCart, toggleCart } = this.props; 
    if (isLoading) return <div>Loading products...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} addToCart={addToCart}  toggleCart={toggleCart} /> 
        ))
        }
      </div>
    );
  }
}

export default ProductGrid;
