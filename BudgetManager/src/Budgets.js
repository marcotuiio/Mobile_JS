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
  navigate = (item) => {
    this.props.navigation.navigate('MonthBudget', { product: item })
  }

  render() {
    const { budgets } = this.props
    console.log('budgets', this.props.budgets)
    return (
      <ScrollView contentContainerStyle={[!budgets.length && { flex: 1 }]}>
        <View style={[!budgets.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !budgets.length && <CenterMessage message='No saved budgets!' />
          }
          {
            budgets.map((item, index) => (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.productContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              </TouchableWithoutFeedback>
            ))
          }
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  productContainer: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: '#1976D2'
  },
  name: {
    fontSize: 20,
  },
  price: {
    color: 'rgba(0, 0, 0, .5)'
  },
})