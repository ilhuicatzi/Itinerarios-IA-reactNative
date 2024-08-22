import { View } from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useTrip } from "@/hooks/useTrip";


export default function searchPlace() {
  const { trip, setTrip } = useTrip();
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "Buscar Lugares",
    });
  }, []);
  const selectPlace = (data: any, details: any) => {
    console.log({ data, details });
    setTrip({
      ...trip,
      selectPlace: {
        name: details.formatted_address,
        coordinates: {
          lat: details.geometry.location.lat,
          lng: details.geometry.location.lng,
        },
        photoReference: details.photos && details.photos.length > 0 ? details.photos[0].photo_reference : null,
        urlReference: details.url,
      },
    });
    router.push("/trips/selectTraveler");

  }
  useEffect(() => {
    console.log(trip);
  }
  , [selectPlace]);
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Busca tu destino"
        styles={{
          textInput: {
            backgroundColor: "#F2F2F2",
            borderRadius: 15,
            padding: 10,
            fontSize: 16,
            marginTop: 20,
          },
        }}
        fetchDetails={true}
        onPress={selectPlace}
        query={{
          key: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY,
          language: "es",
        }}
      />
    </View>
  );
}
