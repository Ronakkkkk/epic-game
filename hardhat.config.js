require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: '0.8.18',
  networks: {
    goerli: {
      url: 'https://frequent-aged-wind.ethereum-goerli.discover.quiknode.pro/2af50dc8a0641eec41b26c481bc67a53735d2aea/',
      accounts: ['3c4577ae5a08e4862fbb8113e44f29b14d1890f5ecfc89cfd92a044705a70513'],
    },
  },
};