import { createStackNavigator } from '@react-navigation/stack'
import Budgets from './Budgets'
import MonthBudget from './MonthBudget'

const BudgetsNav = createStackNavigator();

const BudgetsNavScreen = ({ budgets, addExpense }) => (
  <BudgetsNav.Navigator>
    <BudgetsNav.Screen name="Budgets">
      {props => <Budgets {...props} budgets={budgets} />}
    </BudgetsNav.Screen>
    <BudgetsNav.Screen name="MonthBudget" options={({ route }) => ({ title: route.params.monthBudget.month })}>
      {props => <MonthBudget {...props} addExpense={addExpense} />}
    </BudgetsNav.Screen>
  </BudgetsNav.Navigator>
)

export default BudgetsNavScreen