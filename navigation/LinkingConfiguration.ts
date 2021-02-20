import * as Linking from 'expo-linking';

export default {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Blocks: {
            screens: {
              BlocksScreen: 'blocks',
            },
          },
          Transactions: {
            screens: {
              TransactionsScreen: 'transactions',
            },
          },
        },
      },
      NotFound: '*',
    },
  },
};
