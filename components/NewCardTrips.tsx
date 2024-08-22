import { View, Text, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import React, { useContext } from 'react'
import { Colors } from '@/constants/Colors';
import { useRouter } from 'expo-router';

export default function NewCardTrips() {

  const router = useRouter();
  return (
    <View style = {
      {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
        gap: 10,
      }
    }>
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style = {
        {
          fontFamily: "outfit-medium",
          fontSize: 25,
          textAlign: "center",
          marginTop: 10,
        }
      }>Aún no hay viajes planificados</Text>
      <Text style = {
        {
          fontFamily: "outfit",
          fontSize: 16,
          color: Colors.GREY,
          textAlign: "center",
          marginTop: 10,
        }
      }>¡Parece que es hora de planificar una nueva experiencia de viaje! Comience a continuación</Text>
      <TouchableOpacity 
        onPress = {
          () => {
            router.push("/trips/searchPlace");
          }
        }
      style = {
        {
          backgroundColor: "#F2F2F2",
          padding: 12,
          paddingHorizontal: 28,
          marginTop: 10,
          borderRadius: 15,
        }
      }>
        <Text style = {
          {
            fontFamily: "outfit-medium",
            fontSize: 16,
          }
        }>Crear Viaje</Text>
      </TouchableOpacity>
    </View>
  )
}