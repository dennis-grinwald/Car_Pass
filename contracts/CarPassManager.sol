pragma solidity ^0.4.2;

contract CarPassManager {

  struct CarPass {
    uint id;
    bytes32 fin;
    bytes32 label;
    bytes32 model;
    address owner;
    uint keyPointer;
  }

  uint[] keyList;
  mapping (uint => CarPass) carPasses;

  function addCarPass(uint newId, bytes32 fin, bytes32 label, bytes32 model, address v) public returns (bool) {

    //check if Car-Pass already exists - if not add key to pointers list and the corresponding pointer to the struct
    if(containsId(newId)) {revert();}
    carPasses[newId].id = newId;
    carPasses[newId].fin = fin;
    carPasses[newId].label = label;
    carPasses[newId].model = model;
    carPasses[newId].owner = v;
    carPasses[newId].keyPointer = keyList.push(newId) - 1;
    return true;
  }

  //without ownerOnly modifier
  function transferCarPass(uint id, address newOwner) public returns (bool) {
     if(!containsId(id)) {revert();}
     //Revert if message sender is NOT owner of the Car-Pass
     if( msg.sender != carPasses[id].owner ) {revert();}
     carPasses[id].owner = newOwner;
     return true;
   }

  //should be ownerOnly delete Car-Pass - set pointer value of struct(carPass) = 0, and move to-delete key to last index and vice versa
  function deleteCarPass(uint id) public returns (bool) {
    if(!containsId(id)) {revert();}
    if( msg.sender != carPasses[id].owner ) {revert();}
    uint deleteIndex = carPasses[id].keyPointer;
    uint lastKey = keyList[keyList.length-1];
    keyList[deleteIndex] = lastKey;
    carPasses[lastKey].keyPointer = deleteIndex;
    keyList.length--;
    return true;
  }

   //check if Car-Pass exists: access struct corresponding to mapped struct - follow pointer of this map - pointer used as offset to compare stored ID to key-id
   function containsId(uint id) public constant returns (bool) {
     if(keyList.length == 0){return false;}
     return (keyList[carPasses[id].keyPointer] ==id);
   }

   //get owner-address of specific car ID - insert containsId method
   function getOwnerAddress(uint id) public constant returns (address) {
     if(!containsId(id)){revert();}
     return (carPasses[id].owner);
   }

   //get total amount of Car-Passes by retrieving number of existent pointers
   function getCount() public constant returns(uint) {
     return keyList.length;
   }

  //exposes all data of a car pass
  function getCarPassInfo(uint id) public constant returns (uint, bytes32, bytes32, bytes32, address) {
    if(!containsId(id)){revert();}
    return (carPasses[id].id,carPasses[id].fin,carPasses[id].label,carPasses[id].model,carPasses[id].owner);
  }
}
