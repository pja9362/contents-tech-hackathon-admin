import React from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import infoImage from "../images/info_image.png";
import { AntDesign } from "@expo/vector-icons";

const PlantInfoPopup = ({ isVisible, onClose, plantType, plantInfo }) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="close" size={24} color="#CCDF9D" />
          </TouchableOpacity>
          <Text style={styles.infoText}>{plantType}</Text>
          <Text style={{ ...styles.infoText, marginTop: -7 }}>[Kalanchoe]</Text>
          <Image
            source={infoImage}
            style={{ width: 204, height: 219, marginVertical: 20 }}
          />

          <Text style={styles.modalText}>분류: {plantInfo.category}</Text>
          <Text style={styles.modalText}>원산지: {plantInfo.origin}</Text>
          <Text style={styles.modalText}>길이: {plantInfo.length}</Text>
          <Text style={styles.modalText}>
            관리 수준: {plantInfo.difficulty}
          </Text>
          <Text style={styles.modalText}>온도: {plantInfo.temperature}</Text>
          <Text style={styles.modalText}>물주기: {plantInfo.watering}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#F7FAEC",
    borderRadius: 40,
    padding: 40,
    width: 320,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.4,
    shadowRadius: 3.84,
    elevation: 10,
  },
  closeButton: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: "green",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  infoText: {
    marginBottom: 10,
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    color: "#575656",
  },
  modalText: {
    marginVertical: 6,
    textAlign: "center",
    fontSize: 14,
    color: "#575656",
  },
});

export default PlantInfoPopup;
