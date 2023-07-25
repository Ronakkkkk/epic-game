require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: process.env.STAGING_QUICKNODE_KEY,
      accounts: [process.env.PRIVATE_KEY]
    },
  },
};