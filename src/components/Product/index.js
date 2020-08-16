import React, { useState, useEffect } from 'react';
import './index.css';
import axios from 'axios';
import MultipleProducts from '../Product/MultipleProducts';
import SingleProduct from '../Product/SingleProduct';

const Products = () => {

  const [state, setState] = useState({
      allProducts: [],
      singleProductView: false,
      currentProduct: null,
      currentProductsDisplayed: [],
      currentMiddleDisplayIndex: null,
      displayOffset: null,
      numberOfMultipleProducts: 3
  });

  const fetchProducts = () => {
    axios.get("https://app-service-28.herokuapp.com/products").then(res =>{
      let allProducts = res.data;
      let currentMiddleDisplayIndex = Math.floor(state.numberOfMultipleProducts / 2);
      let currentProductsDisplayed = allProducts.slice(0, state.numberOfMultipleProducts);
      let displayOffset = Math.floor(state.numberOfMultipleProducts / 2);
      setState({...state, allProducts, currentProductsDisplayed, currentMiddleDisplayIndex, displayOffset});
    });
  }

    useEffect(fetchProducts, []);



  const showProductDetails = (id) => () => {
    let currentProduct;
    state.allProducts.forEach(product => {
      if (product.id === id){
        currentProduct = product;
      }
    });
    setState({
      ...state,
      singleProductView: true,
      currentProduct: currentProduct
    })
  }
  
  const hideProductDetails = () => {
    setState({
      ...state,
      singleProductView: false
    })
  }

  const scroll = (direction) => () => {
    let previousProductsDisplayed = state.currentProductsDisplayed;
    let previousMiddleDisplayIndex = state.currentMiddleDisplayIndex;
    let itemTotal = state.allProducts.length;
    let offset = state.displayOffset;
    let currentMiddleDisplayIndex;
    let offsetIndex;
    let currentProductsDisplayed = previousProductsDisplayed;
    let newProduct;
    if (direction === "right"){
      currentMiddleDisplayIndex = previousMiddleDisplayIndex < itemTotal -1 ? previousMiddleDisplayIndex + 1 : 0;
      offsetIndex = (currentMiddleDisplayIndex + offset < itemTotal) ? (currentMiddleDisplayIndex + offset) : ((currentMiddleDisplayIndex + offset) - itemTotal);
      newProduct = state.allProducts[offsetIndex];
      currentProductsDisplayed = [...previousProductsDisplayed.slice(1), newProduct];
    } else if (direction === "left"){
      currentMiddleDisplayIndex = previousMiddleDisplayIndex > 0 ? previousMiddleDisplayIndex - 1 : itemTotal - 1;
      offsetIndex = currentMiddleDisplayIndex - offset > -1 ? currentMiddleDisplayIndex - offset : ((itemTotal) + (currentMiddleDisplayIndex - offset))
      newProduct = state.allProducts[offsetIndex];
      currentProductsDisplayed = [newProduct, ...previousProductsDisplayed.slice(0, -1)];
    }
    setState({...state, currentProductsDisplayed, currentMiddleDisplayIndex});
  }

    return (
      <div className="products-container">
        {state.singleProductView ?
          <SingleProduct product={state.currentProduct} handleChange={hideProductDetails} /> : 
          <MultipleProducts products={state.currentProductsDisplayed} handleChange={showProductDetails} scrollRightAction={scroll("right")} scrollLeftAction={scroll("left")} />
        }
      </div> 
    );
}

export default Products;