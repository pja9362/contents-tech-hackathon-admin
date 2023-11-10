import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import Header from "../components/Header";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import getPlantDummyImage from "../utils/getPlantDummyImage";
import NoSearchImage from "../images/noSearchImage.png";

const Main = ({navigation}) => {
  const dummyItems = [
    {
      id: "1",
      plantName: "포도",
      owner: "북두칠성",
      plantType: "칼랑코에",
      lastWater: "2일 전",
      request: "영양제 부탁드립니다!",
      image: getPlantDummyImage(1),
    },
    {
      id: "2",
      plantName: "뽀삐",
      owner: "진아지롱",
      plantType: "스노우 사파이어",
      lastWater: "7일 전",
      request: "수분 관리 신경 써서 부탁드립니다!",
      image: getPlantDummyImage(3),
    },
    {
      id: "3",
      plantName: "우리집 막내",
      owner: "현성현정이",
      plantType: "다육이",
      lastWater: "4일 전",
      request: "부탁해요! 2주 뒤에 찾으러 갈게요~",
      image: getPlantDummyImage(2),
    },
  ];

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState(dummyItems);

  const handleSearch = () => {
    const results = dummyItems.filter(
      (item) =>
        item.plantType.toLowerCase().includes(searchText.toLowerCase()) ||
        item.plantName.toLowerCase().includes(searchText.toLowerCase()) ||
        item.owner.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchResults(results);
  };

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const [sortOption, setSortOption] = useState("최신순");

  const handleSort = (option) => {
    setSortOption(option);
    const sortedResults = [...searchResults];

    if (option === "최신순") {
      sortedResults.sort(
        (a, b) => new Date(b.lastWater) - new Date(a.lastWater)
      );
    } else if (option === "가나다순") {
      sortedResults.sort((a, b) => a.plantName.localeCompare(b.plantName));
    }

    setSearchResults(sortedResults);
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.contentContainer}>
        <View style={styles.title}>
          <Text style={styles.titleText}>보관 식물</Text>
        </View>

        <View style={styles.searchContainer}>
          <Ionicons
            name="search"
            size={24}
            color="gray"
            style={styles.searchIcon}
          />
          <TextInput
            style={styles.searchBar}
            placeholder="고객명, 식물 이름"
            placeholderTextColor="#D9D9D9"
            onChangeText={(text) => setSearchText(text)}
            onSubmitEditing={handleSearch}
            value={searchText}
          />
        </View>

        {/* 필터 */}
        <View style={styles.sortOptions}>
          <TouchableOpacity
            style={{ flexDirection: "row", alignItems: "center", gap: 8 }}
            onPress={toggleDropdown}
          >
            <Text style={styles.sortOptionText}>{sortOption}</Text>
            <FontAwesome5 name="sort" size={18} color="#4C5C2D" />
          </TouchableOpacity>
        </View>
        {isDropdownOpen && (
          <View style={styles.dropdown}>
            <TouchableOpacity onPress={() => handleSort("최신순")}>
              <Text style={styles.dropdownOption}>최신순</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleSort("가나다순")}>
              <Text style={styles.dropdownOption}>가나다순</Text>
            </TouchableOpacity>
          </View>
        )}

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.itemList}
        >
          {searchResults.length === 0 ? (
            <View style={styles.noResultsContainer}>
              <Image source={NoSearchImage} style={styles.noResultsImage} />
              <Text style={styles.noResultsText}>검색 결과가 없습니다..</Text>
            </View>
          ) : (
            searchResults.map((item, index) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("PlantDetail", { item })}
                key={index}
                style={[
                  styles.item,
                  index === searchResults.length - 1
                    ? { marginBottom: 80 }
                    : null,
                ]}
              >
                <View style={{ flexDirection: "row", gap: 8 }}>
                  <Image source={item.image} style={styles.itemImage} />
                  <View style={styles.itemInfo}>
                    <Text
                      style={{
                        fontWeight: "bold",
                        fontSize: 15,
                        marginVertical: 10,
                        color: "#575656",
                      }}
                    >
                      {item.plantName}
                    </Text>
                    <Text style={styles.infoText}>보호자: {item.owner}</Text>
                    <Text style={styles.infoText}>품종: {item.plantType}</Text>
                    <Text style={styles.infoText}>
                      마지막 물주기: {item.lastWater}
                    </Text>
                  </View>
                </View>
                <View
                  style={{
                    marginHorizontal: 20,
                    borderRadius: 20,
                    backgroundColor: "#CCDF9D",
                    paddingHorizontal: 12,
                    paddingVertical: 5,
                    marginTop: 10,
                  }}
                >
                  <Text style={styles.requestText}>
                    요청 사항: {item.request}
                  </Text>
                </View>
              </TouchableOpacity>
            ))
          )}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4C5C2D",
  },
  contentContainer: {
    backgroundColor: "#F7FAEC",
    flex: 1,
    marginBottom: 30,
    marginTop: 50,
    marginHorizontal: 20,
    borderRadius: 25,
  },
  title: {
    backgroundColor: "#AA5535",
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  titleText: {
    fontWeight: 700,
    fontSize: 20,
    color: "#F1F2C6",
  },

  searchContainer: {
    margin: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  searchIcon: {
    marginRight: 8,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderColor: "#D6EAD6",
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
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
  noResultsContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  noResultsImage: {
    width: 150,
    height: 200,
    marginBottom: 10,
  },
  noResultsText: {
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
  },
  //   필터
  sortOptions: {
    flexDirection: "row",
    justifyContent: "flex-end",
    marginHorizontal: 25,
  },
  sortOptionText: {
    color: "#575656",
    fontSize: 14,
    fontWeight: "bold",
  },
  dropdown: {
    position: "absolute",
    width: 100,
    backgroundColor: "#e9e9e9",
    borderRadius: 5,
    elevation: 5,
    padding: 10,
    right: 20,
    top: 170,
    zIndex: 2,
  },
  dropdownOption: {
    fontSize: 14,
    color: "#575656",
    fontWeight: "bold",
    paddingVertical: 5,
  },
  activeSortOption: {
    color: "#AA5535",
  },
});

export default Main;
