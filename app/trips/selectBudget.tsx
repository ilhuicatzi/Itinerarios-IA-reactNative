import { View, Text, TouchableOpacity, FlatList, ToastAndroid } from 'react-native'
import {useEffect ,useState} from 'react'
import { useNavigation, useRouter } from "expo-router";
import { Colors } from "@/constants/Colors";
import CardOptionBudget from '@/components/CardOptionBudget';
import { BudgetOptions } from '@/constants/OptionsTrips';
import { useTrip } from '@/hooks/useTrip';

export default function selectBudget() {
  const router = useRouter();
  const { trip, setTrip } = useTrip();
    const [selectedBudget, setSelectedBudget] = useState({
        id: 0,
        title: "",
        description: "",
        icon: "",
        budget: 0,
      });
    const navigation = useNavigation();

    useEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitle: "",
      });
    }, []);

    const selectBudget = (data: any) => {
        if (selectedBudget.id === 0) {
            ToastAndroid.show("Debes seleccionar una opción", ToastAndroid.SHORT);
          } else {
            setTrip({
              ...trip,
              selectBudget: selectedBudget,
            });
            router.push("/trips/summaryTrip");
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
        Selecciona tu presupuesto
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
          data={
            BudgetOptions
          }
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                setSelectedBudget(item);
              }}
            >
              <CardOptionBudget
                item={item}
                selectedTraveler={selectedBudget}
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
          onPress={() => {
            selectBudget(selectedBudget);
          }}
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
  )
}