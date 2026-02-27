import React from 'react';
import { View, Text, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';

export default function ExampleEvent({ navigation, route }) {
    // Manejo seguro de parámetros
    const { nombre } = route?.params || { nombre: "Invitado" };
    const total = route?.params?.total;

    const handleShowData = () => {
        Alert.alert('🔔 Datos recibidos', `El contador actual es: ${total}`);
    };

    return (
        <View style={styles.container}>
            {/* Tarjeta central para darle profundidad y elegancia */}
            <View style={styles.card}>
                
                <Text style={styles.titulo}>Eventos</Text>
                
                <Text style={styles.descripcion}>
                    Esta es una pantalla de eventos que tiene como función recibir el contador.
                </Text>

                {/* Caja resaltada para los datos */}
                <View style={styles.infoBox}>
                    <Text style={styles.subtitulo}>
                        Hola, <Text style={styles.highlight}>{nombre}</Text>
                    </Text>
                    
                    {total !== undefined && (
                        <Text style={styles.subtitulo}>
                            Contador: <Text style={styles.highlight}>{total}</Text>
                        </Text>
                    )}
                </View>

                {/* Imagen circular con borde */}
                <Image 
                    source={require('../assets/cat.gif')}
                    style={styles.imagen} 
                />

                {/* Botón Principal (Sólido) */}
                <TouchableOpacity style={styles.botonPrimario} onPress={handleShowData}>
                    <Text style={styles.botonTextoPrimario}>Mostrar datos en el Alert</Text>
                </TouchableOpacity>
                
                {/* Botón Secundario (Con contorno) */}
                <TouchableOpacity style={styles.botonSecundario} onPress={() => navigation.navigate("Home")}>
                    <Text style={styles.botonTextoSecundario}>Volver al home</Text>
                </TouchableOpacity>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a',
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
        fontSize: 28,          
        color: '#38bdf8',
        fontWeight: '900',
        marginBottom: 10,
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    descripcion: {
        fontSize: 15,
        color: '#94a3b8',
        textAlign: 'center',
        marginBottom: 20,
        lineHeight: 22,
    },
    infoBox: {
        backgroundColor: '#334155', 
        padding: 15,
        borderRadius: 12,
        width: '100%',
        marginBottom: 25,
    },
    subtitulo: {
        fontSize: 18,          
        color: '#f8fafc',        
        marginBottom: 5,
    },
    highlight: {
        color: '#d638be',
        fontWeight: 'bold',
    },
    imagen: {
        width: 160,       
        height: 160,      
        borderRadius: 20,
        borderWidth: 4,  
        borderColor: '#11033a',
        marginBottom: 25,
    },
    botonPrimario: {
        backgroundColor: '#38bdf8',
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
    botonTextoPrimario: {
        fontSize: 16,
        color: '#0f172a',
        fontWeight: 'bold',
    },
    botonTextoSecundario: {
        fontSize: 16,
        color: '#cbd5e1',
        fontWeight: 'bold',
    },
});