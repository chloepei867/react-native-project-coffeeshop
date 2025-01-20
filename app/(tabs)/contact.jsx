import { View, Text, StyleSheet, Image, Button, Alert } from "react-native";
import React from "react";
import coffeeDetailsImg from "@/assets/images/coffee-details.jpg";

const contact = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          resizeMode="cover"
          source={coffeeDetailsImg}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Time: 9am - 6pm</Text>
        <Text style={styles.text}>Address: 1234 Hamilton Ave, NY</Text>
      </View>
    </View>
  );
};

export default contact;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  // content: {
  //   alignItems: "center", // 子元素水平居中
  // },
  imageContainer: {
    width: "100%", // 图片容器宽度适应屏幕
    alignItems: "center", // 水平居中
    // justifyContent: "flex-start",
    // padding: 40,
  },
  textContainer: {
    // justifyContent: "center",
    alignItems: "flex-start",
    // padding: 20,
    // margin: 20,
    // backgroundColor: "#f0f0f0",
  },
  text: {
    fontSize: 20,
    textAlign: "left",
  },
  image: {
    height: "50%", // 图片宽度适应屏幕
    aspectRatio: 16 / 9, // 指定宽高比（16:9 示例）
    resizeMode: "cover",
  },
  // image: {
  //   width: "100%",
  //   height: "100%",
  //   flex: 1,
  //   resizeMode: "cover",
  //   justifyContent: "center",
  // },
});
