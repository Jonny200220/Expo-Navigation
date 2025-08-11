import { Pressable, View } from "react-native";
import { AppText } from "@/components/AppText";
import { Link, useRouter } from "expo-router";
import SecondScreen from "./second";
import { Button } from "@/components/Button";

export default function IndexScreen() {

  // Otra forma de Navegar es usar el routerHook
  const router = useRouter();

  return (
    <View className="justify-center flex-1 p-4">
        <AppText center size="heading" bold >
          Index Screen
        </AppText>
        {/* La Propiedad push es para asegurarse de que 
        la pantalla second es independiente de la pantalla index */}
        <Link href={"/second"} push className="mb-5"> {/*Stack == Pila = Apilar las pantallas con estructura LIFO */}
          Push to Second sin compoonente Button
        </Link>
          <Button title="Push to /Second"
          onPress={()=>{
            router.push("/second");
          }}/>

        {/*Se pueden combinar componentes por ejemplo: 
          El unico pero es que para combinarlos se tiene que agregar la prop asChild
          */}
        <Link href={"/third"} push asChild >
          <Button title="Push to Third"/>
        </Link>

          {/*Mala practica porque por default el componente Link ya puede manejar en onPress en todas sus variantes */}
        {/* <Link href={"/second"} push>
          <Pressable>
            <AppText>
              Push to second desde Pressable
            </AppText>
          </Pressable>
        </Link> */}

        <Link href={"/fifth/sixth"} push asChild >
          <Button title="Push to Deeply Nested Screen"/>
        </Link>

    </View>
  );
}
