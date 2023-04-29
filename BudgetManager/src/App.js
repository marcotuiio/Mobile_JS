import 'react-native-gesture-handler';
import React, { Component } from 'react';
import ProductsNavScreen from './src/ProductsNavScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import addMonthBudget from './src/AddBudget'

const Tab = createMaterialBottomTabNavigator()

export default class App extends Component {

  state = {
    budgets: []
  }

  addMonthBudget = (budget) => {
    const budgets = this.state.budgets
    products.push(budget)
    this.setState({ budgets })
    console.log('estado do app.js: ', this.state)
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='List Months'>
            {() => <Products products={this.state.products} />}
          </Tab.Screen>
          <Tab.Screen name='Add Budget'>
            {() => <AddProduct addProduct={this.addProduct} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
