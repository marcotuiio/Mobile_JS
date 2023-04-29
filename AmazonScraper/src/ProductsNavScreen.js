import { createStackNavigator } from '@react-navigation/stack'
import Products from './Products'
import Product from './ProductCard'

const ProductsNav = createStackNavigator();

const ProductsNavScreen = ({ products }) => (
  <ProductsNav.Navigator>
    <ProductsNav.Screen name="Products">
      {props => <Products {...props} products={products} />}
    </ProductsNav.Screen>
    <ProductsNav.Screen name="ProductCard" options={({ route }) => ({ title: route.params.product.name })}>
      {props => <Product {...props} />}
    </ProductsNav.Screen>
  </ProductsNav.Navigator>
)

export default ProductsNavScreen