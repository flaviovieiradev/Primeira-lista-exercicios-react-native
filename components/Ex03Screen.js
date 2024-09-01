import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Ex03Screen = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [savingsPercentage, setSavingsPercentage] = useState(null);
  const [message, setMessage] = useState('');

  const calculateSavings = () => {
    const incomeNum = parseFloat(income);
    const expensesNum = parseFloat(expenses);

    if (isNaN(incomeNum) || isNaN(expensesNum) || incomeNum <= 0) {
      setMessage('Por favor, insira valores válidos.');
      return;
    }

    const savings = incomeNum - expensesNum;
    const savingsPercent = (savings / incomeNum) * 100;

    setSavingsPercentage(savingsPercent.toFixed(2));

    if (savingsPercent > 15) {
      setMessage('Invista seu dinheiro');
    } else if (savingsPercent >= 10) {
      setMessage('Vamos investir no próximo mês');
    } else {
      setMessage('Vamos continuar tentando');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Economia</Text>

      <TextInput
        style={styles.input}
        placeholder="Total de Receitas (R$)"
        keyboardType="numeric"
        value={income}
        onChangeText={setIncome}
      />

      <TextInput
        style={styles.input}
        placeholder="Total de Despesas (R$)"
        keyboardType="numeric"
        value={expenses}
        onChangeText={setExpenses}
      />

      <Button title="Calcular Economia" onPress={calculateSavings} />

      {savingsPercentage !== null && (
        <Text style={styles.result}>
          Você economizou: {savingsPercentage}%
        </Text>
      )}
      {message && <Text style={styles.message}>{message}</Text>}
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
  result: {
    fontSize: 18,
    marginTop: 20,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    marginTop: 10,
    textAlign: 'center',
    color: 'blue',
  },
});

export default Ex03Screen;



/*
Explicação do Código

1. Estados:
    income: Armazena o total de receitas.
    expenses: Armazena o total de despesas.
    savingsPercentage: Armazena a porcentagem de economia calculada.
    message: Armazena a mensagem a ser exibida com base na economia.

2. Função calculateSavings:
    Converte as entradas de receita e despesa em números.
    Verifica se os valores são válidos.
    Calcula a economia e a porcentagem de economia.
    Define a mensagem com base na porcentagem economizada.

3. Interface do Usuário:
    Permite que o usuário insira receitas e despesas.
    Um botão para calcular a economia.
    Exibe a porcentagem de economia e a mensagem apropriada.

*/