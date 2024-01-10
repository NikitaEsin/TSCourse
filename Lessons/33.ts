type Transaction = {
  apply: (amount: number) => number;
};

type Wallet = {
  transactions: Transaction[];
  balance: number;
};

const applyTransactions = (wallet: Wallet) => {
  const { transactions, balance } = wallet;
  try {
    return transactions.reduce((acc, value) => value.apply(acc), balance)
  } catch (e) {
    return wallet.balance;
  }
};