export const getEthereumClassicProvider = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return 'https://etc-geth.0xinfra.com';
    default:
      return 'http://localhost:8545/';
  }
}

export const getEthereumClassicRegistrarAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0xcb177520ACa646881D53909b456A9B2B730391f0';
    case '3':
      return '0x0';
    default:
      return '0x0';
  }
}

export const getEthereumClassicRegistryAddress = (networkId = '1') => {
  switch (networkId) {
    case '1':
      return '0xb96836a066ef81ea038280c733f833f69c23efde';
    case '3':
      return '0x0';
    default:
      return '0x0';
  }
}
