require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stool response shift promote good clock army gauge'; 
let testAccounts = [
"0x1b15fda54f838ed6d201649190a0200767d1708fae5a343f0d2ce4f254ae27dc",
"0x43c9b5fe55496ec793c27bba660e49d865195c50a48a4cba757c364680e1194d",
"0x5d6c697c94dfdbeab1938bacbf1baf275595dc86cb1503e230d126c3071eee4c",
"0x23c8da3a1b0f15fc6987832122b3564ec3521ebd9c6101993f7527b58d0410a4",
"0x81fa26411a3d3cd0da0a96d6070ea7283ba23680778eab05d3e74c5b08826e30",
"0xda3e89f151d226fcd70d690b5f1fa64f56fe121ed35dad2eb5103903db3f6591",
"0x880fa29f0c831a6d91651997d1d38cdd350d06572799e7600082a3fe1fefc03c",
"0x7e85af022be73cdf95e85e547183d3c5c9106daab92b3a938195c46ff498f4bb",
"0xb2c6cb5c5f2e85a25a364161c399cafd5d71d7f9324e999c1cfcf56b4b20afe0",
"0xa10271327ab404c057060b0a14adb51bfa7cbd5221f85f6169bdabd20a36bb52"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

