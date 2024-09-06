import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

const Ex06Screen = () => {
  const [activity, setActivity] = useState('');
  const [duration, setDuration] = useState('');
  const [goal, setGoal] = useState('');
  const [activities, setActivities] = useState([]);
  const [feedback, setFeedback] = useState('');

  const handleAddActivity = () => {
    const activityDuration = Number(duration);
    if (!activity || isNaN(activityDuration)) {
      setFeedback('Por favor, insira uma atividade válida e a duração em minutos.');
      return;
    }

    setActivities([...activities, { activity, duration: activityDuration }]);
    setActivity('');
    setDuration('');
    provideFeedback(activityDuration);
  };

  const provideFeedback = (activityDuration) => {
    if (goal === 'perder peso' && activityDuration >= 30) {
      setFeedback('Bom trabalho! Continue assim para alcançar seu objetivo de perda de peso.');
    } else if (goal === 'ganhar massa muscular' && activityDuration >= 45) {
      setFeedback('Excelente! Você está no caminho certo para ganhar massa muscular.');
    } else if (goal === 'manter forma' && activityDuration >= 20) {
      setFeedback('Ótimo trabalho! Manter-se ativo é importante para a saúde.');
    } else {
      setFeedback('Continue se esforçando! Cada minuto conta.');
    }
  };

  const renderActivity = ({ item }) => (
    <Text style={styles.activityText}>{item.activity} - {item.duration} minutos</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Rastreador de Atividades Físicas</Text>

      <Text style={styles.label}>Atividade:</Text>
      <TextInput
        style={styles.input}
        value={activity}
        onChangeText={setActivity}
      />

      <Text style={styles.label}>Duração (minutos):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={duration}
        onChangeText={setDuration}
      />

      <Text style={styles.label}>Objetivo (perder peso, ganhar massa muscular, manter forma):</Text>
      <TextInput
        style={styles.input}
        value={goal}
        onChangeText={setGoal}
      />

      <Button title="Adicionar Atividade" onPress={handleAddActivity} />

      {feedback ? <Text style={styles.feedback}>{feedback}</Text> : null}

      <FlatList
        data={activities}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderActivity}
        style={styles.activityList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },
  label: {
    marginVertical: 10,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 15,
  },
  feedback: {
    marginVertical: 15,
    fontSize: 16,
    color: 'green',
  },
  activityList: {
    marginTop: 20,
  },
  activityText: {
    fontSize: 16,
    padding: 5,
  },
});

export default Ex06Screen;