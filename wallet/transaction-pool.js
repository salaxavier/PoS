const Transaction = require("./transaction");


class TransactionPool {
  constructor() {
    this.transactions = [];
  }

  addTransaction(transaction) {
    this.transactions.push(transaction);
  }

  validTransactions() {
    return this.transactions.filter(transaction => {
      if (!Transaction.verifyTransaction(transaction)) {
        console.log(`Invalid signature from ${transaction.data.from}`);
        return;
      }

      return transaction;
    });
  }
}


module.exports = TransactionPool;
