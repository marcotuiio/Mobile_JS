import React, { Component } from 'react';
import { Image, StyleSheet, Text, View} from 'react-native';


export default class App extends Component {
   render() {
       return (
           <View style={styles.container}>
               <View style={styles.cardContainer}>
                   <View style={styles.cardImageContainer}>
                       <Image style={styles.cardImage} source={require('./assets/user.jpg')}/>
                   </View>
                   <View>
                       <Text style={styles.cardTitle}>
                           Peter Parker
                       </Text>
                   </View>
                   <View style={styles.cardOccupationContainer}>
                       <Text style={styles.cardOccupation}>
                           Your friendly neighbor
                       </Text>
                   </View>
                   <View>
                       <Text style={styles.cardDescription}>
                          Peter Parker is your friendly neighbor hero, aka, Spider Man.
                          He is very good with swinging from buildings and fighting crime.
                       </Text>
                   </View>
               </View>
           </View>
       );
   }
}


const profileCardColor = 'dodgerblue';


const styles = StyleSheet.create({
   container: {
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
   },
   cardContainer: {
       alignItems: 'center',
       borderColor: 'black',
       borderWidth: 3,
       borderStyle: 'solid',
       borderRadius: 20,
       backgroundColor: profileCardColor,
       width: 300,
       height: 400
   },
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
   cardName: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 24,
       marginTop: 30,
   },
   cardOccupationContainer: {
       borderColor: 'black',
       borderBottomWidth: 3
   },
   cardOccupation: {
       fontWeight: 'bold',
       marginTop: 10,
       marginBottom: 10,
   },
   cardDescription: {
       fontStyle: 'italic',
       marginTop: 10,
       marginRight: 40,
       marginLeft: 40,
       marginBottom: 10
   },

   cardTitle: {
       color: 'white',
       fontWeight: 'bold',
       fontSize: 24,
       marginTop: 30,
       textShadowColor: 'black',
       textShadowOffset: {
           height: 2,
           width: 2
       },
       textShadowRadius: 3
   }
});
