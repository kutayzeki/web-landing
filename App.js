import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  Button,
  Pressable,
  TextInput,
  ActivityIndicator,
} from "react-native";
import { SalaryCard } from "./src/components/Card";
import { Picker } from "@react-native-picker/picker";
import SearchBar from "./src/components/SearchBar";
import { IconButton } from "./src/components/Button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import useFetch from "./src/services/hooks/useFetch";
import { COLORS } from "./src/constants/colors";

export default function App() {
  //#region check Id
  function getUniqueID() {
    const existingID = localStorage.getItem("uniqueID");
    if (existingID) {
      return existingID;
    } else {
      const newID = generateUniqueID();
      localStorage.setItem("uniqueID", newID);
      return newID;
    }
  }
  function generateUniqueID() {
    // Generate a 16-byte array
    var array = new Uint8Array(16);
    window.crypto.getRandomValues(array);

    // Convert the byte array to a hex string
    var hex = "";
    for (var i = 0; i < array.length; i++) {
      hex += ("00" + array[i].toString(16)).slice(-2);
    }

    return hex;
  }
  const uniqueID = getUniqueID();

  //#endregion

  const [screenWidth, setScreenWidth] = useState(
    Dimensions.get("screen").width
  );

  Dimensions.addEventListener("change", ({ window }) => {
    setScreenWidth(window.width);
  });

  const [disabled, setDisabled] = React.useState(false);
  const [position, setPosition] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");
  const [benefits, setBenefits] = useState("");
  const [location, setLocation] = useState("");
  const [sector, setSector] = useState("");
  const [company, setCompany] = useState("");
  const [office, setOffice] = useState("");
  const [level, setLevel] = useState("");
  const [technology, setTechnology] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
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
  const SavePressHandler = async () => {
    setUrl("https://brut.azurewebsites.net/api/v1/Salary");
    setBody({
      normalId: uniqueID,
      position: position,
      experience: experience,
      netSalary: salary,
      otherBenefits: benefits,
      location: location,
      sector: sector,
      company: company,
      office: office,
      technology: "test",
      level: "test",
      employeeCount: "test",
      currency: "test",
    });
  };
  const {
    data: dataPost,
    error: errorPost,
    loading: loadingPost,
    setBody,
    setUrl,
  } = useFetch(null, "POST", null);
  useEffect(() => {
    if (dataPost) {
      refetch(
        `https://brut.azurewebsites.net/api/v1/Salary/all?pageNumber=${page}&pageSize=10`
      );
      setDisabled("");
      setPosition("");
      setExperience("");
      setSalary("");
      setBenefits("");
      setLocation("");
      setSector("");
      setCompany("");
      setOffice("");
      setPage("");
    }
  }, [dataPost]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: COLORS.BACKGROUND,
      }}
    >
      <View
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          flex: 1,
          width: Dimensions.get("window").width,
          backgroundColor: "white",
          height: 60,
          zIndex: 999,
          elevation: 1,
          shadowColor: COLORS.BLACK,
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.18,
          shadowRadius: 4,
          justifyContent: "center",
          alignItems: "baseline",
        }}
      >
        <Image style={styles.image} source={require("./assets/logo.png")} />
      </View>

      {screenWidth > 994 ? (
        <View style={{ ...styles.container, width: screenWidth }}>
          <View
            style={{ ...styles.leftContainer /* width: screenWidth * 0.2  */ }}
          >
            <View style={styles.formContainer}>
              <Text
                style={{
                  ...styles.name,
                  fontSize: 20,
                  textAlign: "left",
                  alignSelf: "baseline",
                  marginBottom: 8,
                }}
              >
                Maaş bilgisi paylaş
              </Text>
              <TextInput
                style={styles.input}
                placeholder="Pozisyon"
                onChangeText={(text) => setPosition(text)}
                value={position}
                maxLength={40}
              />
              <Picker
                mode="dropdown"
                dropdownIconColor={"black"}
                selectedValue={experience}
                style={styles.input}
                itemStyle={{ height: 132 }}
                onValueChange={(itemValue, itemIndex) =>
                  setExperience(itemValue)
                }
              >
                <Picker.Item label={`Deneyim`} value="" />
                <Picker.Item label={`0-1 Yıl`} value="0" />
                <Picker.Item label={`1-3 Yıl`} value="1" />
                <Picker.Item label={`4-6 Yıl`} value="4" />
                <Picker.Item label={`7-9 Yıl`} value="7" />
                <Picker.Item label={`10+ Yıl`} value="10" />
              </Picker>
              <Picker
                mode="dropdown"
                dropdownIconColor={"black"}
                selectedValue={level}
                style={styles.input}
                itemStyle={{ height: 132 }}
                onValueChange={(itemValue, itemIndex) => setLevel(itemValue)}
              >
                <Picker.Item label={`Seviye`} value="" />
                <Picker.Item label={`Junior`} value="Junior" />
                <Picker.Item label={`Mid`} value="Mid" />
                <Picker.Item label={`Senior`} value="Senior" />
              </Picker>
              <TextInput
                style={styles.input}
                placeholder="Aylık net maaş (₺)"
                maxLength={7}
                onChangeText={(text) => setSalary(text)}
                value={salary.replace(/[^0-9]/g, "")}
              />
              <TextInput
                style={styles.input}
                placeholder="Yan haklar"
                onChangeText={(text) => setBenefits(text)}
                value={benefits}
                maxLength={30}
              />
              <TextInput
                style={styles.input}
                placeholder="Lokasyon (İl)"
                onChangeText={(text) => setLocation(text)}
                value={location}
                maxLength={30}
              />
              <Picker
                mode="dropdown"
                dropdownIconColor={"black"}
                selectedValue={employeeCount}
                style={styles.input}
                itemStyle={{ height: 132 }}
                onValueChange={(itemValue, itemIndex) =>
                  setEmployeeCount(itemValue)
                }
              >
                <Picker.Item label={`Şirket Çalışan Sayısı`} value="" />
                <Picker.Item label={`0-10`} value="0-10" />
                <Picker.Item label={`10-30`} value="10-30" />
                <Picker.Item label={`30-100`} value="30-100" />
                <Picker.Item label={`100-300`} value="100-300" />
                <Picker.Item label={`300-1000`} value="300-1000" />
                <Picker.Item label={`1000-5000`} value="1000-5000" />
                <Picker.Item label={`5000+`} value="5000+" />
              </Picker>
              <TextInput
                style={styles.input}
                placeholder="Kullandığın teknolojiler"
                onChangeText={(text) => setTechnology(text)}
                value={technology}
                maxLength={40}
              />
              <Picker
                mode="dropdown"
                dropdownIconColor={"black"}
                selectedValue={office}
                style={styles.input}
                itemStyle={{ height: 132 }}
                onValueChange={(itemValue, itemIndex) => setOffice(itemValue)}
              >
                <Picker.Item label={`Çalışma Şekli`} value="" />
                <Picker.Item label={`Remote`} value="Remote" />
                <Picker.Item label={`Hybrid`} value="Hybrid" />
                <Picker.Item label={`Ofis`} value="Ofis" />
              </Picker>
              <Pressable
                accessibilityRole="button"
                disabled={disabled}
                onKeyDown={(e) => {
                  console.log(e.key);
                }}
                onPress={() => SavePressHandler()}
                style={(state) => [
                  styles.pressable,
                  disabled && styles.disabled,
                ]}
              >
                <Text style={{ color: "white" }}>Gönder</Text>
              </Pressable>
              {/*  <Button
              onPress={() => setDisabled((state) => !state)}
              title={disabled ? "Gönder" : "Gönder"}
            /> */}
            </View>
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
      ) : screenWidth > 600 ? (
        <View
          style={{
            ...styles.midContainer,
            width: screenWidth,
          }}
        >
          <View
            style={{ ...styles.midLeftContainer, width: screenWidth * 0.9 }}
          >
            <View style={styles.midFormContainer}>
              <Text
                style={{
                  ...styles.name,
                  fontSize: 20,
                  textAlign: "left",
                  alignSelf: "baseline",
                  marginBottom: 8,
                }}
              >
                Maaş bilgisi paylaş
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                }}
              >
                <View style={{ width: "45%" }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Pozisyon"
                    onChangeText={(text) => setPosition(text)}
                    value={position}
                    maxLength={40}
                  />
                  <Picker
                    mode="dropdown"
                    dropdownIconColor={"black"}
                    selectedValue={experience}
                    style={styles.input}
                    itemStyle={{ height: 132 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setExperience(itemValue)
                    }
                  >
                    <Picker.Item label={`Deneyim`} value="" />
                    <Picker.Item label={`0-1 Yıl`} value="0" />
                    <Picker.Item label={`1-3 Yıl`} value="1" />
                    <Picker.Item label={`4-6 Yıl`} value="4" />
                    <Picker.Item label={`7-9 Yıl`} value="7" />
                    <Picker.Item label={`10+ Yıl`} value="10" />
                  </Picker>
                  <Picker
                    mode="dropdown"
                    dropdownIconColor={"black"}
                    selectedValue={level}
                    style={styles.input}
                    itemStyle={{ height: 132 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setLevel(itemValue)
                    }
                  >
                    <Picker.Item label={`Seviye`} value="" />
                    <Picker.Item label={`Junior`} value="Junior" />
                    <Picker.Item label={`Mid`} value="Mid" />
                    <Picker.Item label={`Senior`} value="Senior" />
                  </Picker>
                  <TextInput
                    style={styles.input}
                    placeholder="Aylık net maaş (₺)"
                    maxLength={7}
                    onChangeText={(text) => setSalary(text)}
                    value={salary.replace(/[^0-9]/g, "")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Yan haklar"
                    onChangeText={(text) => setBenefits(text)}
                    value={benefits}
                    maxLength={30}
                  />
                </View>
                <View style={{ width: "45%" }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Lokasyon (İl)"
                    onChangeText={(text) => setLocation(text)}
                    value={location}
                    maxLength={30}
                  />
                  <Picker
                    mode="dropdown"
                    dropdownIconColor={"black"}
                    selectedValue={employeeCount}
                    style={styles.input}
                    itemStyle={{ height: 132 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setEmployeeCount(itemValue)
                    }
                  >
                    <Picker.Item label={`Şirket Çalışan Sayısı`} value="" />
                    <Picker.Item label={`0-10`} value="0-10" />
                    <Picker.Item label={`10-30`} value="10-30" />
                    <Picker.Item label={`30-100`} value="30-100" />
                    <Picker.Item label={`100-300`} value="100-300" />
                    <Picker.Item label={`300-1000`} value="300-1000" />
                    <Picker.Item label={`1000-5000`} value="1000-5000" />
                    <Picker.Item label={`5000+`} value="5000+" />
                  </Picker>
                  <TextInput
                    style={styles.input}
                    placeholder="Kullandığın teknolojiler"
                    onChangeText={(text) => setTechnology(text)}
                    value={technology}
                    maxLength={40}
                  />
                  <Picker
                    mode="dropdown"
                    dropdownIconColor={"black"}
                    selectedValue={office}
                    style={styles.input}
                    itemStyle={{ height: 132 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setOffice(itemValue)
                    }
                  >
                    <Picker.Item label={`Çalışma Şekli`} value="" />
                    <Picker.Item label={`Remote`} value="Remote" />
                    <Picker.Item label={`Hybrid`} value="Hybrid" />
                    <Picker.Item label={`Ofis`} value="Ofis" />
                  </Picker>
                </View>
              </View>
              <Pressable
                accessibilityRole="button"
                disabled={disabled}
                onKeyDown={(e) => {
                  console.log(e.key);
                }}
                onPress={() => SavePressHandler()}
                style={(state) => [
                  styles.pressable,
                  disabled && styles.disabled,
                ]}
              >
                <Text style={{ color: "white" }}>Gönder</Text>
              </Pressable>
              {/*  <Button
              onPress={() => setDisabled((state) => !state)}
              title={disabled ? "Gönder" : "Gönder"}
            /> */}
            </View>
          </View>
          <View
            style={{ ...styles.midRightContainer, width: screenWidth * 0.9 }}
          >
            <View
              style={{
                flexDirection: "row",
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center",
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
            <View style={styles.smallFormContainer}>
              <Text
                style={{
                  ...styles.name,
                  fontSize: 20,
                  textAlign: "left",
                  alignSelf: "baseline",
                  marginBottom: 8,
                }}
              >
                Maaş bilgisi paylaş
              </Text>
              <View
                style={{
                  flexDirection: "row",
                  width: "100%",
                  justifyContent: "space-between",
                  paddingHorizontal: 16,
                }}
              >
                <View style={{ width: "45%" }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Pozisyon"
                    onChangeText={(text) => setPosition(text)}
                    value={position}
                    maxLength={40}
                  />
                  <Picker
                    mode="dropdown"
                    dropdownIconColor={"black"}
                    selectedValue={experience}
                    style={styles.input}
                    itemStyle={{ height: 132 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setExperience(itemValue)
                    }
                  >
                    <Picker.Item label={`Deneyim`} value="" />
                    <Picker.Item label={`0-1 Yıl`} value="0" />
                    <Picker.Item label={`1-3 Yıl`} value="1" />
                    <Picker.Item label={`4-6 Yıl`} value="4" />
                    <Picker.Item label={`7-9 Yıl`} value="7" />
                    <Picker.Item label={`10+ Yıl`} value="10" />
                  </Picker>
                  <Picker
                    mode="dropdown"
                    dropdownIconColor={"black"}
                    selectedValue={level}
                    style={styles.input}
                    itemStyle={{ height: 132 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setLevel(itemValue)
                    }
                  >
                    <Picker.Item label={`Seviye`} value="" />
                    <Picker.Item label={`Junior`} value="Junior" />
                    <Picker.Item label={`Mid`} value="Mid" />
                    <Picker.Item label={`Senior`} value="Senior" />
                  </Picker>
                  <TextInput
                    style={styles.input}
                    placeholder="Aylık net maaş (₺)"
                    maxLength={7}
                    onChangeText={(text) => setSalary(text)}
                    value={salary.replace(/[^0-9]/g, "")}
                  />
                  <TextInput
                    style={styles.input}
                    placeholder="Yan haklar"
                    onChangeText={(text) => setBenefits(text)}
                    value={benefits}
                    maxLength={30}
                  />
                </View>
                <View style={{ width: "45%" }}>
                  <TextInput
                    style={styles.input}
                    placeholder="Lokasyon (İl)"
                    onChangeText={(text) => setLocation(text)}
                    value={location}
                    maxLength={30}
                  />
                  <Picker
                    mode="dropdown"
                    dropdownIconColor={"black"}
                    selectedValue={employeeCount}
                    style={styles.input}
                    itemStyle={{ height: 132 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setEmployeeCount(itemValue)
                    }
                  >
                    <Picker.Item label={`Şirket Çalışan Sayısı`} value="" />
                    <Picker.Item label={`0-10`} value="0-10" />
                    <Picker.Item label={`10-30`} value="10-30" />
                    <Picker.Item label={`30-100`} value="30-100" />
                    <Picker.Item label={`100-300`} value="100-300" />
                    <Picker.Item label={`300-1000`} value="300-1000" />
                    <Picker.Item label={`1000-5000`} value="1000-5000" />
                    <Picker.Item label={`5000+`} value="5000+" />
                  </Picker>
                  <TextInput
                    style={styles.input}
                    placeholder="Kullandığın teknolojiler"
                    onChangeText={(text) => setTechnology(text)}
                    value={technology}
                    maxLength={40}
                  />
                  <Picker
                    mode="dropdown"
                    dropdownIconColor={"black"}
                    selectedValue={office}
                    style={styles.input}
                    itemStyle={{ height: 132 }}
                    onValueChange={(itemValue, itemIndex) =>
                      setOffice(itemValue)
                    }
                  >
                    <Picker.Item label={`Çalışma Şekli`} value="" />
                    <Picker.Item label={`Remote`} value="Remote" />
                    <Picker.Item label={`Hybrid`} value="Hybrid" />
                    <Picker.Item label={`Ofis`} value="Ofis" />
                  </Picker>
                </View>
              </View>
              <Pressable
                accessibilityRole="button"
                disabled={disabled}
                onKeyDown={(e) => {
                  console.log(e.key);
                }}
                onPress={() => SavePressHandler()}
                style={(state) => [
                  styles.pressable,
                  disabled && styles.disabled,
                ]}
              >
                <Text style={{ color: "white" }}>Gönder</Text>
              </Pressable>
              {/*  <Button
              onPress={() => setDisabled((state) => !state)}
              title={disabled ? "Gönder" : "Gönder"}
            /> */}
            </View>
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
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    backgroundColor: "#FAFBFC",
    flex: 1,
    width: Dimensions.get("window").width,
    minWidth: 300,
    maxWidth: 1200,
    height: Dimensions.get("window").height,
    alignItems: "baseline",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 20,
  },
  midContainer: {
    alignSelf: "center",
    backgroundColor: "#FAFBFC",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "column",
  },
  midLeftContainer: {
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EDEFF2",
    alignItems: "center",
    alignSelf: "center",
    margin: 16,
    marginTop: 100,
  },
  midFormContainer: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    width: "100%",
  },
  midRightContainer: {
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 8,
    alignSelf: "center",
    margin: 16,
  },
  smallContainer: {
    alignSelf: "center",
    backgroundColor: "#FAFBFC",
    flex: 1,
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    flexDirection: "column",
  },
  smallLeftContainer: {
    width: Dimensions.get("window").width * 0.9,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EDEFF2",
    alignItems: "center",
    alignSelf: "center",
    margin: 12,
    marginTop: 80,
  },
  smallFormContainer: {
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    width: "100%",
  },
  smallRightContainer: {
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 8,
    alignSelf: "center",
    margin: 16,
  },
  leftContainer: {
    width: "30%",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EDEFF2",
    alignItems: "center",
    alignSelf: "flex-start",
    margin: 16,
    marginTop: 100,
  },
  rightContainer: {
    marginTop: 50,
    width: "60%",
    padding: 16,
  },
  formContainer: {
    backgroundColor: "white",
    padding: 16,
    borderRadius: 8,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "100%",
    padding: 8,
    marginVertical: 8,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "#F2F3F6",
    borderRadius: 8,
    color: "grey",
  },

  name: {
    fontWeight: "bold",
    fontSize: 16,
    color: "#4F5F80",
  },

  pressable: {
    width: "100%",
    height: 42,
    backgroundColor: "#2D70FD",
    borderWidth: 1,
    borderColor: "#F2F3F6",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginTop: 10,
  },
  disabled: {
    opacity: 0.5,
  },
  image: {
    height: 50,
    width: 50,
    marginLeft: 10,
    resizeMode: "contain",
  },
});
