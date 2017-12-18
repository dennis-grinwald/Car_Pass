# Car_Pass_Manager_DApp
An Ethereum, Smart Contract based DApp for storing Vehicle Information

Setup Requirements:
---

* Copy of either TestRPC or a live Blockchain
* Truffle Framework

Setup steps:
---

* Clone repository
* Truffle migrate contract
* Get Contract Address and paste into file  ./index.html, line 106 ".at("paste address here")"
* Open index.html in Web Browser => Dapp is ready for interaction
* Smart Contract can be found in ./contracts/CarPassManager


Too look out for:
---

* If Smart Contract is changed, update ABI in ./app/index.html, line 104
* Function call ".transferCarPass(...)" can only be accessed by the owner of the Car Pass - Owner is defined in file index.html, line 100

Test Inputs for Car-Passes:
---
* The following test addresses where created by using following testrpc parameter: testrpc --mnemonic "testrpc"

### Format: Uint32 id, bytes32 fin, bytes32 label, bytes32 model, address owner

* 1, WP0ZZZ9915S712345, Porsche, 911 Turbo, 0x4178babe9e5148c6d5fd431cd72884b07ad855a0
* 2, WUAKBAFX2H7903530, Audi, R8, 0xa3d1f77acff0060f7213d7bf3c7fec78df847de1
* 3, WBS3R9C57HK709323, BMW, M4, 0xdc353aa3d81fc3d67eb49f443df258029b01d8ab
* 4, WDDYJ7HA9HA010589, Mercedes-Benz, AMG GT, 0x7986b71c27b6eaab3120a984f26511b2dcfe3fb4
* 5, WP0ZZZ9185S712345, Porsche, 918 Spyder, 0xa6743286b55f36afa5f4e7e35b6a80039c452dbd
