import * as React from "react";
import { useState } from "react";
import { StyleSheet } from "react-native";
import { gql, useQuery } from "@apollo/client";

import { Text, View } from "../components/Themed";
import { BTCBlock, BTCBlockData } from "../types";
import BlockList from "../components/BlockList/BlockList";
import BlockModal from "../components/BlockModal";
import { format, parseISO } from "date-fns";

export function BlocksScreen() {
  const [blockHash, setBlockHash] = useState<string | undefined>();
  const GET_BTC_BLOCKS = gql`
    query {
      bitcoin {
        blocks(options: { limit: 20, desc: "height" }) {
          height
          blockHash
          timestamp {
            time(format: "%Y-%m-%dT%H:%M:%S")
          }
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<BTCBlockData>(GET_BTC_BLOCKS);

  if (loading) return null;
  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{error}</Text>
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    );
  }
  const btcBlocks = data?.bitcoin.blocks.map((block) => {
    return {
      height: block.height,
      timestamp: { time: format(parseISO(block.timestamp.time), "PPpp") },
      blockHash: block.blockHash,
    };
  }) as BTCBlock[];

  return (
    <View style={styles.container}>
      {blockHash && (
        <BlockModal
          blockHash={blockHash}
          onModalClose={() => setBlockHash(undefined)}
        ></BlockModal>
      )}
      <BlockList
        data={btcBlocks}
        onBlockSelected={(block) => setBlockHash(block.blockHash)}
      />
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
