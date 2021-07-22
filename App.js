import React, {useState} from 'react;'
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function App() {
    const [peso, setPeso]= useState('');
    const [altura, setAltura]= useState('');

    function handleSubmit(){
        const alt = altura / 100;
        const imc = peso / (alt * alt);

        if(imc)
    }
}