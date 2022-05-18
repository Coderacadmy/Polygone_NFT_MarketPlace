require("@nomiclabs/hardhat-waffle");
const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    /*
    mumbai: {
      // Infura
      // url: `https://polygon-mumbai.infura.io/v3/${infuraId}`
      url: "https://rpc-mumbai.matic.today",
      accounts: [process.env.privateKey]
    },
    */

    bsc: {
      // Infura
      // url: `https://polygon-mainnet.infura.io/v3/${infuraId}`,
      // url: `https://ropsten.infura.io/v3/7cde6b2133c74a5b851e7129b2ce690b`,
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      // url: "https://rpc-mainnet.maticvigil.com",
      accounts: ["PrivateKey"]
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};

