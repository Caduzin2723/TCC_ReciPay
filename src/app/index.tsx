import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

{/* cores:
 #1D1D1D - fundo
 #403E3E - fundo dos inputs
 #67EB60 - borda dos inputs
 #fff - texto dos inputs */}

export default function Index() {
  const [isFocused, setIsFocused] = useState(false);
  const router = useRouter();

  return (
    <View style={styles.container}>{/* View - background */}

      {/* abrindo view - barra verde */}
      <View style={{ width: '80%', height: 15, backgroundColor: '#67EB60', borderRadius: 2, marginTop: 25 }} />

      <View style={{ width: '80%', height: '55%', gap: 20, marginTop: 60, backgroundColor: '#ffff' }}>{/* View - carrossels*/}

        {/* carrossel - IMG*/}
        <View>

        </View>

        {/* carrossel - frases*/}
        <View>

        </View>
      </View>

      <View style={{ width: '80%', gap: 20, marginTop: 60, alignItems: 'center' }}>{/* View - botões */}

        {/* botão - Entrar*/}
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => router.push('./Login')}
          >
            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Entrar</Text>
          </TouchableOpacity>
        </View>

        {/* botão - Entrar*/}
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => router.push('./Login')}
          >
            <Text style={{ color: '#ffffff', fontSize: 18, fontWeight: 'bold' }}>Login</Text>
          </TouchableOpacity>
        </View>

        {/* botão - Google*/}
        <View style={{
          width: '80%',
          height: 40,
          backgroundColor: '#EEEEEE',
          borderRadius: 8,
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <TouchableOpacity
            style={styles.TouchableOpacity}
            onPress={() => { }  /* Login com Google */}
          >

          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1D1D1D',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  button: {
    width: '100%',
    height: 40,
    backgroundColor: '#67EB60',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  TouchableOpacity: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

