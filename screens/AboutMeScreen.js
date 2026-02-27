import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function AboutMeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <Image 
                source={require('../assets/cat.gif')}
                style={styles.imagen} 
            />

            <Text style={styles.titulo}>
                Sobre Mí
            </Text>

            <Text style={styles.descripcion}>
                ¡Hola! Soy un estudiante de la UTD del grupo 5B BIS. 
                Me gusta jugar, programar y escuchar musica. Y Ocasionalmente
                dibujar a mano y en digital. 
                A continuación, puedes conocer un poco más sobre mis gustos.
            </Text>

            {/* Aquí está la corrección: El texto ahora está dentro de <Text> */}
            <TouchableOpacity style={styles.boton} onPress={() => navigation.navigate("comidasFavoritas")}>
                <Text style={styles.botonTexto}>Comidas Favoritas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.boton} 
                onPress={() => navigation.navigate("pelisFavoritas")}
            >
                <Text style={styles.botonTexto}>Películas Favoritas</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.botonSecundario} 
                onPress={() => navigation.navigate("Home")}
            >
                <Text style={styles.botonTextoSecundario}>Volver al Home</Text>
            </TouchableOpacity>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: 800,
        backgroundColor: '#0f172a',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,                
    },
    titulo: {
        fontSize: 36,        
        fontWeight: '900',   
        color: '#38bdf8',       
        marginBottom: 15,
        textAlign: 'center',
    },
    descripcion: {
        fontSize: 16,
        color: '#cbd5e1',           
        textAlign: 'center',
        marginBottom: 40,           
        lineHeight: 24,             
        paddingHorizontal: 10,
    },
    boton: {
        backgroundColor: '#1e293b', 
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 15,
        alignItems: 'center', 
        minWidth: 260,              
        borderWidth: 1,
        borderColor: '#334155',     
    },
    botonSecundario: {
        backgroundColor: 'transparent', 
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginTop: 20,              
        alignItems: 'center',
        minWidth: 260,
        borderWidth: 1,
        borderColor: '#475569',     
    },
    botonTexto: {
        color: '#38bdf8',
        fontSize: 18,
        fontWeight: 'bold',
    },
    botonTextoSecundario: {
        color: '#94a3b8',
        fontSize: 18,
        fontWeight: 'bold',
    },
    imagen: {
        width: 120,
        height: 120,
        borderRadius: 20,      
        borderWidth: 3, 
        marginBottom: 20,
    }
});