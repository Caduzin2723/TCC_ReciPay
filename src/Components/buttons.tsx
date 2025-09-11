import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';



export default function BotaoCancelar() {
    const router = useRouter();
    const [isFocused, setIsFocused] = useState(false);
    return (
        <TouchableOpacity // botão cículo com "X"
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
    )
}