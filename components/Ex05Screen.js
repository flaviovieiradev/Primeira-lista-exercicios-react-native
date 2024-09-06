import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

const Ex05Screen = () => {
  const [energy, setEnergy] = useState('');
  const [sleepQuality, setSleepQuality] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [tips, setTips] = useState(null);

  const handleSubmit = () => {
    const energyNum = Number(energy);
    const sleepQualityNum = Number(sleepQuality);
    const stressLevelNum = Number(stressLevel);
    
    let suggestions = '';
    let errorMessage = '';

    // Verificação de validade
    if (isNaN(energyNum) || energyNum < 1 || energyNum > 10) {
      errorMessage += 'Nível de energia deve ser um número entre 1 e 10.\n';
    }
    if (isNaN(sleepQualityNum) || sleepQualityNum < 1 || sleepQualityNum > 10) {
      errorMessage += 'Qualidade do sono deve ser um número entre 1 e 10.\n';
    }
    if (isNaN(stressLevelNum) || stressLevelNum < 1 || stressLevelNum > 10) {
      errorMessage += 'Nível de estresse deve ser um número entre 1 e 10.\n';
    }

    // Se houver mensagens de erro, defina-as
    if (errorMessage) {
      setTips(errorMessage);
      return; // Não prosseguir se houver erro
    }

    // Estruturas de decisão para sugestões
    if (energyNum < 5) {
      suggestions += 'Tente fazer uma caminhada leve para aumentar sua energia. ';
    }
    if (sleepQualityNum < 5) {
      suggestions += 'Considere estabelecer uma rotina de sono consistente. ';
    }
    if (stressLevelNum > 5) {
      suggestions += 'Experimente técnicas de respiração profunda ou meditação. ';
    }

    setTips(suggestions || 'Você está indo bem! Continue assim.');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monitor de Saúde e Bem-Estar</Text>
      <Text>Nível de Energia (1-10):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={energy}
        onChangeText={setEnergy}
      />
      <Text>Qualidade do Sono (1-10):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={sleepQuality}
        onChangeText={setSleepQuality}
      />
      <Text>Nível de Estresse (1-10):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={stressLevel}
        onChangeText={setStressLevel}
      />
      <Button title="Enviar" onPress={handleSubmit} />
      {tips && (
        <View style={styles.tipsContainer}>
          <Text style={styles.errorText}>{tips}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
  },
  tipsContainer: {
    marginTop: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  errorText: {
    color: 'red',
    fontWeight: 'bold',
  },
});

export default Ex05Screen;