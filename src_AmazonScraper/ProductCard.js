import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

class ProductCard extends React.Component {

  render() {
    const { product } = this.props.route.params
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.productContainer}>
          <View style={styles.cardImageContainer}>
            <Image style={styles.cardImage} source={require(product.src_img)} />
          </View>
          <View style={styles.expenseContainer}>
            <Text style={styles.name}>{expense.product_name}</Text>
            <Text style={styles.price}>${expense.price}</Text>
            <Text style={styles.url}>link: {expense.url}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'black',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  cardImage: {
    width: 80,
    height: 80
  },
  container: {
    flex: 1
  },
  productContainer: {
    paddingBottom: 104
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
  product_name: {
    fontSize: 20
  },
  price: {
    color: 'rgba(0, 0, 0, .5)'
  },
  url: {
    color: 'rgba(0, 0, 0, .5)'
  }
})

export default ProductCard