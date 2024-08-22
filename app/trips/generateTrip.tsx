import { View, Text, Image } from "react-native";
import { Colors } from "@/constants/Colors";
import { useTrip } from "@/hooks/useTrip";
import { useEffect, useState } from "react";
import { chatSession } from "@/configs/AiModel";
import { useRouter } from "expo-router";
import { doc, setDoc } from "firebase/firestore"; 
import { auth, db } from "@/configs/FirebaseConfig";

export default function generateTrip() {
  const user = auth.currentUser;
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { trip } = useTrip();
  const AI_PROMPT = `
Generar Plan de Viaje para Destino: ${trip.selectPlace.name}, Duración: ${
    trip.selectDate.totalDays
  } Días y ${trip.selectDate.totalDays - 1} Noches, Para ir: ${
    trip.selectTraveler.title
  } aproximadamente ${trip.selectTraveler.people} personas, Intención: ${
    trip.selectTraveler.description
  }, Presupuesto: ${trip.selectBudget.title} considera ${
    trip.selectBudget.budget
  } dolares. Incluir: Detalles de Vuelo, Precio del Vuelo con URL de Reserva, Lista de Opciones de Hoteles con Nombre del Hotel, Dirección, Precio, URL de Imagen del Hotel, Coordenadas Geográficas, Calificación, Descripción y Lugares para Visitar Cerca del Hotel con Nombre del Lugar, Detalles del Lugar, URL de Imagen del Lugar, Coordenadas Geográficas, Precio de la Entrada, Tiempo de Viaje a Cada Lugar para un viaje de ${
    trip.selectDate.totalDays
  } días y ${
    trip.selectDate.totalDays - 1
  } noches. Incluir un Plan Diario con las Mejores Horas para Visitar Cada Lugar en Formato JSON.
`;

  const GenerateAiTrip = async () => {
    setLoading(true);
    const result = await chatSession.sendMessage(AI_PROMPT);
    console.log(result.response.text())
    setLoading(false);
    const tripResult = JSON.parse(result.response.text());
    const docId = (Date.now() + Math.random()).toString();
    const responseDB = await setDoc(doc(db, "UserTrip", docId ), {
      userId: user?.uid,
      docId: docId,
      userEmail: user?.email,
      tripPlan: tripResult,
      tripData: JSON.stringify(trip),
    });
      console.log(responseDB);
      router.push("(tabs)/mytrip");

  };

  useEffect(() => {
    GenerateAiTrip();
  }, []);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 28,
          marginTop: 10,
          textAlign: "center",
        }}
      >
        Espera un momento ...
      </Text>
      <View
        style={{
          marginTop: 16,
        }}
      >
        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit",
            color: Colors.GREY,
            textAlign: "center",
          }}
        >
          Estamos trabajando en crear el viaje perfecto para ti
        </Text>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <View
          style={{
            marginTop: 16,
            width: 200,
            height: 200,
            borderRadius: 100,
            overflow: "hidden",
            backgroundColor: Colors.WHITE,
          }}
        >
          <Image
            source={require("@/assets/images/avion.gif")}
            style={{
              width: 200,
              height: 200,
              alignSelf: "center",
              objectFit: "cover",
            }}
          />
        </View>

        <Text
          style={{
            fontSize: 16,
            fontFamily: "outfit",
            color: Colors.GREY,
            textAlign: "center",
            marginTop: 30,
          }}
        >
          Espera un momento, por favor no regreses a la pantalla anterior.
        </Text>
      </View>
    </View>
  );
}
