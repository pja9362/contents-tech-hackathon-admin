import React, { useState } from "react";
import {
  Modal,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import cameraImage from "../images/camera_part.png";
import { AntDesign } from "@expo/vector-icons";

const CameraPopup = ({ isVisible, onClose, plantItem }) => {
  const [message, setMessage] = useState("");
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <AntDesign name="close" size={24} color="#CCDF9D" />
          </TouchableOpacity>
          <Text style={styles.infoText}>알림창</Text>
          <TouchableOpacity>
            <Image
              source={cameraImage}
              style={{ width: 241, height: 278, marginVertical: 20 }}
            />
          </TouchableOpacity>

          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="메시지를 작성해주세요"
              onChangeText={(text) => setMessage(text)}
              value={message}
            />
          </View>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>전송하기</Text>
          </TouchableOpacity>
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
    padding: 20,
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
    zIndex: 1,
  },
  button: {
    borderRadius: 20,
    padding: 10,
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
  inputContainer: {
    width: 295,
    alignItems: "center",
    gap: 20,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#CCDF9D",
    paddingHorizontal: 20,
  },
  button: {
    width: "85%",
    height: 40,
    backgroundColor: "#CCDF9D",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    borderRadius: 20,
    flexDirection: "row",
    gap: 5,
    marginVertical: 20,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6D371E",
    paddingLeft: 10,
  },
});

export default CameraPopup;
