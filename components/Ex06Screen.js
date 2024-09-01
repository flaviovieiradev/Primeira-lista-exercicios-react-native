import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

const Ex06Screen = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [goal, setGoal] = useState('');
  const [feedback, setFeedback] = useState('');

  const handleTrackActivity = () => {
    const durationNum = parseInt(duration, 10);
    const goalNum = parseInt(goal, 10);

    if (isNaN(durationNum) || isNaN(goalNum) || durationNum <= 0 || goalNum <= 0) {
      setFeedback('Por favor, insira valores válidos.');
      return;
    }

    let message = `Você registrou ${durationNum} minutos de ${activity}. `;

    if (durationNum >= goalNum) {
      message += 'Ótimo trabalho! Você atingiu sua meta!';
    } else {
      message += `Você está a ${goalNum - durationNum} minutos da sua meta. Continue se esforçando!`;
    }

    suggestExercise(durationNum, goalNum);
    setFeedback(message);
    setActivity('');
    setDuration('');
  };

  const suggestExercise = (durationNum, goalNum) => {
    if (goalNum - durationNum > 30) {
      setFeedback((prev) => `${prev}\nSugestão: Considere adicionar exercícios de alta intensidade, como HIIT, para maximizar seu tempo.`);
    } else if (goalNum - durationNum <= 30 && goalNum - durationNum > 0) {
      setFeedback((prev) => `${prev}\nSugestão: Tente alongamentos ou caminhadas leves para ajudar a atingir sua meta.`);
    } else {
      setFeedback((prev) => `${prev}\nSugestão: Mantenha-se ativo e varie suas atividades para evitar a monotonia.`);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Rastreador de Atividades Físicas</Text>

      <TextInput
        style={styles.input}
        placeholder="Atividade (Ex: Corrida, Yoga)"
        value={activity}
        onChangeText={setActivity}
      />

      <TextInput
        style={styles.input}
        placeholder="Duração (minutos)"
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <TextInput
        style={styles.input}
        placeholder="Meta de Duração (minutos)"
        keyboardType="numeric"
        value={goal}
        onChangeText={setGoal}
      />

      <Button title="Registrar Atividade" onPress={handleTrackActivity} />

      {feedback ? (
        <Text style={styles.feedback}>{feedback}</Text>
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
  feedback: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
    color: 'blue',
  },
});

export default Ex06Screen;