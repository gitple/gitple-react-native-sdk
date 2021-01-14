import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Gitple, GitpleView } from 'react-native-gitple-sdk';

const APP_CODE = '0gB8bTBoPOE6lWnleDun9wRGIeef11';
const USER_INFO = {
  id: 'reactnatvie002',
  email: 'reactnative@gitple.com',
  name: 'reactnative'
};

function HomeScreen({ navigation }) {
  Gitple.initialize(APP_CODE);

  Gitple.setUser(USER_INFO)
    .then(() => {
      Gitple.unreadCount()
        .then(count => {
          console.info('Gitple get unreadCount:', count);
        })
        .catch(error => {
          console.warn('Gitple get unreadCount failed. error:', error);
        });
    })
    .catch(error => {
      console.warn('Gitple setUser failed. error:', error);
    });
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

function DetailsScreen({ navigation }) {
  let hideHeader = false;
  let userLang = 'ko';
  return (
      <GitpleView 
        hideHeader={hideHeader}
        userLang={userLang} />
    );
}

const Stack = createStackNavigator();

function App() {
return (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);
}

export default App;
