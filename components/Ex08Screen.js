import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

const Ex08Screen = () => {
  const [productValue, setProductValue] = useState('');
  const [quantity, setQuantity] = useState('');
  const [paymentCode, setPaymentCode] = useState('');
  const [result, setResult] = useState('');

  const handleCalculate = () => {
    const value = parseFloat(productValue);
    const qty = parseInt(quantity, 10);
    const code = parseInt(paymentCode, 10);

    if (isNaN(value) || isNaN(qty) || isNaN(code) || value <= 0 || qty <= 0) {
      Alert.alert('Erro', 'Por favor, insira valores válidos.');
      return;
    }

    const totalValue = value * qty;
    let discount = 0;

    switch (code) {
      case 1: // À vista
        discount = totalValue * 0.10; // 10% de desconto
        break;
      case 2: // Cartão de crédito
        discount = totalValue * 0.05; // 5% de desconto
        break;
      case 3: // Cartão de débito
        discount = 0; // Sem desconto
        break;
      default:
        Alert.alert('Erro', 'Código de pagamento inválido. Use 1, 2 ou 3.');
        return;
    }

    const finalValue = totalValue - discount;

    setResult(`Valor da compra: R$ ${totalValue.toFixed(2)}\n` +
               `Valor do desconto: R$ ${discount.toFixed(2)}\n` +
               `Valor final: R$ ${finalValue.toFixed(2)}\n` +
               `Tipo de pagamento: ${code === 1 ? 'À vista' : code === 2 ? 'Cartão de crédito' : 'Cartão de débito'}`);
    
    // Limpa os campos após o cálculo
    setProductValue('');
    setQuantity('');
    setPaymentCode('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de Compras</Text>

      <TextInput
        style={styles.input}
        placeholder="Valor do produto (R$)"
        keyboardType="numeric"
        value={productValue}
        onChangeText={setProductValue}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantity}
        onChangeText={setQuantity}
      />

      <TextInput
        style={styles.input}
        placeholder="Código do tipo de pagamento (1-À vista, 2-Crédito, 3-Débito)"
        keyboardType="numeric"
        value={paymentCode}
        onChangeText={setPaymentCode}
      />

      <Button title="Calcular" onPress={handleCalculate} />

      {result ? (
        <Text style={styles.result}>{result}</Text>
      ) : null}
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
    color: 'blue',
  },
});

export default Ex08Screen;