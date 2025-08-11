import { View } from 'react-native'
import React from 'react'
import { AppText } from '@/components/AppText'

export default function deeplyNestedScreen() {
  return (
    <View className='justify-center flex-1 p-4 bg-green-200'>
      <AppText center size='heading' bold >
        deeplyNestedScreen
      </AppText>
    </View>
  )
}
/**
 * Esta es la ruta relativa del proyecto, para buscar una ruta profundamente anidada
 * Las rutas de agrupacion no son parte de la ruta asi que no cuentan, lo que realmente
 * cuenta son las carpetas que contienen el archivo, es decir las carpetas
 * "fifth y sixth"
 */
// src/app/(anything)/(fourth)/fifth/sixth/index.tsx