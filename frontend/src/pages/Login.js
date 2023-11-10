import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import topLogo from "../images/top_logo.png";
import mainPlant from "../images/mainPlant.png";
import { AntDesign } from "@expo/vector-icons";
import CustomPopup from "../components/CustomPopup";

const Login = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isVisibleAlert, setIsVisibleAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");

  const onSubmit = (username, password) => {
    if (username !== "" && password !== "") {
      navigation.navigate("MainStack");
    } else {
      setAlertMessage(" 아이디와 비밀번호를 \n 모두 입력해주세요 ");
      setIsVisibleAlert(true);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={topLogo} style={styles.topLogo} />
        <Text
          style={{
            fontSize: 16,
            fontWeight: "bold",
            marginRight: 25,
            color: "#6E381F",
          }}
        >
          회원가입
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={mainPlant} style={styles.mainPlant} />
      </View>
      <View style={styles.bottomSheet}>
        <Text style={styles.mainText}>관리자 로그인</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="아이디를 입력해주세요"
            onChangeText={(text) => setUsername(text)}
            value={username}
          />

          <TextInput
            style={styles.input}
            placeholder="비밀번호를 입력해주세요"
            onChangeText={(text) => setPassword(text)}
            value={password}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => onSubmit(username, password)}
        >
          <Text style={styles.buttonText}>START</Text>
          <AntDesign name="right" size={20} color="white" />
        </TouchableOpacity>
      </View>

      <CustomPopup
        isVisible={isVisibleAlert}
        message={alertMessage}
        onClose={() => setIsVisibleAlert(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  topLogo: {
    width: 160,
    height: 40,
    resizeMode: "contain",
  },
  imageContainer: {
    width: "60%",
    marginHorizontal: "20%",
    marginTop: 60,
    marginBottom: -15,
    zIndex: 2,
    aspectRatio: 1,
    borderRadius: 125,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#CCDF9D",
  },
  mainPlant: {
    width: 320,
    height: 250,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 25,
  },
  mainText: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 50,
    textAlign: "center",
  },
  inputContainer: {
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
  input: {
    width: "80%",
    height: 40,
    backgroundColor: "#fff",
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#D6EAD6",
    paddingHorizontal: 20,
  },
  bottomSheet: {
    backgroundColor: "#F4F8E9",
    width: "100%",
    height: "55%",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: "center",
  },
  button: {
    width: "50%",
    height: 40,
    backgroundColor: "#CCDF9D",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 3,
    bottom: 100,
    position: "absolute",
    borderRadius: 20,
    flexDirection: "row",
    gap: 5,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#6D371E",
    paddingLeft: 10,
  },
});

export default Login;
