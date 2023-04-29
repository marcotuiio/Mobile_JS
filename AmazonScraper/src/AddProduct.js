import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity
} from 'react-native'

import * as Random from 'expo-random'
import { colors } from './theme'

const axios = require('axios')
const cheerio = require('cheerio')

async function Scraper(url, product) {
  const { data } = await axios.get(url)
request.get(URL, (err, result) => {
  const $ = cheerio.load(data)
});
  const $ = cheerio.load(data)
  const item = $('div#dp')

  product.name = $(item).find('h1 span#productTitle').text()
  product.price = $(item).find('span .a-price-whole').first().text()
  product.image_src = $(item).find('img#landingImage').attr('src')
}

class AddProduct extends React.Component {
  state = {
    name: '',
    price: '',
    url: '',
    image_src: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.url === '') alert('please complete url')
    const product = {
      url: this.state.url,
      id: String(Random.getRandomBytes(8)),
      name: '',
      price: '',
      image_src: ''
    }
    Scraper(this.state.url, product)
    this.props.addProduct(product)
    this.setState({
      name: '',
      price: '',
      url: '',
      image_src: ''
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Products</Text>
        <TextInput
          placeholder='Product Url'
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
    backgroundColor: '#666',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },
  buttonText: {
    color: 'white',
    fontSize: 18
  },
  heading: {
    color: 'white',
    fontSize: 40,
    marginBottom: 10,
    alignSelf: 'center'
  },
  container: {
    backgroundColor: '#1976D2',
    flex: 1,
    justifyContent: 'center'
  },
  input: {
    margin: 10,
    backgroundColor: 'white',
    paddingHorizontal: 8,
    height: 50
  }
})

export default AddProduct