import { View, Text } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";

type CardOptionTravelProps = {
  item: {
    id: number;
    title: string;
    description: string;
    icon: string;
    people: number;
  };
  selectedTraveler: {
    id: number;
    title: string;
    description: string;
    icon: string;
    people: number;
  };
};

export default function CardOptionTravel({ item, selectedTraveler }: CardOptionTravelProps) {
  return (
    <View
      style={[{
        padding: 15,
        backgroundColor: "#F2F2F2",
        borderRadius: 15,
        marginTop: 10,
        borderWidth: 2,
        borderColor: "transparent",
      },
      selectedTraveler.id === item.id && {
        borderColor: Colors.PRIMARY,
      },
    ]}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 10,
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 10,
            width: "80%",
          }}
        >
          <Text
            style={{
              fontFamily: "outfit-medium",
              fontSize: 18,
            }}
          >
            {item.title}
          </Text>
          <Text
            style={{
              fontFamily: "outfit",
              fontSize: 14,
              color: Colors.GREY,
            }}
          >
            {item.description}
          </Text>
        </View>
        <View>
          <Entypo
            name={item.icon as keyof typeof Entypo.glyphMap}
            size={30}
            color="black"
          />
        </View>
      </View>
    </View>
  );
}
