import { View, Text, TouchableOpacity, ToastAndroid } from "react-native";
import React from "react";
import { useEffect, useState, useContext} from "react";
import { useNavigation, useRouter} from "expo-router";
import { Colors } from "@/constants/Colors";
import CalendarPicker from "react-native-calendar-picker";
import { useTrip } from "@/hooks/useTrip";
import moment from "moment";

export default function selectDate() {
  const router = useRouter();
  const { trip, setTrip } = useTrip();
  const [starDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: "",
    });
  }, []);

  const onDateChange = (date: Date, type: string) => {
    if (type === "START_DATE") {
      setStartDate(moment(date).format("YYYY-MM-DD"));
    } else {
      setEndDate(moment(date).format("YYYY-MM-DD"));
    }
  }

  const onDataSelectedContinue = () => {
    if (!starDate || !endDate || starDate === undefined || endDate === undefined) {
      ToastAndroid.show("Debes seleccionar una fecha de inicio y una fecha de fin", ToastAndroid.SHORT);
      return;
    } else {
      const totalDays = moment(endDate).diff(moment(starDate), "days");
      console.log(totalDays+1);
      setTrip({
        ...trip,
        selectDate: {
          startDate: starDate,
          endDate: endDate,
          totalDays: totalDays+1,
        },
      });
      router.push("/trips/selectBudget");
    }
  }

  useEffect(() => {
    console.log(trip);
  }
  , [selectDate]);

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
        Elige la fecha de tu viaje
      </Text>

      <View
        style={{
          marginTop: 30,
        }}
      >
        <CalendarPicker
          previousTitle="Anterior"
          nextTitle="Próximo"
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          todayTextStyle={{fontWeight: 'bold'}}
          selectedRangeStyle={{
            backgroundColor: Colors.SECONDARY,
          }}
          onDateChange={onDateChange}
        />
      </View>
      <View style={{
            marginTop: 20,
      }}>
            <TouchableOpacity
            onPress={onDataSelectedContinue}
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
