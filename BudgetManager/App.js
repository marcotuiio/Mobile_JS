import 'react-native-gesture-handler';
import React, { Component } from 'react';
import BudgetsNavScreen from './src/BudgetsNavScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import AddMonthBudget from './src/AddMonthBudget'
import Budgets from './src/Budgets';
import MonthBudget from './src/MonthBudget';

const Tab = createMaterialBottomTabNavigator()

export default class App extends Component {

  state = {
    budgets: []
  }

  addMonthBudget = (monthBudget) => {
    const budgets = this.state.budgets
    budgets.push(monthBudget)
    this.setState({ budgets })
    console.log('estado do app.js: ', this.state)
  }

  addExpense = (expense, monthBudget) => {
    const index = this.state.budgets.findIndex(item => {
      return item.id === monthBudget.id
    })
    const chosenMonth = this.state.budgets[index]
    chosenMonth.expenses.push(expense)
    const budgets = [
      ...this.state.budgets.slice(0, index),
      chosenMonth,
      ...this.state.budgets.slice(index + 1)
    ]
    this.setState({
      budgets
    })
  }

  editExpense = (expense, monthBudget) => {
    const index = this.state.budgets.findIndex(item => {
      return item.id === monthBudget.id
    })
    const chosenMonth = this.state.budgets[index]
    const expenseIndex = chosenMonth.expenses.findIndex(item => {
      return item.expense_name === expense.expense_name
    })
    // chosenMonth.expenses[expenseIndex] = expense
    // como saber se a expense foi alterada?
    const budgets = [
      ...this.state.budgets.slice(0, index),
      chosenMonth,
      ...this.state.budgets.slice(index + 1)
    ]
    this.setState({
      budgets
    })
  }

  removeExpense = (expense, monthBudget) => {
    const index = this.state.budgets.findIndex(item => {
      return item.id === monthBudget.id
    })
    const chosenMonth = this.state.budgets[index]
    const expenseIndex = chosenMonth.expenses.findIndex(item => {
      return item.expense_name === expense.expense_name
    })
    chosenMonth.expenses.splice(expenseIndex, 1)
    const budgets = [
      ...this.state.budgets.slice(0, index),
      chosenMonth,
      ...this.state.budgets.slice(index + 1)
    ]
    this.setState({
      budgets
    })
  }

  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='List Months'>
            {props => <BudgetsNavScreen {...props} 
              budgets={this.state.budgets}
              addExpense={this.addExpense} />}
          </Tab.Screen>
          <Tab.Screen name='Add Budget'>
            {() => <AddMonthBudget addMonthBudget={this.addMonthBudget} />}
          </Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
    )
  }
}
