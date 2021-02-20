import * as React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";

import { Text, View } from "../components/Themed";
import { BTCTxdata } from "../types";
import TxList from "../components/TxList/TxList";

export function TransactionsScreen() {
  const GET_BTC_TRANSACTIONS = gql`
    query {
      bitcoin {
        transactions(options: { limit: 20, desc: "date.date" }) {
          date {
            date
          }
          index
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<BTCTxdata>(GET_BTC_TRANSACTIONS);

  if (loading)
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#789adc" />
      </View>
    );
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Something went wrong!</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TxList data={data?.bitcoin.transactions || []} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
