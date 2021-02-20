import React from "react";
import { FlatList } from "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import { BTCTx } from "../../types";
import TxListItem from "./TxListItem";

interface TxListProps {
  data: BTCTx[];
}

function TxList({ data }: TxListProps) {
  const renderItem = ({ item }: { item: BTCTx }) => {
    return <TxListItem tx={item} />;
  };

  return (
    <FlatList
      style={styles.container}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.index}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
});
export default TxList;
