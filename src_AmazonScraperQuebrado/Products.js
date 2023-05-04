import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  PanResponder,
  Animated,
} from 'react-native';

import CenterMessage from './CenterMessage';

const TRASH_AREA_HEIGHT = 100;

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 0 };
    this.position = new Animated.ValueXY();
    this.panResponder = PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event(
        [
          null,
          {
            dx: this.position.x,
            dy: this.position.y,
          },
        ],
        {
          useNativeDriver: false,
        },
      ),
      onPanResponderRelease: (index, gesture) => {
        if (gesture.moveY > window.innerHeight - TRASH_AREA_HEIGHT && gesture.moveX > 0 && gesture.moveX < window.innerWidth) {
          this.removeProduct(index);
        } else {
          Animated.spring(this.position, {
            toValue: { x: 0, y: 0 },
            useNativeDriver: false,
          }).start();
        }
      },
    });
  }

  navigate = (item) => {
    this.props.navigation.navigate('ProductCard', { product: item });
  };

  removeProduct = (index) => {
    const { products } = this.props;
    const toRemove = products[index];
    this.props.removeProduct(toRemove);
  };
  
  render() {
    const { products } = this.props;
    console.log('products', this.props.products);
    return (
      <ScrollView contentContainerStyle={[!products.length && { flex: 1 }]}>
        <View style={[!products.length && { justifyContent: 'center', flex: 1 }]}>
          {!products.length && <CenterMessage message="No saved products!" />}
          {products.map((item, index) => {
            return (
              <TouchableWithoutFeedback onPress={() => this.navigate(item)} key={index}>
                <Animated.View
                  style={[styles.rowContainer, this.position.getLayout()]}
                  {...this.panResponder.panHandlers}
                >
                  {/* <View style={styles.imageContainer}>
                    <Image style={styles.image} source={require(item.image)} />
                  </View> */}
                  <View style={styles.prodContainer}>
                    <Text style={styles.name}>{item.product_name}</Text>
                    <Text style={styles.price}>${item.price}</Text>
                  </View>
                </Animated.View>
              </TouchableWithoutFeedback>
            );
          })}
        </View>
        <View style={styles.trashContainer}>
          <Text style={styles.trashText}>Drag Here to Delete</Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  rowContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    borderBottomWidth: 2,
    borderBottomColor: '#6750A4',
  },
  imageContainer: {
    padding: 10,
  },
  prodContainer: {
    flex: 1,
    marginLeft: 5,
    padding: 10,
  },
  name: {
    fontSize: 20,
  },
  price: {
    color: 'rgba(0, 0, 0, .5)',
  },
  deleteButton: {
    backgroundColor: 'red',
    width: 40,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
  },
  trashContainer: {
    height: TRASH_AREA_HEIGHT,
    borderTopWidth: 2,
    borderTopColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  trashText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
