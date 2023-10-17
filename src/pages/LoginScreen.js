import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

export default function LoginScreen() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Adicione a lógica de autenticação aqui (por exemplo, verificar o nome de usuário e senha)
    if (username === 'usuario' && password === 'senha') {
      // Se a autenticação for bem-sucedida, você pode navegar para a próxima tela
      // Neste exemplo, navegaremos para a tela Home
      // Certifique-se de adicionar a navegação às suas props
      navigation.navigate('Home');
    } else {
      alert('Nome de usuário ou senha incorretos');
    }
  };

  const handleCadastroNavigation = () => {
    navigation.navigate('Cadastro');
  };

  return (
    <View style={styles.container}>
        <View style={styles.content}>
            <Image 
            source={require("../../assets/logomarca-p.png")}
            style={styles.image}
            />
            <Text style={styles.textLogo}>
                FickeR
            </Text>
      </View>
       
        <Text style={styles.title}>Login</Text>
      <TextInput
        placeholder="Nome de usuário"
        value={username}
        onChangeText={text => setUsername(text)}
        style={styles.input}
      />
      <TextInput
        placeholder="Senha"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      />

        <Button title="Entrar" onPress={handleLogin} />

        <Button title="Cadastrar" onPress={handleCadastroNavigation} />
      </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#FA8072",
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#FFF"
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "black",
    padding: 5,
    margin: 5,
  },
  image:{
    marginTop: -55,
  },
  content:{
    justifyContent: 'center',
    alignItems: 'center',

    marginBottom: 30,
  },
  textLogo:{
    fontSize: 20,
    fontWeight: 'bold',
  }
});
