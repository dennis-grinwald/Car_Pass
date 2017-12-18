var CarPassManager = artifacts.require("./CarPassManager.sol")

module.exports = function(deployer) {
  deployer.deploy(CarPassManager);
};
