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

export default class Products extends React.Component {
  navigate = (item) => {
    this.props.navigation.navigate('ProductCard', { product: item })
  }

  render() {
    const { products } = this.props
    console.log('products', this.props.products)
    console.log('len', products.length)
    return (
      <ScrollView contentContainerStyle={[!products.length && { flex: 1 }]}>
        <View style={[!products.length && { justifyContent: 'center', flex: 1 }]}>
          {
            !products.length && <CenterMessage message='No saved products!' />
          }
          {
            products.map((item, index) => (
              // <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index} >
                <View style={styles.productContainer}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.price}>{item.price}</Text>
                </View>
              // </TouchableWithoutFeedback>
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