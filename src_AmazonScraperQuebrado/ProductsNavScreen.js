import { createStackNavigator } from '@react-navigation/stack';
import Products from './Products';
import ProductCard from './ProductCard';
import { Image } from 'react-native';

const ProductsNav = createStackNavigator();

const ProductsNavScreen = ({ products, removeProduct }) => (
  <ProductsNav.Navigator
    screenOptions={{
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#EADDFF',
      },
      headerRight: () => (
        <Image
          source={require('/home/marcotuiio/Mobile_JS/AmazonScraper/assets/taytay.jpg')}
          style={{ width: 30, height: 30, marginRight: 20 }}
        />
      ),
    }}>
    <ProductsNav.Screen name="Products">
      {props => <Products {...props} products={products} />}
    </ProductsNav.Screen>
    <ProductsNav.Screen name="ProductCard" options={({ route }) => ({ title: route.params.product.product_name })}>
      {props => <ProductCard {...props} removeProduct={removeProduct} />}
    </ProductsNav.Screen>
  </ProductsNav.Navigator>
);

export default ProductsNavScreen;
