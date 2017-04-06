module.exports = function(Transaction) {
  Transaction.queryByAccount = function(accountNumber) {
    return Transaction.find({where: {accountNo: accountNumber}});
  };
};
