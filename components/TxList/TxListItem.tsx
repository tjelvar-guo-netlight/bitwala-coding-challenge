import React from "react";
import { StyleSheet } from "react-native";

import { BTCTx } from "../../types";
import { View, Text } from "../Themed";

export interface TxListItemProps {
  tx: BTCTx;
}

function TxListItem({ tx }: TxListItemProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tx Date</Text>
      <Text style={styles.text}>{tx.date.date}</Text>

      <Text style={styles.title}>Tx Index</Text>
      <Text style={styles.text}>{tx.index}</Text>
    </View>
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
export default TxListItem;
