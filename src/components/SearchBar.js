import { useRef, useState } from "react";
import { View, TextInput, Image, StyleSheet } from "react-native";
import { IconButton } from "./Button";

const SearchBar = (props) => {
  const [searchText, setSearchText] = useState("");

  const clearSearch = () => {
    textInputRef.current.clear();
    setSearchText("");
    props.onSearch("");
    props.refetch(
      `https://brut.azurewebsites.net/api/v1/Salary/all?pageNumber=1&pageSize=10`
    );
  };
  const submitEditing = () => {
    // Send request with searchQuery
    props.refetch(
      `https://brut.azurewebsites.net/api/v1/Salary/query?query=${props.searchQuery}`
    );
  };
  const textInputRef = useRef(null);
  return (
    <View style={styles.searchContainer}>
      <Image
        style={styles.searchIcon}
        source={require("../../assets/magnifying-glass.png")}
      />
      <TextInput
        ref={textInputRef}
        style={{ ...styles.searchInput, outlineStyle: "none" }}
        placeholder="Pozisyon Ara"
        onChangeText={(text) => {
          setSearchText(text);
          props.onSearch(text);
        }}
        onSubmitEditing={submitEditing}
      />
      {searchText.length > 0 && (
        <View style={styles.clearButton}>
          <IconButton icon={"close"} onPress={clearSearch} color={"black"} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#ffffff",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#EDEFF2",
    padding: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    padding: 5,
    color: "#4F5F80",
  },
  clearButton: {
    position: "absolute",
    right: 0,
    marginRight: 5,
  },
});

export default SearchBar;
