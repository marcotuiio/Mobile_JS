import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity
} from 'react-native'

import * as Random from 'expo-random'
class AddProduct extends React.Component {
  state = {
    url: '',
    product_name: '',
    price: '',
    img_src: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.url === '') {
      alert('please complete url')
    } else {
      const scrapredResult = Scaper(this.state.url)
      const product = {
        url: this.state.url,
        product_name: scrapredResult.name,
        price: scrapredResult.price,
        img_src: scrapredResult.image,
        id: String(Random.getRandomBytes(8)),
      }
      this.props.addProduct(product)
      this.setState({url: '', product_name: '', price: '', img_src: ''})
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <View style={styles.cardImageContainer}>
            <Image source={require('/home/marcotuiio/Mobile_JS/BudgetManager/assets/user.jpg')} style={styles.cardImage} />
          </View>
        </View>
        <Text style={styles.heading}>New Product</Text>
        <TextInput
          placeholder='Amazon URL'
          onChangeText={val => this.onChangeText('url', val)}
          style={styles.input}
          value={this.state.url}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Product</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    backgroundColor: '#6750A4',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: '#000',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#ffffff',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 100
  },
  input: {
    margin: 10,
    backgroundColor: '#EADDFF',
    borderColor: '#6750A4',
    paddingHorizontal: 8,
    height: 50
  },
  containerCard: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: 'white',
    marginBottom: 80,
  },
  cardImageContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#6750A4',
    width: 120,
    height: 120,
    borderRadius: 60,
    marginTop: 30,
    paddingTop: 15
  },
  cardImage: {
    width: 85,
    height: 85
  },
})

export default AddProduct