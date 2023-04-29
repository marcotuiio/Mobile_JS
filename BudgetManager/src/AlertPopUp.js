import React, { Component } from 'react'
import { TouchableHighlight, View, Text, Image, StyleSheet, Alert } from 'react-native'
let styles = {}

export default class AlertPopUp extends Component {
  constructor() {
    super()
    this.state = {
      showMessage: false
    }
    this.showAlert = this.showAlert.bind(this)
  }
  showAlert() {
    Alert.alert(
      'Are you sure you want to delete this budget?',
      'This action cannot be undone.',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Dismiss called...'),
          style: 'destructive'
        },
        {
          text: 'Confirm',
          onPress: () => this.setState({ showMessage: true })
        }
      ]
    )
  }
  render() {
    const { showMessage } = this.state
    return (
      <View style={styles.container}>
        <TouchableHighlight onPress={this.showAlert} style={styles.button}>
          <View>
            <Image style={styles.cardImage} source={require('/home/marcotuiio/Mobile_JS/BudgetManager/assets/trash.png')}/>
          </View>
        </TouchableHighlight>
        {
          showMessage && <Text>DELETED</Text>
        }
      </View>
    )
  }
}

styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  },
  button: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red'
  },
  cardImage: {
    width: 35,
    height: 35
  },
})
