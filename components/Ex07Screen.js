import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, TextInput, Alert } from 'react-native';

const destinationsData = {
  praias: [
    { name: 'Praia de Copacabana', activities: ['Surf', 'Passeio de barco', 'Caminhada na orla'] },
    { name: 'Praia do Forte', activities: ['Mergulho', 'Visita ao Projeto Tamar', 'Relaxar na areia'] },
  ],
  montanhas: [
    { name: 'Montanhas Rochosas', activities: ['Trilhas', 'Esqui', 'Acampamento'] },
    { name: 'Serra da Mantiqueira', activities: ['Caminhadas', 'Escalada', 'Ciclismo'] },
  ],
  cidadesHistoricas: [
    { name: 'Ouro Preto', activities: ['Visita a museus', 'Passeio histórico', 'Gastronomia local'] },
    { name: 'Paraty', activities: ['Passeio de barco', 'Caminhadas', 'Visita a igrejas'] },
  ],
};

const Ex07Screen = () => {
  const [preference, setPreference] = useState('');
  const [recommendations, setRecommendations] = useState([]);

  const handleRecommendation = () => {
    const lowerPreference = preference.toLowerCase();
    
    if (!destinationsData[lowerPreference]) {
      Alert.alert('Erro', 'Por favor, insira uma preferência válida: praias, montanhas ou cidades históricas.');
      return;
    }

    setRecommendations(destinationsData[lowerPreference]);
    setPreference('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Planejador de Viagens</Text>

      <TextInput
        style={styles.input}
        placeholder="Digite sua preferência (praias, montanhas, cidades históricas)"
        value={preference}
        onChangeText={setPreference}
      />

      <Button title="Recomendar Destinos" onPress={handleRecommendation} />

      {recommendations.length > 0 && (
        <FlatList
          data={recommendations}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <View style={styles.destination}>
              <Text style={styles.destinationName}>{item.name}</Text>
              <Text style={styles.activitiesTitle}>Atividades:</Text>
              {item.activities.map((activity, index) => (
                <Text key={index} style={styles.activity}>
                  - {activity}
                </Text>
              ))}
            </View>
          )}
        />
      )}
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
  destination: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  destinationName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  activitiesTitle: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: '600',
  },
  activity: {
    fontSize: 14,
  },
});

export default Ex07Screen;