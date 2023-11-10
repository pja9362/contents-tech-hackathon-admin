import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Ionicons, Feather } from "@expo/vector-icons";
import cameraIcon from "../images/camera_icon.png";
import callIcon from "../images/call_icon.png";
import PlantInfoPopup from "../components/PlantInfoPopup";
import CameraPopup from "../components/CameraPopup";

const PlantDetail = ({ route, navigation }) => {
  const { item } = route.params;

  const [infoPopupVisible, setInfoPopupVisible] = useState(false);
  const [cameraPopupVisible, setCameraPopupVisible] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  };

  const plantInfo = {
    category: "돌나물과",
    origin: "마다가스카르",
    length: "30cm",
    difficulty: "쉬움",
    temperature: "16~20°C",
    watering: "토양 표면이 말랐을때 충분히",
  };

  const onClickType = (type) => {
    setInfoPopupVisible(true);
  };

  const onClickCamera = (item) => {
    setCameraPopupVisible(true);
  };

  return (
    <View style={styles.container}>
      <Ionicons
        onPress={() => handleBack()}
        name="chevron-back-outline"
        size={36}
        color="#F8F8DB"
      />

      <View style={styles.imageContainer}>
        <Image source={item.image} style={styles.mainPlant} />
      </View>

      <View style={styles.detailsContainer}>
        <View
          style={{
            width: "fit-content",
            backgroundColor: "#CCDF9D",
            paddingHorizontal: 30,
            paddingVertical: 10,
            borderRadius: 30,
            marginTop: 20,
            marginBottom: 30,
          }}
        >
          <Text style={styles.mainText}>{item.plantName}</Text>
        </View>

        <Text style={styles.detailText}>보호자: {item.owner}</Text>
        <View style={styles.iconContainer}>
          <TouchableOpacity onPress={() => onClickCamera(item)}>
            <Image source={cameraIcon} style={{ height: 30 }} />
          </TouchableOpacity>
          <Image source={callIcon} style={{ height: 30 }} />
        </View>
        <TouchableOpacity onPress={() => onClickType(item.plantType)}>
          <Text
            style={[styles.detailText, { textDecorationLine: "underline" }]}
          >
            품종: {item.plantType}
          </Text>
        </TouchableOpacity>
        <Text style={styles.detailText}>보관: 23.11.08 ~ 23.11.18</Text>
        <Text style={styles.detailText}>마지막 물주기: {item.lastWater}</Text>
        <View
          style={{
            marginTop: 50,
            backgroundColor: "#CCDF9D",
            paddingHorizontal: 18,
            paddingVertical: 6,
            borderRadius: 30,
          }}
        >
          <Text style={styles.requestText}>요청사항: {item.request}</Text>
        </View>
      </View>
      <PlantInfoPopup
        isVisible={infoPopupVisible}
        onClose={() => setInfoPopupVisible(false)}
        plantInfo={plantInfo}
        plantType={item.plantType}
      />
      <CameraPopup
        isVisible={cameraPopupVisible}
        onClose={() => setCameraPopupVisible(false)}
        plantInfo={item}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C5C2D",
    paddingTop: 50,
    paddingHorizontal: 20,
  },

  imageContainer: {
    alignItems: "center",
    marginTop: 20,
  },
  mainPlant: {
    width: 230,
    height: 230,
    borderRadius: 165,
    borderWidth: 8,
    borderColor: "#CCDF9D",
  },
  detailsContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  mainText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#6E381F",
  },
  detailText: {
    fontSize: 16,
    marginBottom: 10,
    color: "#CCDF9D",
  },
  requestText: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#6E381F",
  },
  iconContainer: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 40,
  },
});

export default PlantDetail;
