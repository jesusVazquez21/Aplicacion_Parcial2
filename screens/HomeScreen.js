import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            {/* Contenedor 2*/}
            <View style={styles.card}>
                
                <Text style={styles.titulo}>👋 Bienvenido</Text>

                <View style={styles.infoBox}>
                    <Text style={styles.subtitulo}>
                        <Text style={styles.highlight}>Jesus Vazquez Hernandez</Text>
                    </Text>
                    <Text style={styles.descripcion}>
                        Programacion 5B BIS
                    </Text>
                </View>

                <Image 
                    source={require('../assets/cat.gif')}
                    style={styles.imagen} 
                />

                {/* Botón 1*/}
                <TouchableOpacity 
                    style={styles.botonPrimario} 
                    onPress={() => navigation.navigate("ExampleEvent", { nombre: 'Jesus' })}
                >
                    <Text style={styles.botonTextoPrimario}>Ir a Eventos</Text>
                </TouchableOpacity>

                {/* Botón 2*/}
                <TouchableOpacity 
                    style={styles.botonSecundario} 
                    onPress={() => navigation.navigate("Counter")}
                >
                    <Text style={styles.botonTextoSecundario}>Ir a Contador</Text>
                </TouchableOpacity>

                {/* Botón 3*/}
                <TouchableOpacity 
                    style={styles.botonTerciario} 
                    onPress={() => navigation.navigate("AboutMeScreen")}
                >
                    <Text style={styles.botonTextoPrimario}>Ir About Me</Text>
                </TouchableOpacity>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e272e', 
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    card: {
        backgroundColor: '#1e293b', 
        width: '100%',
        borderRadius: 24,           
        padding: 25,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 15,
        elevation: 8,               
    },
    titulo: {
        fontSize: 32,          
        color: '#00d2d3',      
        fontWeight: '900',          
        marginBottom: 20,           
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    infoBox: {
        backgroundColor: '#334155', 
        padding: 15,
        borderRadius: 12,
        width: '100%',
        marginBottom: 25,
        alignItems: 'center',       
    },
    subtitulo: {
        fontSize: 18,          
        color: '#f8fafc',        
        marginBottom: 5,
        textAlign: 'center',
    },
    descripcion: {
        fontSize: 15,
        color: '#94a3b8',
        textAlign: 'center',
        marginTop: 5,
    },
    highlight: {
        color: '#01c59d',      
        fontWeight: 'bold',
    },
    imagen: {
        width: 140,       
        height: 140,      
        borderRadius: 70,           
        borderWidth: 4,             
        marginBottom: 25,
    },
    botonPrimario: {
        backgroundColor: '#6b3699', 
        width: '100%',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
    },
    botonSecundario: {
        backgroundColor: 'transparent', 
        width: '100%',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        borderWidth: 2,                 
        borderColor: '#475569',
    },
    botonTerciario: {
        backgroundColor: '#6b3699', 
        width: '100%',
        paddingVertical: 14,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 12,
        marginTop: 15,
    },
    botonTextoPrimario: {
        fontSize: 16,
        color: '#ffffff',               
        fontWeight: 'bold',
    },
    botonTextoSecundario: {
        fontSize: 16,
        color: '#cbd5e1',               
        fontWeight: 'bold',
    },
});
