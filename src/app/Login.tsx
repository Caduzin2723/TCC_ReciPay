import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
{/* cores:
 #1D1D1D - fundo
 #403E3E - fundo dos inputs
 #67EB60 - borda dos inputs
 #fff - texto dos inputs */}

export default function Login() {
  const router = useRouter();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>{/* View - background */}
      <View style={{ width: '100%', height: 15, backgroundColor: '#67EB60', borderRadius: 2, marginTop: 0 }} />{/* abrindo view - barra verde */}

      <View style={{ width: '80%', gap: 20, marginTop: 60 }}>{/* View - botão de cancelar login */}
        <View style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: '#403E3E',
        }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#403E3E',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => router.push('../') /* redireciona para a página inicial */}
          >
            <Text style={{
              color: '#67EB60',
              textAlign: 'center',
              lineHeight: 40,
              fontSize: 25
            }}>x</Text>

          </TouchableOpacity>
        </View>
      </View>{/* View - botão de cancelar login */}

      <View style={{ width: '75%', gap: 10, marginTop: 70 }}> {/* View - container de logo e título */}
        <Text style={{ color: '#dddddd', fontSize: 28, textAlign: 'left' }}>
          Entrar
        </Text>
      </View>

      <View style={{ width: '75%', gap: 30, marginTop: 50 }}> {/* View - container de inputs */}
        <View>
          <Text style={{ color: '#ccc', fontSize: 18, margin: 0, padding: 0 }}>
            E-mail
          </Text>
          <TextInput
            style={styles.form}
            placeholder=" "
            placeholderTextColor="#999999" />
        </View>
        <View>
          <Text style={{ color: '#ccc', fontSize: 18, margin: 0, padding: 0 }}>
            Senha
          </Text>
          <TextInput
            style={[
          styles.form,
          isFocused && styles.inputFocused // aplica a borda verde se estiver focado
        ]}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder=" "
        placeholderTextColor="#999"
      />
        </View>
      </View>

      <View style={{ width: '70%', gap: 10, marginTop: 50 }}> {/* View - botão 'entrar' */}
        <TouchableOpacity
          style={{
            width: '100%',
            height: 40,
            backgroundColor: '#67EB60',
            borderRadius: 8,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          onPress={() => router.push('../Dasboard') /* redireciona para a página de dashboard */}
        >
          <Text style={{
            color: '#1D1D1D',
            fontSize: 24,
            textAlign: 'center',
            lineHeight: 30
          }}>Entrar</Text>
        </TouchableOpacity>
        <Text style={{
          color: '#ccc',
          fontSize: 16,
          textAlign: 'left',
          marginTop: 5
        }}>Não tem uma conta? Cadastre-se </Text>
      </View>
    </View>
  );
}



// ESTILOS
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: "#1D1D1D",
    alignItems: 'center'

  },

  form: {
    width: '100%',
    height: 40,
    backgroundColor: '#403E3E',
    borderColor: 'transparent',
    color: '#ffff',
    borderWidth: 2,
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 0,
    padding: 0,
  },

    inputFocused: {
    borderColor: '#67EB60',
  },

});