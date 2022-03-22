import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/FontAwesome5';
import HomeIndex from './secreens/Home/index';
import LoginIndex from './secreens/Home/login';
import UserIndex from './secreens/Home/users';
import PostsIndex from './secreens/Home/posts';
const HomeScreen = createStackNavigator({
    HomeIndex: {
        screen: HomeIndex,
        navigationOptions: {
            header: null
        }
    }
});
const BottomStack = createBottomTabNavigator({
    HomeStack: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Anasayfa',
            tabBarIcon: ({ focused }) => <Icon name={'home'} size={25} color={(focused ? '#2EB086' : '#313552')} />
        }
    },
    OrderStack: {
        screen: LoginIndex,
        navigationOptions: {
            title: 'Login',
            tabBarIcon: ({ focused }) => <Icon name={'user'} solid={true} size={25} color={(focused ? '#2EB086' : '#313552')} />
        }
    },
    CartStack: {
        screen: UserIndex,
        navigationOptions: {
            title: 'User',
            tabBarIcon: ({ focused }) => <Icon name={'users'} size={25} color={(focused ? '#2EB086' : '#313552')} />
        }
    },
    ProfileStack: {
        screen: PostsIndex,
        navigationOptions: {
            title: 'Posts',
            tabBarIcon: ({ focused }) => <Icon name={'database'} size={25} color={(focused ? '#2EB086' : '#313552')} />
        }

    }
},
    {
    tabBarOptions: {
        inactiveTintColor: '#313552',
        activeTintColor: '#2EB086',
    }
});
export default createAppContainer(BottomStack);
