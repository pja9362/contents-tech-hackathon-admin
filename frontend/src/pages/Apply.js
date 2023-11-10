import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import getPlantDummyImage from "../utils/getPlantDummyImage";

const Apply = () => {
  const dummyItems = [
    {
      id: "1",
      plantName: "죽순이",
      owner: "푸바오",
      plantType: "무늬페페",
      request: "긱프렌즈 영양제 부탁드립니다!",
      image: getPlantDummyImage(4),
    },
    {
      id: "2",
      plantName: "레몬트리",
      owner: "루돌프",
      plantType: "데이지",
      request: "없음",
      image: getPlantDummyImage(5),
    },
  ];

  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.mainText}>보관 요청</Text>

      <ScrollView showsVerticalScrollIndicator={false} style={styles.itemList}>
        {dummyItems.map((item, index) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("PlantDetail", { item })}
            key={index}
            style={styles.item}
          >
            <View style={{ flexDirection: "row", gap: 8 }}>
              <Image source={item.image} style={styles.itemImage} />
              <View style={styles.itemInfo}>
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    marginVertical: 15,
                    color: "#000",
                  }}
                >
                  {item.plantName}
                </Text>
                <Text style={styles.infoText}>보호자: {item.owner}</Text>
                <Text style={styles.infoText}>품종: {item.plantType}</Text>
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 20,
                borderRadius: 20,
                backgroundColor: "#CCDF9D",
                width: "75%",
                paddingVertical: 5,
                marginTop: 10,
                alignItems: 'center'
              }}
            >
              <Text style={styles.requestText}>요청 사항: {item.request}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C5C2D",
  },
  mainText: {
    fontWeight: "bold",
    fontSize: 24,
    color: "#F1F2C6",
    textAlign: "center",
    marginVertical: 40,
  },
  itemList: {
    flex: 1,
    margin: 20,
  },
  item: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    borderRadius: 30,
    borderColor: "#CCDF9D",
    borderWidth: 2,
    marginBottom: 16,
    height: 177,
  },
  itemInfo: {
    width: "40%",
    paddingLeft: 5,
    paddingBottom: 20,
  },
  itemImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginRight: 10,
  },
  infoText: {
    fontSize: 12,
    color: "gray",
    lineHeight: 16,
  },
  requestText: {
    fontSize: 13,
    color: "#6E381F",
    fontWeight: "bold",
  },
});

export default Apply;
