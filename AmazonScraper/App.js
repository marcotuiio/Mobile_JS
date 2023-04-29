import 'react-native-gesture-handler';
import React, { Component } from 'react';
import ProductsNavScreen from './src/ProductsNavScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddProduct from './src/AddProduct'
import Products from './src/Products';

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

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='List Products'>
            {() => <Products products={this.state.products} />}
          </Tab.Screen>
          <Tab.Screen name='Add Product'>
            {() => <AddProduct addProduct={this.addProduct} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
