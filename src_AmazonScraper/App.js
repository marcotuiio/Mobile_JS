import 'react-native-gesture-handler';
import React, { Component } from 'react';
import ProductsNavScreen from './src/ProductsNavScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Products from './src/Products';
import ProductCard from './src/ProductCard';
import AddProduct from './AddProduct';

const Tab = createMaterialBottomTabNavigator()

export default class App extends Component {

  state = {
    products: []
  }

  addProduct = (product) => {
    const products = this.state.products
    products.push(product)
    this.setState({ products })
    console.log('estado do app.js: ', this.state)
  }

  removeProduct = (product) => {
    const index = this.state.products.findIndex(item => {
      return item.id === product.id
    })
    products.splice(index)
    const products = this.state.products
    this.setState({
      products
    })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator  style={{backgroundColor: '#960FC7'}}>
          <Tab.Screen name='List Products' style={{backgroundColor: 'purple'}}>
            {props => <BudgetsNavScreen {...props}
              products={this.state.products}
              removeProduct={this.removeProduct} />}
          </Tab.Screen>
          <Tab.Screen name='Add Product' style={{backgroundColor: 'purple'}}>
            {() => <AddProduct addProduct={this.addProduct} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
