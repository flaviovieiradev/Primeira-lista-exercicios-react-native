import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const handleButtonClick = (option) => {
        //implementando a lógica só para o botão de Promoções 
        if (option === 'Promoções') {
            navigation.navigate('Promocoes');
        }
        if (option === 'Exercício 01') {
            navigation.navigate('Ex01');
        } else {
            // Implemente a navegação ou a lógica associada a cada outro botão 
            console.log(`Botão ${option} pressionado`);
        };
    };
    return (
        <View style={styles.container}>
            

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 01')}>
                    <Text style={styles.buttonText}>Exercício 01</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Promoções')}>
                    <Text style={styles.buttonText}>Promoções</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Calças')}>
                    <Text style={styles.buttonText}>Calças</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Camisas')}>
                    <Text style={styles.buttonText}>Camisas</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Acessórios')}>
                    <Text style={styles.buttonText}>Acessórios</Text>
                </TouchableOpacity>
            </View>
        </View>);
};

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
    }, 
    imageContainer: { 
        flex: 0.5, 
    }, 
    image: { 
        flex: 1, 
        resizeMode: 'cover', 
    }, 
    buttonContainer: {
        flex: 0.5,
        padding: 16, 
        justifyContent: 'space-around', 
        alignItems: 'center',
    }, 
    button: { 
        backgroundColor: '#3498db', 
        padding: 15, 
        borderRadius: 5, 
        width: '80%', 
        alignItems: 'center', 
    }, 
    buttonText: { 
        color: '#fff', 
        fontSize: 18, 
    },
}); 

export default HomeScreen;