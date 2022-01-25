require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/SAaSb_sm59DXcWokPQtflmrt8fp4WPC-',
      accounts: ['372103969fce823760a26875ae3991ad01fbb1f1767720f0de88d6ceeee2d26f']
    }
  }
}