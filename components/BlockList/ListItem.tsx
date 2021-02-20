import React from "react";
import { Pressable, StyleSheet } from "react-native";

import { BTCBlock } from "../../types";
import { View, Text } from "../Themed";

export interface BlockListItemProps {
  block: BTCBlock;
  onPress: () => void;
}

function ListItem({ block, onPress }: BlockListItemProps) {
  return (
    <Pressable onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.title}>Block Height</Text>
        <Text style={styles.text}>{block.height}</Text>

        <Text style={styles.title}>Timestamp</Text>
        <Text style={styles.text}>{block.timestamp.time}</Text>

        <Text style={styles.title}>Block Hash</Text>
        <Text style={styles.text}>{block.blockHash}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,

    elevation: 2,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    color: "#000",
  },
  text: {
    color: "#000",
  },
});
export default ListItem;
