import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function FoodFavScreen({ navigation }) {
    return (
        <ScrollView style={styles.container} contentContainerStyle={styles.scrollContent}>

            <Text style={styles.titulo}>
                Mis Comidas
            </Text>

            <Text style={styles.descripcion}>
                Aquí te comparto mis 3 platillos favoritos. No hay nada mejor que disfrutar de una buena comida después de programar un rato.
            </Text>

            {/* Tarjeta de Comida 1 */}
            <View style={styles.card}>
                <Image 
                    source={require('../assets/tostatun.jpeg')}
                    style={styles.imagen} 
                />
                <Text style={styles.nombreItem}>Tostadas de Atún</Text>
            </View>

            {/* Tarjeta de Comida 2 */}
            <View style={styles.card}>
                <Image 
                    source={require('../assets/Postre.jpg')}
                    style={styles.imagen} 
                />
                <Text style={styles.nombreItem}>Postre de Bombón</Text>
            </View>

            {/* Tarjeta de Comida 3 */}
            <View style={styles.card}>
                <Image 
                    source={require('../assets/milanesa.png')}
                    style={styles.imagen} 
                />
                <Text style={styles.nombreItem}>Milanesa</Text>
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
        backgroundColor: '#0f172a', // Fondo oscuro
    },
    // En el ScrollView, el padding y la alineación se ponen en el contentContainerStyle
    scrollContent: {
        alignItems: 'center',
        padding: 20,
        paddingBottom: 40, // Espacio extra al final para que el botón no quede pegado abajo
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
        height: 200,                // Altura fija para que todas las fotos se vean igual
        borderRadius: 12,
        marginBottom: 15,
    },
    nombreItem: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#f8fafc',
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