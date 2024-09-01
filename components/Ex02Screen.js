import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList, CheckBox } from 'react-native';

const moviesData = {
  Action: ['Mad Max: Estrada da Fúria', 'John Wick', 'Duro de Matar'],
  Commedy: ['Ace Ventura', 'Meu Malvado Favorito', 'Se Beber Não Case'],
  Drama: ['O Pior Vizinho do Mundo', 'Forrest Gump', 'Parasita'],
  Horror: ['Alien: Romulus', 'O Exorcista', 'It: A coisa'],
  Romance: ['Todos Menos Você', 'Como Eu Era Antes de Você', 'La La Land'],
};

const Ex02Screen = () => {
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [suggestedMovies, setSuggestedMovies] = useState([]);

  const toggleGenre = (genre) => {
    if (selectedGenres.includes(genre)) {
      setSelectedGenres(selectedGenres.filter((g) => g !== genre));
    } else {
      setSelectedGenres([...selectedGenres, genre]);
    }
  };

  const suggestMovies = () => {
    const moviesToSuggest = selectedGenres.flatMap((genre) => moviesData[genre]);
    setSuggestedMovies(moviesToSuggest);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sugestão de Filmes</Text>
      <Text style={styles.subtitle}>Selecione seus gêneros favoritos:</Text>

      {Object.keys(moviesData).map((genre) => (
        <View key={genre} style={styles.checkboxContainer}>
          <CheckBox
            value={selectedGenres.includes(genre)}
            onValueChange={() => toggleGenre(genre)}
          />
          <Text style={styles.label}>{genre}</Text>
        </View>
      ))}

      <Button title="Sugerir Filmes" onPress={suggestMovies} />

      {suggestedMovies.length > 0 && (
        <View style={styles.suggestions}>
          <Text style={styles.suggestionTitle}>Filmes Recomendados:</Text>
          <FlatList
            data={suggestedMovies}
            keyExtractor={(item) => item}
            renderItem={({ item }) => <Text style={styles.movie}>{item}</Text>}
          />
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    marginLeft: 8,
    fontSize: 18,
  },
  suggestions: {
    marginTop: 20,
  },
  suggestionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  movie: {
    fontSize: 16,
    padding: 5,
  },
});


export default Ex02Screen;

/*

Explicação do Código

1. Dados de Filmes: Uma estrutura de dados (moviesData) que contém gêneros de filmes e listas de filmes correspondentes.

2. Estados:
  selectedGenres: Um array que armazena os gêneros selecionados pelo usuário.
  suggestedMovies: Um array que armazena os filmes recomendados com base nos gêneros selecionados.

3. Função toggleGenre: Esta função adiciona ou remove gêneros da lista de gêneros selecionados quando o usuário interage com a checkbox correspondente.

4. Função suggestMovies: Quando o usuário clica no botão "Sugerir Filmes", esta função compila uma lista de filmes com base nos gêneros selecionados.

5. Interface do Usuário:
  Exibe um título e uma lista de checkboxes para que o usuário selecione seus gêneros favoritos.
  Um botão que, ao ser pressionado, sugere filmes com base nas escolhas do usuário.
  Uma lista de filmes recomendados é exibida quando disponível.

*/