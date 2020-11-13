import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import WriteStoryScreen from './WriteStoryScreen';

function WriteStoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>WriteStory</Text>
    </View>
  );
}

function ReadStoryScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>ReadStory</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="WriteStory" component={WriteStoryScreen} />
        <Tab.Screen name="ReadStory" component={ReadStoryScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}