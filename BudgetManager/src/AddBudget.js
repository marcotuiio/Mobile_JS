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
class AddProduct extends React.Component {
  
  state = {
    month: '',
    year: '',
    budget: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.month === '' || this.state.budget) alert('please complete month and budget')
    if (this.state.year === '') this.state.year = new Date().getFullYear()
    const monthBudget = {
      month: this.state.month,
      budget: this.state.budget,
      year: this.state.year,
      id: String(Random.getRandomBytes(8)),
      expenses: []
    }
    this.props.addMonthBudget(monthBudget)
    this.setState({
      month: '',
      year: '',
      budget: ''
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.heading}>Products</Text>
        <TextInput
          placeholder='Month'
          onChangeText={val => this.onChangeText('month', val)}
          style={styles.input}
          value={this.state.month}
        />
        <TextInput
          placeholder='Year'
          onChangeText={val => this.onChangeText('year', val)}
          style={styles.input}
          value={this.state.year}
        />
        <TextInput
          placeholder='Budget'
          onChangeText={val => this.onChangeText('budget', val)}
          style={styles.input}
          value={this.state.budget}
        />
        <TouchableOpacity onPress={this.submit}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Add Budget</Text>
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