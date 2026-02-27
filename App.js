import react from "react";
import { StyleSheet, Text, View } from 'react-native';
import ExampleEvent from "./screens/ExampleEvent";
import Counter from "./screens/Counter";
import AppNavigation from "./navigation/AppNavigation";
import { NavigationContainer } from "@react-navigation/native";

export default function App(){
  return(
    <NavigationContainer>
      <AppNavigation/>
    </NavigationContainer>
  );
}

// import { StatusBar } from 'expo-status-bar';

// export default function App() {
// return (
// <View style={styles.container}>
      
//        {/* Aquí ponemos tu nombre con el estilo de título */}
//         <Text style={styles.titulo}>Hola, soy Jesus Vazquez</Text>
      
//        {/* Aquí el mensaje con estilo de subtítulo */}
//         <Text style={styles.subtitulo}>¡Esta es mi primera App!</Text>
      
//        {/* Esto hace que la hora y batería se vean blancas */}
//       <StatusBar style="light" />
//       </View>
//   );
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#1e272e', 
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   titulo: {
//     fontSize: 32,           
//     color: '#00d2d3',      
//     fontWeight: 'bold',     
//     marginBottom: 10,       
//   },
//   subtitulo: {
//     fontSize: 18,           
//     color: 'white',         
//     fontStyle: 'italic', 
//   },
// });

