import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native'

import CenterMessage from './CenterMessage'
import { colors } from './theme'
import AlertPopUp from './AlertPopUp'

class MonthBudget extends React.Component {

  state = {
    expense_name: '',
    expense_total: ''
  }
  
  onChangeText = (key, value) => {
    this.setState({
      [key]: value
    })
  }

  addExpense = () => {
    if (this.state.expense_name === '' || this.state.expense_total === '') return
    const { monthBudget } = this.props.route.params
    const expense = {
      expense_name: this.state.expense_name,
      expense_total: this.state.expense_total
    }
    this.props.addExpense(expense, monthBudget)
    this.setState({ expense_name: '', expense_total: '' })
  }

  removeExpense = (index) => {
    const { monthBudget } = this.props.route.params
    const toRemove = monthBudget.expenses[index] 
    this.props.removeExpense(toRemove, monthBudget)
    this.setState({ expense_name: '', expense_total: '' })
  }
  
  render() {
    const { monthBudget } = this.props.route.params
    return (
      <View style={{ flex: 1 }}>
        <ScrollView contentContainerStyle={[!monthBudget.expenses.length && { flex: 1 }]}>
          <View style={[styles.expensesContainer, !monthBudget.expenses.length && { flex: 1, justifyContent: 'center' }]}>
            {
              !monthBudget.expenses.length && <CenterMessage message='No expenses for this month!' />
            }
            {
              monthBudget.expenses.map((expense, index) => (
                <View key={index} style={styles.rowContainer}>
                  <View style={styles.expenseContainer}>
                    <Text style={styles.expenseName}>{expense.expense_name}</Text>
                    <Text style={styles.expenseInfo}>${expense.expense_total}</Text>
                  </View>
                  <AlertPopUp 
                    index={index}
                    removeExpense={this.removeExpense}
                  />
                </View>
              ))
            }
          </View>
        </ScrollView>
        <TextInput
          onChangeText={val => this.onChangeText('expense_name', val)}
          placeholder='Expense name'
          value={this.state.expense_name}
          style={styles.input}
          // placeholderTextColor='black'
        />
        <TextInput
          onChangeText={val => this.onChangeText('expense_total', val)}
          placeholder='Expense total'
          value={this.state.expense_total}
          style={[styles.input, styles.input2]}
          // placeholderTextColor='black'
        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.addExpense}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Add Expense</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  expensesContainer: {
    paddingBottom: 104
  },
  input: {
    height: 50,
    backgroundColor: colors.primary,
    paddingHorizontal: 8,
    position: 'absolute',
    width: '100%',
    bottom: 104,
    left: 0
  },
  input2: {
    bottom: 52
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    width: '100%'
  },
  button: {
    height: 50,
    backgroundColor: '#6750A4',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    color: 'white'
  },
  expenseContainer: {
    paddingLeft: 16,
    width: '87%'
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    borderBottomColor: '#6750A4',
    borderBottomWidth: 2,
  },
  expenseName: {
    fontSize: 20
  },
  expenseTotal: {
    color: 'rgba(0, 0, 0, .5)'
  }
})

export default MonthBudget