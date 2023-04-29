import { createStackNavigator } from '@react-navigation/stack';
import Budgets from './Budgets';
import MonthBudget from './MonthBudget';
import { Image } from 'react-native';

const BudgetsNav = createStackNavigator();

const BudgetsNavScreen = ({ budgets, addExpense }) => (
  <BudgetsNav.Navigator
    screenOptions={{
      headerTintColor: '#000',
      headerStyle: {
        backgroundColor: '#D8B3E0',
      },
      headerRight: () => (
        <Image
          source={require('/home/marcotuiio/Mobile_JS/BudgetManager/assets/user.jpg')}
          style={{ width: 30, height: 30, marginRight: 20 }}
        />
      ),
    }}>
    <BudgetsNav.Screen name="Budgets">
      {props => <Budgets {...props} budgets={budgets} />}
    </BudgetsNav.Screen>
    <BudgetsNav.Screen name="MonthBudget" options={({ route }) => ({ title: route.params.monthBudget.month })}>
      {props => <MonthBudget {...props} addExpense={addExpense} />}
    </BudgetsNav.Screen>
  </BudgetsNav.Navigator>
);

export default BudgetsNavScreen;
