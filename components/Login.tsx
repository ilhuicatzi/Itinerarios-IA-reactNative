import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from "react-native";
import React from "react";
import { Colors } from "@/constants/Colors";
import { useRouter } from "expo-router";

export default function Login() {
  const { height } = Dimensions.get('window');
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("@/assets/images/login.jpeg")}
        style={{ width: "100%", height: height * 0.55, resizeMode: "cover"}}
      />
      <View
        style={styles.container}
      >
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 28,
            textAlign: "center",
            marginBottom: 15,
            marginTop: 10,
          }}
        >
          Itinerarios IA
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 16,
            textAlign: "center",
            marginBottom: 10,
            color: Colors.GREY,
          }}
        >
          Tienes una idea de viaje? Nosotros te ayudamos a planificarlo y
          organizarlo de la mejor manera
        </Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            router.push("auth/signIn");
          }}
        >
            <Text
                style={styles.buttonText}
            >
                Comenzar
            </Text>

        </TouchableOpacity>
        
      </View>
    </View>
  );
}

const styles =  StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 25,
        height: "100%",
    },
    button: {
        backgroundColor: Colors.PRIMARY,
        padding: 12,
        borderRadius: 99,
        marginTop: "20%",
    },
    buttonText: {
        color: Colors.WHITE,
        fontFamily: "outfit-bold",
        fontSize: 16,
        textAlign: "center",
    },
    });

