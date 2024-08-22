import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/configs/FirebaseConfig";
import { useForm, Controller } from "react-hook-form";

type FormData = {
  fullName: string;
  email: string;
  password: string;
};

export default function SignUp() {
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
    const { fullName, email, password } = data;
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        router.replace('/mytrip')
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
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
        Crear una cuenta
      </Text>
      <Text
        style={{
          fontFamily: "outfit",
          fontSize: 18,
          marginTop: 8,
          color: Colors.GREY,
        }}
      >
        Bienvenido a Intinerarios IA
      </Text>

      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView>
          <View
            style={{
              marginTop: 40,
            }}
          >
            <Text
              style={{
                fontFamily: "outfit-medium",
                paddingHorizontal: 10,
              }}
            >
              Nombre completo
            </Text>
            <Controller
              control={control}
              rules={{
                required: true,
                minLength: 3,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Ingresa tu nombre completo"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="fullName"
            />
            {errors.fullName && <Text style={styles.textAlert}>
              Este campo es requerido y debe tener al menos 3 caracteres.
              </Text>}
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
            {errors.email && <Text style={styles.textAlert}>
              Este campo es requerido y debe ser un email válido.
              </Text>}
          </View>

          <View
            style={{
              marginTop: 20,
              marginBottom: 20,
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
                  secureTextEntry = {!showPassword}
                  style={styles.input}
                  placeholder="**********"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
                <TouchableOpacity
                  style = {{
                    position: 'absolute',
                    right: 12,
                    top: 16,
                  }}
                  onPress={() => {
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? (
                    <Ionicons name="eye" size={24} color="black"  />
                  ) : (
                    <Ionicons name="eye-off" size={24} color="black"  />
                  )}
                </TouchableOpacity>
                
                </View>
              )}
              name="password"
            />
            
            {errors.password && <Text style={styles.textAlert}>
              Este campo es requerido y debe tener al menos 6 caracteres.
              </Text>}
          </View>

          <TouchableOpacity
            style={styles.buttonPrimary}
            onPress={handleSubmit(onSubmit)}
          >
            <Text style={styles.buttonText1}>Crear cuenta</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.buttonVariant}
            onPress={() => {
              router.push("auth/signIn");
            }}
          >
            <Text style={styles.buttonText2}>Iniciar Sesión</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 300,
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
    marginTop: 50,
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
