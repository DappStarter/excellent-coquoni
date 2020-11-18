require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn property hunt merry forward sword'; 
let testAccounts = [
"0x1b845b966ebb9f3fca0b472ccb189fd8cb025bf0b58389c95b97912d666bd241",
"0x6a73fb54c275c04fec00b694060fc55f454db651f13e43516a21f8a8bd2225d7",
"0x4a864574836351735f5bf183306cea989e714e2def8d6ec7f60fcd767e6abc6e",
"0xd6c0e589e10ff540c2cc4388f5dd94eba609c69308d8298c6510642df392c42e",
"0x2aa783b24d12d3261e2a7f41de3752f2495f71789460b250b892f216d9b0215c",
"0x3f5dfe373a18a61d3ba0fcf28ef471fe3d98b8b0966cf7c297c539b03dbdda4d",
"0xef362e12950d5ee7db058962d600ea8e9fa030592f90ddcf24dc9eb362f662d3",
"0xb9341327e03a0168ddcc8e176d88ad79a77324ce17200f239f50775a89322353",
"0x03234cf6a02a4fc0ff74d50ff14095f3e809cb4e046eaedc102781cec1e185e5",
"0x3d4b3e7ff745e1d28dac49336fd8695fd64dbaf9734b14aee1a695685e63c6fd"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
