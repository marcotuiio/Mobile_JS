import { createStackNavigator } from '@react-navigation/stack'
import Budgets from './Budgets'
import MonthBudget from './MonthBudget'

const BudgetsNav = createStackNavigator();

const BudgetsNavScreen = ({ Budgets }) => (
  <BudgetsNav.Navigator>
    <BudgetsNav.Screen name="Budgets">
      {props => <Budgets {...props} Budgets={Budgets} />}
    </BudgetsNav.Screen>
    <BudgetsNav.Screen name="ProductCard" options={({ route }) => ({ title: route.params.Budgets.month })}>
      {props => <Product {...props} />}
    </BudgetsNav.Screen>
  </BudgetsNav.Navigator>
)

export default BudgetsNavScreen