require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/Hu0T4vZj4F9B7RO6XEOaZ-o1A-YV6Pxc',
      accounts: ['b9ec7fb27bebc31fa151a20ab6ce6052ed985413a378dd530ff9e327d2b12aa2'],
    },
  },
};