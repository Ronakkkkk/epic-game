require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: 'YOUR_QUICKNODE_API_URL',
      accounts: ['YOUR_PRIVATE_GOERLI_ACCOUNT_KEY'],
    },
  },
};