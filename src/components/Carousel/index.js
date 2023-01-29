import { View, Text, FlatList } from "react-native";
import React, { useRef, useState } from "react";
import { styles } from "./styles";
import currencyFormat from "../../utils/currencyFormat";
import { IconButton } from "../Button";

const SalaryAverages = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  const itemWidth = 150;
  const offset = 400;
  const onScroll = (event) => {
    const { x } = event.nativeEvent.contentOffset;
    setCurrentIndex(Math.round(x / itemWidth));
  };
  return (
    <View style={{ justifyContent: "center" }}>
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
        ref={flatListRef}
        onScroll={onScroll}
      />
      {currentIndex !== 0 && (
        <View style={styles.previous}>
          <IconButton
            icon={"chevron-back"}
            size={24}
            onPress={() =>
              flatListRef.current.scrollToOffset({
                animated: true,
                offset: currentIndex * itemWidth - offset,
              })
            }
            color={"black"}
          />
        </View>
      )}
      {currentIndex !== data?.length - 1 && (
        <View style={styles.next}>
          <IconButton
            icon={"chevron-forward"}
            size={24}
            onPress={() =>
              flatListRef.current.scrollToOffset({
                animated: true,
                offset: currentIndex * itemWidth + offset,
              })
            }
            color={"black"}
          />
        </View>
      )}
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
        <Text style={styles.salaryText}>{`${currencyFormat(
          item.averageNetSalary
        )} ₺`}</Text>
      </View>
    </View>
  );
};
