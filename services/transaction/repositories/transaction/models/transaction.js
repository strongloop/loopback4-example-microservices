module.exports = function(Transaction) {
  Transaction.validatesInclusionOf('transactionType', {in: ['debit', 'credit']});

  Transaction.queryByAccount = function(accountNumber) {
    return Transaction.find({
      where: {
        accountNo: accountNumber
      }
    });
  };
};
