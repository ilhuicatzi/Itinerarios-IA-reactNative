import { View, Text, TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { useTrip } from "@/hooks/useTrip";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome6 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import moment from "moment";

export default function summaryTrip() {
  const { trip } = useTrip();
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
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
        }}
      >
        Resumen de tu viaje
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
          }}
        >
          Antes de continuar, revisa que los datos de tu viaje sean correctos
        </Text>
      </View>

      <View
        style={{
          marginTop: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 15,
            marginTop: 24,
          }}
        >
          <Entypo name="location" size={30} color="black" />
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit",
                color: Colors.GREY,
              }}
            >
              Destino
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit-bold",
                color: Colors.PRIMARY,
              }}
            >
              {trip.selectPlace.name}
            </Text>
          </View>
        </View>
        
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 15,
            marginTop: 16,
          }}
        >
          <Entypo name="calendar" size={30} color="black" />
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit",
                color: Colors.GREY,
              }}
            >
              Fecha del viaje
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit-bold",
                color: Colors.PRIMARY,
              }}
            >
              {moment(trip.selectDate.startDate).format("DD MMMM")} -{" "}
              {moment(trip.selectDate.endDate).format("DD MMMM YYYY") + " "} ({trip.selectDate.totalDays} días)
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 15,
            marginTop: 16,
          }}
        >
          <Ionicons name="people-sharp" size={30} color="black" />
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit",
                color: Colors.GREY,
              }}
            >
              Viajas {trip.selectTraveler.title === "Solo" ? " " : "en"}
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit-bold",
                color: Colors.PRIMARY,
              }}
            >
              {trip.selectTraveler.title}
              
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            gap: 15,
            marginTop: 16,
          }}
        >
          <FontAwesome6 name="circle-dollar-to-slot" size={30} color="black" />
          <View
            style={{
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit",
                color: Colors.GREY,
              }}
            >
              Presupuesto
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontFamily: "outfit-bold",
                color: Colors.PRIMARY,
              }}
            >
              {trip.selectBudget.title}
            </Text>
          </View>
        </View>

      </View>

      <View style ={{
        marginTop: 20,
      }}>
        <TouchableOpacity
          onPress={() => router.push("/trips/generateTrip")}
          style={{
            backgroundColor: Colors.PRIMARY,
            padding: 15,
            borderRadius: 15,
            marginTop: 20,
          }}
        >
            <Text
              style={{
                fontFamily: "outfit-medium",
                fontSize: 16,
                color: Colors.WHITE,
                textAlign: "center",
              }}
            >
              Generar Itinerario
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
