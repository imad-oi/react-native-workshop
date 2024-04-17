import React, { useState } from 'react';
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { COLORS, images } from '../constants';
import { validateEmail, validatePassword } from '../utils';

export default function LoginScreen({ navigation }) {
  // la variable form va contenir les valeurs de l'email et du mot de passe
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  // la function handleChange() va mettre à jour les valeurs de l'email et du mot de passe
  const handleChange = (name, value) => {
    setForm({ ...form, [name]: value });
  };

  // la function handleSubmit() va vérifier si l'email et le mot de passe sont valides
  const handleSubmit = () => {
    if (!validateEmail(form.email)) {
      alert('Invalid email');
      return;
    }

    if (!validatePassword(form.password)) {
      alert('Password must be at least 6 characters');
      return;
    }

    // si l'email et le mot de passe sont valides, on navigue vers la page Tasks
    navigation.navigate('Tasks');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* Definir l'image d'arrière plan */}
      <ImageBackground
        source={images.backgroundLogin}
        style={styles.bgImage}
      >
        <Text style={styles.text}>Connect to your account</Text>

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoComplete="email"
          onChangeText={(value) => handleChange('email', value)}
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          textContentType="password"
          onChangeText={(value) => handleChange('password', value)}
        />

        {/* TouchableOpacity est un composant qui permet de rendre n'importe quel élément cliquable,
       avec un effet d'opacité lorsqu'on clique dessus
      */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.btnText}>Sign In</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ScrollView>
  );
}

// les styles de la page Login
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.gray,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    width: '80%',
    borderWidth: 1,
  },
  button: {
    width: '80%',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    color: COLORS.white,
    padding: 10,
  },
  btnText: {
    color: COLORS.white,
  },
  bgImage :{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  }
});
