var web3 = require('web3');
var provider = 'http://localhost:8101';
var getters = {};

web3.setProvider(new web3.providers.HttpProvider(provider));

var coinbase = web3.eth.coinbase;
var balance = web3.eth.getBalance(coinbase);
var wei = balance.plus(21).toString(10);
var ether = web3.fromWei(wei, 'ether');

getters.getCoinbase = coinbase;
getters.getBalance = {
  wei:wei,
  ether:ether
};

    module.exports = getters;
