import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function MoviesFavScreen({ navigation }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>

            <Text style={styles.titulo}>
                🎬 Mis Películas
            </Text>

            <Text style={styles.descripcion}>
                Estas son las películas que más me han marcado. Me encanta disfrutar del buen cine y las historias atrapantes.
            </Text>

            {/* Tarjeta de Película 1 */}
            <View style={styles.card}>
                <Image 
                    source={require('../assets/shrek.png')}
                    style={styles.imagen} 
                />
                <Text style={styles.nombreItem}>Shrek 2</Text>
            </View>

            {/* Tarjeta de Película 2 */}
            <View style={styles.card}>
                <Image 
                    source={require('../assets/spiderman.png')}
                    style={styles.imagen} 
                />
                <Text style={styles.nombreItem}>Spider-Man: Across the Spider-Verse</Text>
            </View>

            {/* Tarjeta de Película 3 */}
            <View style={styles.card}>
                <Image 
                    source={require('../assets/panda.png')}
                    style={styles.imagen} 
                />
                <Text style={styles.nombreItem}>Kung Fu Panda 2</Text>
            </View>

            {/* Botón para regresar a Sobre Mí */}
            <TouchableOpacity
                style={styles.botonSecundario} 
                onPress={() => navigation.navigate("AboutMeScreen")}
            >
                <Text style={styles.botonTextoSecundario}>⬅ Volver a Sobre Mí</Text>
            </TouchableOpacity>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#0f172a',
    },
    scrollContent: {
        alignItems: 'center',
        padding: 20,
        paddingBottom: 40, 
    },
    titulo: {
        fontSize: 36,        
        fontWeight: '900',   
        color: '#38bdf8',       
        marginBottom: 10,
        textAlign: 'center',
    },
    descripcion: {
        fontSize: 16, 
        color: '#cbd5e1',           
        textAlign: 'center',
        marginBottom: 30,           
        lineHeight: 24,             
        paddingHorizontal: 10,
    },
    card: {
        backgroundColor: '#1e293b', 
        width: '100%',
        borderRadius: 16,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: '#334155',
    },
    imagen: {
        width: '100%',
        height: 200,                
        borderRadius: 12,
        marginBottom: 15,
    },
    nombreItem: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f8fafc',
        textAlign: 'center',
    },
    botonSecundario: {
        backgroundColor: 'transparent', 
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginTop: 10,              
        alignItems: 'center',
        minWidth: 260,
        borderWidth: 1,
        borderColor: '#475569',     
    },
    botonTextoSecundario: {
        color: '#94a3b8',
        fontSize: 18,
        fontWeight: 'bold',
    },
});