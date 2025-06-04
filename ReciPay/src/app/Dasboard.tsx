import React, { useState } from 'react';
import { View, Text, TextInput, Image, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
{/* cores:
 #1D1D1D - fundo
 #403E3E - fundo dos inputs
 #67EB60 - borda dos inputs
 #ffffff - texto dos inputs 
 #171717 - */}

export default function Dasboard() {
    return (
        <View style={styles.container}>
            <View style={{ width: '100%', height: '10%', backgroundColor: '#171717', justifyContent: 'center' }}>
                <View style={{ width: 45, height: 45, backgroundColor: '#171717', borderRadius: 2, marginLeft: 30 }}>
                    <TouchableOpacity
                        style={{
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#171717',
                            alignItems: 'center',
                        }} onPress={() => { }}>

                        <View style={{ width: '100%', height: 5, backgroundColor: '#67EB60', borderRadius: 2, marginTop: 2 }} />
                        <View style={{ width: '100%', height: 5, backgroundColor: '#67EB60', borderRadius: 2, marginTop: 13 }} />
                        <View style={{ width: '100%', height: 5, backgroundColor: '#67EB60', borderRadius: 2, marginTop: 13 }} />
                    </TouchableOpacity>
                    
                    <View></View>
                    <View />
                </View>
            </View>
        </View>
    );


}



const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        backgroundColor: "#1D1D1D",
        alignItems: 'center'

    },
});