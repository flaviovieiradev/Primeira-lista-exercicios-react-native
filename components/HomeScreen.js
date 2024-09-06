import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {

    const handleButtonClick = (option) => {
        //implementando a lógica para os botoões. Cada botão corresponde
        //a um exercício.
        if (option === 'Exercício 01') {
            navigation.navigate('Ex01');
        }
        if (option === 'Exercício 02') {
            navigation.navigate('Ex02');
        }
        if (option === 'Exercício 03') {
            navigation.navigate('Ex03');
        }
        if (option === 'Exercício 04') {
            navigation.navigate('Ex04');
        }
        if (option === 'Exercício 05') {
            navigation.navigate('Ex05');
        }
        if (option === 'Exercício 06') {
            navigation.navigate('Ex06');
        }
        if (option === 'Exercício 07') {
            navigation.navigate('Ex07');
        }
        if (option === 'Exercício 08') {
            navigation.navigate('Ex08');
        }
    };
    return (
        <View style={styles.container}>


            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 01')}>
                    <Text style={styles.buttonText}>Exercício 01</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 02')}>
                    <Text style={styles.buttonText}>Exercício 02</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 03')}>
                    <Text style={styles.buttonText}>Exercício 03</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 04')}>
                    <Text style={styles.buttonText}>Exercício 04</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 05')}>
                    <Text style={styles.buttonText}>Exercício 05</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 06')}>
                    <Text style={styles.buttonText}>Exercício 06</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 07')}>
                    <Text style={styles.buttonText}>Exercício 07</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={() =>
                    handleButtonClick('Exercício 08')}>
                    <Text style={styles.buttonText}>Exercício 08</Text>
                </TouchableOpacity>
            </View>

        </View>);
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center', // Centraliza os botões verticalmente
        padding: 16,        
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'space-evenly', // Espaçamento uniforme entre os botões        
    },
    button: {
        backgroundColor: '#3498db',
        padding: 15,
        borderRadius: 5,
        flex: 1, // Faz com que o botão preencha o espaço disponível
        alignItems: 'center',
        margin: 7,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    }
});

export default HomeScreen;