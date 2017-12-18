//import "../stylesheets/app.css";

// Import libraries we need.

if (typeof web3 !== 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
}

web3.eth.defaultAccount = web3.eth.accounts[0];

var CarPassManagerContract =

web3.eth.contract([{"constant":false,"inputs":[{"name":"k","type":"uint256"}],"name":"deleteCarPass","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"k","type":"uint256"},{"name":"fin","type":"bytes32"},{"name":"label","type":"bytes32"},{"name":"model","type":"bytes32"},{"name":"v","type":"address"}],"name":"addCarPass","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"k","type":"uint256"}],"name":"getCarPassInfo","outputs":[{"name":"","type":"uint256"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"bytes32"},{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"k","type":"uint256"},{"name":"newOwner","type":"address"}],"name":"transferCarPass","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"getCount","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"k","type":"uint256"}],"name":"getOwnerAddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"}]);

var CarPassManager = CarPassManagerContract.at("0xf1371c0f40528406dc4f4caf89924ea9da49e866");
console.log(CarPassManager);


$("#button1").click(function() {
  CarPassManager.addCarPass.sendTransaction($("#inputIdCreate").val(), $("#inputFINCreate").val(), $("#inputLabelCreate").val(), $("#inputModelCreate").val(), $("#inputOwnerCreate").val().toString(), {gas: 4700000});
});

$("#button2").click(function() {
  CarPassManager.transferCarPass.sendTransaction($("#inputIdTransfer").val(), $("#inputNewOwnerTransfer").val(), {gas: 4700000});
});

$("#button3").click(function() {
  CarPassManager.deleteCarPass.sendTransaction($("#inputIdDelete").val(), {gas: 4700000});
});

$("#button4").click(function() {
  var tuple = CarPassManager.getCarPassInfo.call($("#inputIdCPInfo").val())
  $("#outputFIN").html('FIN/VIN: ' + web3.toAscii(tuple[1]));
  $("#outputBrand").html('Brand: ' + web3.toAscii(tuple[2]));
  $("#outputModel").html('Model: ' + web3.toAscii(tuple[3]));
  $("#outputAddress").html('Owner Address: ' + tuple[4]);
});

$("#button5").click(function() {
  $("#outputCount").html(CarPassManager.getCount.call() + " Car-Passes in total.");
});
