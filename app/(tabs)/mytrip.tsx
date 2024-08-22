import { View, Text } from "react-native";
import React, { useState } from "react";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import NewCardTrips from "@/components/NewCardTrips";

export default function MyTrip() {
  const [userTrips, setUserTrips] = useState([])
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontFamily: "outfit-bold",
          }}
        >
          Mis Viajes
        </Text>
        <Ionicons name="add-circle" size={40} color="black" />
      </View>
      {
        userTrips?.length === 0 ? (
          <NewCardTrips /> ) : null
      }
    </View>
  );
}
