import React, { useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import { styles } from "./styles";
import Icon from "react-native-vector-icons/Ionicons";
import { COLORS } from "../../constants/colors";

const Dropdown = ({ options, onOptionSelected, placeholder }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredOptions, setFilteredOptions] = useState(options);
  const [showOptions, setShowOptions] = useState(false);

  const filterOptions = (text) => {
    setSearchText(text);
    setFilteredOptions(
      options.filter((option) =>
        option.name.toLowerCase().includes(text.toLowerCase())
      )
    );
    setShowOptions(true);
  };

  const onOptionPress = (option) => {
    setSearchText(option);
    onOptionSelected(option);
    setShowOptions(false);
  };

  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={styles.input}
          value={searchText}
          editable
          onFocus={() => {
            setShowOptions(true), setSearchText("");
          }}
          onChangeText={filterOptions}
          placeholder={placeholder}
        />

        <Icon
          style={{ position: "absolute", right: 5 }}
          name="chevron-down"
          size={16}
          color={COLORS.BLACK_SOFT}
          onPress={() => console.log("Closed")}
        />
      </View>
      {showOptions && (
        <FlatList
          data={filteredOptions}
          contentContainerStyle={{ height: 150 }}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => {
                onOptionPress(item.name);
              }}
              style={{ height: 30 }}
            >
              <Text>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
  );
};

export default Dropdown;
