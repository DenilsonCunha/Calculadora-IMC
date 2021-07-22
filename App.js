import React, {useState} from 'react;'
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default function App() {
    const [peso, setPeso]= useState('');
    const [altura, setAltura]= useState('');

    function handleSubmit(){
        const alt = altura / 100;
        const imc = peso / (alt * alt);

        if(imc < 18.6){
            alert('Você está abaixo do peso! ' + imc.topFixed(2));
        }else if(imc >= 18.6 && imc < 24.9){
            alert('Peso ideal! ' + imc.toFixed(2));
        }else if(imc >= 24.9 && imc < 34.9){
            alert('Levemente acima do peso! ' + imc.toFixed(2));
        }
    }
};