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
class AddMonthBudget extends React.Component {
  state = {
    month: '',
    year: '',
    budget: ''
  }
  onChangeText = (key, value) => {
    this.setState({ [key]: value })
  }
  submit = () => {
    if (this.state.month === '' || this.state.budget === '') {
      alert('please complete month and budget')
    } else {
      if (this.state.year === '') this.state.year = new Date().getFullYear()
      const monthBudget = {
        month: this.state.month,
        budget: this.state.budget,
        year: this.state.year,
        id: String(Random.getRandomBytes(8)),
        expenses: []
      }
      this.props.addMonthBudget(monthBudget)
      this.setState({month: '', year: '', budget: ''})
    }
  }
  
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.containerCard}>
          <View style={styles.cardImageCircle}>
            <Image source={require('/home/marcotuiio/Mobile_JS/BudgetManager/assets/eu.jpeg')} style={styles.cardImage} />
          </View>
        </View>
        <Text style={styles.heading}>New Monthly Budget</Text>
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
  cardImageCircle: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 3,
    borderColor: '#6750A4',
    width: 130,
    height: 130,
    borderRadius: 80,
    marginTop: 30,
  },
  cardImage: {
    marginTop: 3,
    borderRadius: 60,
    width: 120,
    height: 120
  },
})

export default AddMonthBudget