import React from "react";
import { FlatList } from "react-native-gesture-handler";

import { BTCBlock } from "../../types";
import ListItem from "./ListItem";

interface BlockListProps {
  data: BTCBlock[];
  onBlockSelected: (block: BTCBlock) => void;
}

function BlockList({ data, onBlockSelected }: BlockListProps) {
  const renderItem = ({ item }: { item: BTCBlock }) => {
    return <ListItem block={item} onPress={() => onBlockSelected(item)} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.blockHash}
    />
  );
}

export default BlockList;
