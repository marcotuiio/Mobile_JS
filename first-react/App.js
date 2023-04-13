import { StatusBar } from  'expo-status-bar';
import { Component } from  'react';
import { StyleSheet, Text, View } from  'react-native';

class App extends Component {
    state = {
        name:  'Marco',
        year: 2021,
        color: ['blue']
    }

    updateYear () {
        this.setState({ year: 2023 })
    }
  
    render() {
    return (
      <View>
        <Text>My name is {this.state.name}</Text>
        <Text onPress={() => this.updateYear()}>
            My year is {this.state.year}
        </Text>
        <Text>My color is {this.state.color}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

export default App;