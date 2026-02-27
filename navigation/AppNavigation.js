import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {StyleSheet} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ExampleEvent from '../screens/ExampleEvent';
import Counter from '../screens/Counter';
import AboutMeScreen from '../screens/AboutMeScreen';
import comidasFavoritas from '../screens/comidasFavoritas';
import pelisFavoritas from '../screens/pelisFavoritas';

const Stack = createNativeStackNavigator();

export default function AppNavigation(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{title: 'Inicio'}}
            />
            <Stack.Screen
                name="ExampleEvent"
                component={ExampleEvent}
                options={{title: 'Eventos'}}
            />
            <Stack.Screen
                name="Counter"
                component={Counter}
                options={{title: 'Contador'}}
            />
            <Stack.Screen
                name="AboutMeScreen"
                component={AboutMeScreen}
                options={{title: 'About Me'}}
            />
            <Stack.Screen
                name="comidasFavoritas"
                component={comidasFavoritas}
                options={{title: 'Comidas Favoritas'}}
            />
            <Stack.Screen
                name="pelisFavoritas"
                component={pelisFavoritas}
                options={{title: 'Peliculas Favoritas'}}
            />
        </Stack.Navigator>
    );
}
