export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Blocks: undefined;
  Transactions: undefined;
};

export type BlocksTabParamList = {
  BlocksScreen: undefined;
};

export type TransactionsTabParamList = {
  TransactionsScreen: undefined;
};

export interface BTCBlock {
  height: number;
  blockHash: string;
  timestamp: { time: string };
}

export interface BTCBlockData {
  bitcoin: { blocks: BTCBlock[] };
}

export interface BTCBlockDetails {
  timestamp: { time: string };
  height: number;
  blockHash: string;
  transactionCount: number;
  blockSize: number;
  difficulty: number;
}

export interface BTCBlockDetailsData {
  bitcoin: { blocks: BTCBlockDetails[] };
}

export interface BTCBlockDetailsVars {
  hash: string;
}

export interface BTCTx {
  date: { date: string };
  index: string;
}

export interface BTCTxdata {
  bitcoin: { transactions: BTCTx[] };
}
