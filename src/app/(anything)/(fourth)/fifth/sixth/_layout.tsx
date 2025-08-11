import { View } from 'react-native'
import { AppText } from '@/components/AppText'
import React from 'react'
import { Slot } from 'expo-router';

export default function Layout() {
//   return <Slot/>;
return (
    /**Ignora por completo el archivo index de la carpeta sixth
     * ya que se le hace caso al archivo mas cercano, en este caso el layout
     * 
     * Este puede devolver una pantalla si quiere.
     * Ya que no encuentra un slot, stack o tabs.
     * Que son basicamente el punto de entrada de nuestra app
     */
    <View className='flex-1 justify-center items-center bg-red-200'>
        <AppText>
           Nothing to see here!! 
        </AppText>
    </View>
);
};