import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  email: string;
  password: string;
};

export default function SignIn() {
  const navigation = useNavigation();
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showPassword, setShowPassword] = useState(false);
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data);
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        router.replace('/mytrip')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("errorCode", errorCode, "errorMessage", errorMessage);
        ToastAndroid.show(
          errorCode, ToastAndroid.SHORT
        )
      });
  };

  return (
    <View
      style={{
        padding: 20,
        paddingTop: 30,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity
        onPress={() => {
          router.back();
        }}
      >
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
      <Text
        style={{
          fontFamily: "outfit-bold",
          fontSize: 32,
          marginBottom: 15,
          marginTop: 20,
        }}
      >
        Vamos a Iniciar Sesión
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          marginTop: 10,
          color: Colors.GREY,
        }}
      >
        Bienvenido de nuevo
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 24,
          marginBottom: 15,
          color: Colors.GREY,
        }}
      >
        Te extrañamos
      </Text>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View
            style={{
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                paddingHorizontal: 10,
              }}
            >
              Email
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
                pattern: /^\S+@\S+$/i,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu email"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="email"
            />
            {errors.email && (
              <Text style={styles.textAlert}>Este campo es requerido</Text>
            )}
          </View>
          <View
            style={{
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                paddingHorizontal: 10,
              }}
            >
              Password
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 6,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <View>
                  <TextInput
                    secureTextEntry={!showPassword}
                    style={styles.input}
                    placeholder="**********"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                  />
                  <TouchableOpacity
                    style={{
                      position: "absolute",
                      right: 12,
                      top: 16,
                    }}
                    onPress={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    {showPassword ? (
                      <Ionicons name="eye" size={24} color="black" />
                    ) : (
                      <Ionicons name="eye-off" size={24} color="black" />
                    )}
                  </TouchableOpacity>
                </View>
              )}
              name="password"
            />

            {errors.password && (
              <Text style={styles.textAlert}>
                Este campo es requerido.
              </Text>
            )}
          </View>

          <TouchableOpacity style={styles.buttonPrimary}>
            <Text style={styles.buttonText1} onPress={handleSubmit(onSubmit)}>
              Iniciar Sesión
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonVariant}
            onPress={() => {
              router.push("auth/signUp");
            }}
          >
            <Text style={styles.buttonText2}>Crear una cuenta</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GREY,
    fontFamily: "outfit",
  },
  buttonPrimary: {
    backgroundColor: Colors.PRIMARY,
    padding: 12,
    borderRadius: 15,
    marginTop: 60,
  },
  buttonVariant: {
    borderColor: Colors.PRIMARY,
    borderWidth: 1,
    padding: 12,
    borderRadius: 15,
    marginTop: 20,
    marginBottom: 20,
  },
  buttonText1: {
    color: Colors.WHITE,
    fontFamily: "outfit-bold",
    fontSize: 16,
    textAlign: "center",
  },
  buttonText2: {
    color: Colors.PRIMARY,
    fontFamily: "outfit-bold",
    fontSize: 16,
    textAlign: "center",
  },
  textAlert: {
    color: Colors.RED,
    fontFamily: "outfit",
    fontSize: 12,
    paddingLeft: 10,
  },
});
