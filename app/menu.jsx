import {
  View,
  Text,
  Image,
  StyleSheet,
  Appearance,
  Platform,
  SafeAreaView,
  ScrollView,
  FlatList,
} from "react-native";
import { Colors } from "@/constants/Colors";
import React from "react";

import { MENU_ITEMS } from "@/constants/MenuItems";
import MENU_IMAGES from "@/constants/MenuImages";

export default function MenuScreen() {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const styles = createStyle(theme, colorScheme);
  const Container = Platform.OS === "web" ? ScrollView : SafeAreaView;

  const separatorComponent = <View style={styles.separator} />;
  const headerComponent = <Text>Top of List</Text>;
  const footerComponent = <Text style={{ color: theme.text }}>- End -</Text>;

  return (
    <Container>
      <FlatList
        data={MENU_ITEMS}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        // ItemSeparatorComponent={separatorComponent}
        //ListHeaderComponent={headerComponent}
        ListFooterComponent={footerComponent}
        ListFooterComponentStyle={styles.footerComp}
        ListEmptyComponent={<Text>No items</Text>}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.description}>{item.description}</Text>
            </View>
            <Image source={MENU_IMAGES[item.id - 1]} style={styles.image} />
          </View>
        )}
      />
    </Container>
  );
}

const createStyle = (theme, colorScheme) => {
  return StyleSheet.create({
    contentContainer: {
      backgroundColor: theme.background,
      paddingVertical: 20,
    },
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: "center",
      alignItems: "center",
    },
    card: {
      flexDirection: "row",
      backgroundColor: "#fff",
      borderRadius: 10,
      marginBottom: 16,
      marginHorizontal: 10,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.15,
      shadowRadius: 4,
      borderBottomColor: colorScheme === "dark" ? "papayawhip" : "#000",
      // padding: 2,
    },
    item: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
      borderBottomWidth: 1.5,
      borderBottomColor: colorScheme === "dark" ? "papayawhip" : "#000",
    },
    image: {
      width: 100,
      height: 100,
      marginRight: 10,
      borderRadius: 10,
    },
    textContainer: {
      flex: 1,
      padding: 10,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      flex: 2,
    },
    description: {
      fontSize: 14,
      color: "#666",
      flex: 1,
    },
    separator: {
      height: 1,
      width: "100%",
      backgroundColor: "#ccc",
    },
    listFooterComponent: {
      paddingVertical: 15,
      marginHorizontal: "auto",
    },
    footerComp: {
      marginHorizontal: "auto",
    },
  });
};
