import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

const Ex05Screen = () => {
  const [energyLevel, setEnergyLevel] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [advice, setAdvice] = useState('');

  const evaluateHealth = () => {
    const energy = parseInt(energyLevel, 10);
    const sleep = parseInt(sleepQuality, 10);
    const stress = parseInt(stressLevel, 10);

    if (isNaN(energy) || isNaN(sleep) || isNaN(stress)) {
      setAdvice('Por favor, insira valores válidos para todos os campos.');
      return;
    }

    let suggestions = '';

    if (energy < 5) {
      suggestions += 'Considere aumentar sua atividade física e melhorar sua alimentação.\n';
    } else if (energy > 8) {
      suggestions += 'Bom trabalho! Continue cuidando de sua saúde.\n';
    }

    if (sleep < 5) {
      suggestions += 'Tente estabelecer uma rotina de sono mais consistente.\n';
    } else if (sleep > 8) {
      suggestions += 'Ótimo! Mantenha essa boa qualidade de sono.\n';
    }

    if (stress > 7) {
      suggestions += 'Experimente técnicas de relaxamento como meditação ou yoga.\n';
    } else if (stress < 4) {
      suggestions += 'Bom trabalho em gerenciar seu estresse!\n';
    }

    setAdvice(suggestions || 'Continue monitorando sua saúde e bem-estar!');
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Monitor de Saúde e Bem-Estar</Text>

      <TextInput
        style={styles.input}
        placeholder="Nível de Energia (1-10)"
        keyboardType="numeric"
        value={energyLevel}
        onChangeText={setEnergyLevel}
      />

      <TextInput
        style={styles.input}
        placeholder="Qualidade do Sono (1-10)"
        keyboardType="numeric"
        value={sleepQuality}
        onChangeText={setSleepQuality}
      />

      <TextInput
        style={styles.input}
        placeholder="Nível de Estresse (1-10)"
        keyboardType="numeric"
        value={stressLevel}
        onChangeText={setStressLevel}
      />

      <Button title="Avaliar Saúde" onPress={evaluateHealth} />

      {advice ? (
        <Text style={styles.advice}>{advice}</Text>
      ) : null}
    </ScrollView>
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
  advice: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
});

export default Ex05Screen;