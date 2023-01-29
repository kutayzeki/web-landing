import { View, Text, FlatList } from "react-native";
import React from "react";
import { styles } from "./styles";
import currencyFormat from "../../utils/currencyFormat";

const SalaryAverages = ({ data }) => {
  return (
    <View>
      <FlatList
        horizontal={true}
        pagingEnabled={true}
        data={data}
        style={{ height: 100 }}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: 10 }}
        renderItem={({ item }) => <CarouselCard item={item} />}
        keyExtractor={(item) => item.averageNetSalary}
        snapToInterval={150}
        snapToAlignment={"start"}
      />
    </View>
  );
};

export default SalaryAverages;

const CarouselCard = ({ item }) => {
  return (
    <View key={item} style={styles.card}>
      <View style={styles.topContainer}>
        <Text style={styles.positionText}>{item.position}</Text>
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.levelText}>{item.level}</Text>
        <Text style={styles.salaryText}>{`💵 ${currencyFormat(
          item.averageNetSalary
        )} ₺`}</Text>
      </View>
    </View>
  );
};
