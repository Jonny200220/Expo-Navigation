import { View } from 'react-native'
import { AppText } from '@/components/AppText'
import React from 'react'
import { Slot } from 'expo-router';

export default function Layout() {
  return <Slot/>; // Esta "Ranura o Slot" es el navegador no instalado,
  // Se puede regresar directamenete un componente.

};