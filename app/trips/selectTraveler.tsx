import { View, Text, FlatList, TouchableOpacity, ToastAndroid} from "react-native";
import React from "react";
import { useNavigation, useRouter} from "expo-router";
import { Colors } from "@/constants/Colors";
import { useEffect, useState } from "react";
import CardOptionTravel from "@/components/CardOptionTravel";
import { TravelerOptions } from "@/constants/OptionsTrips";
import { useTrip } from "@/hooks/useTrip";

export default function selectTraveler() {
  const router = useRouter();
  const [selectedTraveler, setSelectedTraveler] = useState({
    id: 0,
    title: "",
    description: "",
    icon: "",
    people: 0,
  });
  const { trip, setTrip } = useTrip();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);
  const continueToTravel = () => {
    if (selectedTraveler.id === 0) {
      ToastAndroid.show("Debes seleccionar una opción", ToastAndroid.SHORT);
    } else {
      setTrip({
        ...trip,
        selectTraveler: selectedTraveler,
      });
      router.push("/trips/selectDate");
    }
  }
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
        Elige como quieres viajar
      </Text>
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            color: Colors.GREY,
          }}
        >
          Recuerda que planear es la mejor parte de un viaje
        </Text>
        <FlatList
          data={TravelerOptions}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedTraveler(item);
              }}
            >
              <CardOptionTravel
                item={item}
                selectedTraveler={selectedTraveler}
              />
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          style={{
            marginTop: 20,
            height: "65%",
          }}
        />
      </View>
      <View>
        <TouchableOpacity
          onPress={continueToTravel}
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
                fontSize: 18,
                color: Colors.WHITE,
                textAlign: "center",
              }}
            >
              Continuar
            </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
