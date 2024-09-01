import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const Ex04Screen = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [guess, setGuess] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    // Gera um número aleatório entre 1 e 100 quando o componente é montado
    setRandomNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const guessNum = parseInt(guess, 10);

    if (isNaN(guessNum) || guessNum < 1 || guessNum > 100) {
      Alert.alert('Erro', 'Por favor, insira um número entre 1 e 100.');
      return;
    }

    if (guessNum === randomNumber) {
      setMessage('Parabéns! Você adivinhou o número!');
      setRandomNumber(Math.floor(Math.random() * 100) + 1); // Reinicia o jogo
      setGuess('');
    } else if (guessNum < randomNumber) {
      setMessage('O número é maior. Tente novamente!');
    } else {
      setMessage('O número é menor. Tente novamente!');
    }

    setGuess('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adivinhe o Número!</Text>
      <Text style={styles.instructions}>Digite um número entre 1 e 100:</Text>

      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={guess}
        onChangeText={setGuess}
      />

      <Button title="Adivinhar" onPress={handleGuess} />

      {message ? <Text style={styles.message}>{message}</Text> : null}
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
  instructions: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
});

export default Ex04Screen;

/*

Explicação do Código
1. Estados:
    randomNumber: Armazena o número aleatório gerado.
    guess: Armazena o palpite atual do usuário.
    message: Armazena a mensagem a ser exibida com base no palpite do usuário.
2. Geração de Número Aleatório:
    A função setRandomNumber é chamada no useEffect para gerar um número aleatório entre 1 e 100 quando o componente é montado.
3. Função handleGuess:
    Converte o palpite do usuário em um número inteiro.
    Verifica se o palpite é válido (entre 1 e 100).
    Compara o palpite do usuário com o número aleatório e define a mensagem apropriada.
    Se o palpite estiver correto, uma mensagem de sucesso é exibida e um novo número é gerado para reiniciar o jogo.
4. Interface do Usuário:
    Um campo de entrada para o usuário digitar o palpite.
    Um botão para submeter o palpite.
    Exibe mensagens de feedback com base na adivinhação do usuário.

*/