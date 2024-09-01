import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
const Ex01Screen = () => { 
    
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [imc, setImc] = useState(null);
    const [mensagem, setMensagem] = useState('');
  
    const calculaIMC = () => {
      const pesoNum = parseFloat(peso);
      const alturaNum = parseFloat(altura) / 100; // converter altura para metros
  
      if (!pesoNum || !alturaNum) {
        setMensagem('Por favor, insira valores válidos.');
        return;
      }
  
      const imcValor = pesoNum / (alturaNum * alturaNum);
      setImc(imcValor.toFixed(2));
  
      if (imcValor < 18.5) {
        setMensagem('Você está abaixo do peso.');
      } else if (imcValor < 24.9) {
        setMensagem('Você está com peso normal.');
      } else if (imcValor < 29.9) {
        setMensagem('Você está com sobrepeso.');
      } else {
        setMensagem('Você está obeso.');
      }
    };
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Exercício 01</Text>
        <Text style={styles.title}>Calculadora de IMC</Text>
  
        <TextInput
          style={styles.input}
          placeholder="Peso (em kg)"
          keyboardType="numeric"
          value={peso}
          onChangeText={setPeso}
        />
  
        <TextInput
          style={styles.input}
          placeholder="Altura (em cm)"
          keyboardType="numeric"
          value={altura}
          onChangeText={setAltura}
        />
  
        <Button title="Calcular IMC" onPress={calculaIMC} />
  
        {imc && (
          <Text style={styles.resultado}>
            Seu IMC é: {imc}
          </Text>
        )}
        {mensagem && <Text style={styles.mensagem}>{mensagem}</Text>}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      padding: 20,
      backgroundColor: '#f5f5f5',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
      textAlign: 'center',
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 15,
      paddingHorizontal: 10,
    },
    resultado: {
      fontSize: 18,
      marginTop: 20,
      textAlign: 'center',
    },
    mensagem: {
      fontSize: 16,
      marginTop: 10,
      textAlign: 'center',
      color: 'blue',
    },
  });

export default Ex01Screen;