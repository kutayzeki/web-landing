import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { SalaryCard } from "../../components/Card/Card";
import SearchBar from "../../components/SearchBar";
import { IconButton } from "../../components/Button";
import useFetch from "../../services/hooks/useFetch";
import getUniqueID from "../../utils/generateId";
import { styles } from "./styles";
import SalaryForm from "../../components/Form";

const MainScreen = () => {
  const uniqueID = getUniqueID();

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });
  const [page, setPage] = useState(1);

  const { data, error, loading, refetch } = useFetch(
    `https://brut.azurewebsites.net/api/v1/Salary/all?pageNumber=${page}&pageSize=10`
  );

  const nextPage = () => {
    setPage(page + 1);
    refetch(
      `https://brut.azurewebsites.net/api/v1/Salary/all?pageNumber=${
        page + 1
      }&pageSize=10`
    );
  };
  const previousPage = () => {
    setPage(page - 1);
    refetch(
      `https://brut.azurewebsites.net/api/v1/Salary/all?pageNumber=${
        page - 1
      }&pageSize=10`
    );
  };
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          style={styles.image}
          source={require("../../../assets/logo.png")}
        />
      </View>

      {screenWidth > 994 ? (
        <View style={{ ...styles.container, width: screenWidth }}>
          <View style={styles.leftContainer}>
            <SalaryForm refetch={refetch} uniqueID={uniqueID} />
          </View>
          <View
            style={{
              ...styles.rightContainer,
              height: Dimensions.get("window").height * 0.9,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: 5,
              }}
            >
              <Text style={{ ...styles.name, fontSize: 20 }}>
                {" "}
                En yeni maaşlar
              </Text>
              <SearchBar
                searchQuery={searchQuery}
                onSearch={handleSearch}
                refetch={refetch}
              />
            </View>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                showsVerticalScrollIndicator={false}
                data={data?.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SalaryCard {...item} />}
              />
            )}
            {data?.totalRecords > 10 && (
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "flex-end",
                  justifyContent: "flex-end",
                  paddingTop: 5,
                }}
              >
                <IconButton
                  disabled={page == 1 ? true : false}
                  icon={"chevron-back"}
                  onPress={previousPage}
                  color={"black"}
                />
                <View style={{ width: 10 }} />
                <IconButton
                  disabled={page == data?.totalPages ? true : false}
                  icon={"chevron-forward"}
                  onPress={nextPage}
                  color={"black"}
                />
              </View>
            )}
          </View>
        </View>
      ) : (
        <View
          style={{
            ...styles.smallContainer,
            width: screenWidth,
          }}
        >
          <View
            style={{ ...styles.smallLeftContainer, width: screenWidth * 0.9 }}
          >
            <SalaryForm refetch={refetch} uniqueID={uniqueID} />
          </View>
          <View
            style={{ ...styles.smallRightContainer, width: screenWidth * 0.95 }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Text style={{ ...styles.name, fontSize: 16 }}>
                {" "}
                En yeni maaşlar
              </Text>
              <SearchBar
                searchQuery={searchQuery}
                onSearch={handleSearch}
                refetch={refetch}
              />
            </View>
            {loading ? (
              <ActivityIndicator />
            ) : (
              <FlatList
                data={data?.data}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SalaryCard {...item} />}
              />
            )}
            {data?.totalRecords > 10 && (
              <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                <IconButton
                  disabled={page == 1 ? true : false}
                  icon={"chevron-back"}
                  onPress={previousPage}
                  color={"black"}
                />
                <View style={{ width: 10 }} />
                <IconButton
                  disabled={page == data?.totalPages ? true : false}
                  icon={"chevron-forward"}
                  onPress={nextPage}
                  color={"black"}
                />
              </View>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default MainScreen;
