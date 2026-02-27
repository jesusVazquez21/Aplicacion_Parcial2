import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, Vibration} from 'react-native';

export default function Counter({navigation}) {
    const [count, setCount] = useState(0);
    const Sumar = () => {
        setCount(count+1);
        Vibration.vibrate();
    }
    const Restar = () => setCount(count-1);
    const Restart = () =>setCount(0);

    return (
    <View style={styles.container}>

        <Text style={styles.titulo}>
            Contador
        </Text>

        <Text style={styles.value}>
            {count}
        </Text>

        <Text style={styles.hint}>
            Aqui veremos el estado (useState).
        </Text>

        <TouchableOpacity onPress={Sumar}>
            <Text style={styles.boton}>
                Incrementar Numero 
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Restar}>
            <Text style={styles.boton}>
                Decrementar Numero 
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={Restart}>
            <Text style={styles.boton}>
                Reiniciar 
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("ExampleEvent", {total: count})}>
            <Text style={styles.boton}>
                Enviar contador a Eventos
            </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
            <Text style={styles.boton}>
                Volver al home
            </Text>
        </TouchableOpacity>

        <Image 
        source={require('../assets/cat.gif')}
        style={styles.imagen} 
        />
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#0f172a', 
        alignItems: 'center',
        justifyContent: 'center',
    },
    titulo: {
        fontSize: 36,        
        fontWeight: '900',   
        color: '#38bdf8', 
        marginBottom: 10,       
    },
    value: {
        fontSize: 80,        
        color: '#f8fafc',        
        fontWeight: 'bold', 
        marginBottom: 10,       
    },
    hint: {
        fontSize: 16,
        color: '#94a3b8',
        fontStyle: 'italic',
        marginBottom: 30, 
    },
    boton: {
        backgroundColor: '#1e293b', 
        color: '#38bdf8',
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 14,
        paddingHorizontal: 20,
        borderRadius: 12,
        marginBottom: 15,
        textAlign: 'center',
        minWidth: 260,              
        borderWidth: 1,
        borderColor: '#334155',     
    },
    imagen: {
        width: 100,
        height: 100,
        borderRadius: 20,           
        borderWidth: 3,
        marginTop: 15,
    }
});