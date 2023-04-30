import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView
} from 'react-native'

import CenterMessage from './CenterMessage'

import { colors } from './theme'

export default class Budgets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      key: 0 // initialize the key with 0
    };
  }

  navigate = (item) => {
    this.props.navigation.navigate('MonthBudget', { monthBudget: item })
  }

  totalExpenses = (monthBudget) => {
    total = 0
    for (let i = 0; i < monthBudget.expenses.length; i++) {
      total += Number(monthBudget.expenses[i].expense_total)
    }
    return total
  }

  render() {
    const { budgets } = this.props
    console.log('budgets', this.props.budgets)
    return (
      <ScrollView contentContainerStyle={[!budgets.length && { flex: 1 }]}>
        <View style={[!budgets.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !budgets.length && <CenterMessage message='No saved month budgets!' />
          }
          {
            budgets.map((item, index) => {
              const total = this.totalExpenses(item)
              const saldo = item.budget - total
              const bg = total <= item.budget ? colors.safe : colors.debt
              console.log('bg', bg)
              return (
                <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                  <View style={[styles.rowContainer, { backgroundColor: bg }]}>
                    <View style={styles.monthContainer}>
                      <Text style={styles.month}>{item.month}, {item.year}</Text>
                      <Text style={styles.budget}>${item.budget}</Text>
                    </View>
                    <Text style={styles.saldo}>SALDO ${saldo}</Text>
                  </View>
                </TouchableWithoutFeedback>
              )
            })
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#6750A4'
  },
  monthContainer: {
    marginLeft: 5,
    padding: 10,
  },
  month: {
    fontSize: 20,
  },
  budget: {
    color: 'rgba(0, 0, 0, .5)'
  },
  saldo: {
    fontSize: 15,
    color: 'rgba(0, 0, 0, .5)',
    alignSelf: 'center',
    marginRight: 15 
  }
})