import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Modal, Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";
import { BTCBlockDetailsData, BTCBlockDetailsVars } from "../types";

export interface BlockModalProps {
  blockHash: string;
  onModalClose: () => void;
}

function BlockModal({ blockHash, onModalClose }: BlockModalProps) {
  const GET_BTC_BLOCK = gql`
    query GetBlock($hash: String!) {
      bitcoin {
        blocks(blockHash: { is: $hash }) {
          timestamp {
            time
          }
          height
          blockHash
          transactionCount
          blockSize
          difficulty
        }
      }
    }
  `;

  const { loading, error, data } = useQuery<
    BTCBlockDetailsData,
    BTCBlockDetailsVars
  >(GET_BTC_BLOCK, {
    variables: { hash: blockHash },
  });

  if (loading) return null;

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={blockHash !== undefined}
      onRequestClose={onModalClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {error?.message ? (
            <>
              <Text style={[styles.modalTitleFieldText, styles.modalText]}>
                Something went wrong!
              </Text>
              <Text style={styles.modalText}>Try again later!</Text>
            </>
          ) : (
            <>
              <Text style={[styles.modalTitleFieldText, styles.modalText]}>
                Block Hash
              </Text>
              <Text style={styles.modalText}>
                {data?.bitcoin.blocks[0].blockHash}
              </Text>
              <Text style={[styles.modalTitleFieldText, styles.modalText]}>
                Timestamp
              </Text>
              <Text style={styles.modalText}>
                {data?.bitcoin.blocks[0].timestamp.time}
              </Text>
              <Text style={[styles.modalTitleFieldText, styles.modalText]}>
                Height
              </Text>
              <Text style={styles.modalText}>
                {data?.bitcoin.blocks[0].height}
              </Text>
              <Text style={[styles.modalTitleFieldText, styles.modalText]}>
                Transaction Count
              </Text>
              <Text style={styles.modalText}>
                {data?.bitcoin.blocks[0].transactionCount}
              </Text>
              <Text style={[styles.modalTitleFieldText, styles.modalText]}>
                Dfficulty
              </Text>
              <Text style={styles.modalText}>
                {data?.bitcoin.blocks[0].difficulty}
              </Text>
              <Text style={[styles.modalTitleFieldText, styles.modalText]}>
                Block Size
              </Text>
              <Text style={styles.modalText}>
                {data?.bitcoin.blocks[0].blockSize}
              </Text>
            </>
          )}

          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={onModalClose}
          >
            <Text style={styles.textStyle}>Close</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(52, 52, 52, 0.0)",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#789adc",
  },
  textStyle: {
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    color: "black",
    marginBottom: 15,
    textAlign: "center",
  },
  modalTitleFieldText: {
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default BlockModal;
