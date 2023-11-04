# Blockchain Based Organ Transplantation System

Blockchain Based Organ Transplantation System represents a prototype established as a proof-of-concept for an decentralized resolution. This application is constructed on the Ethereum platform, specifically utilizing Remix for the compilation and deployment of the smart contract. MetaMask operates as a wallet to facilitate the management of synthetic Ether supplied by Ganache. A JavaScript-based front-end interface application is developed to interact with the back-end through Web3.js.

## Getting Started

The following instructions will create a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- MetaMask Chrome extension needs to be installed. (https://metamask.io)
- Ganache application needs to be installed. (https://www.trufflesuite.com/ganache)

### Installing

Clone the organ-donation-blockchain repository onto local machine.
```
git clone https://github.com/leokfwong/organ-donation-blockchain.git
```

## Setting up the Environment
- Ensure that Ganache is running and linked to MetaMask.
- Go to https://remix.ethereum.org and import the OrganDonation.sol file.

### Compile and Deploy Smart Contract
- Compile Solidity file.
- Select Injected Web3 under Environment.
- Ensure account address matches the one in Ganache.
- Deploy and confirm.
- Ensure that the smart contract address matches the one in the web3.js file (line 379).
- Otherwise, update the address.

```
const contractAddress = 'insert smart contract address';
```
- Update the contract ABI in web3 file

### Testing the Application
The website should now show that is it online.
