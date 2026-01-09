 const ADDRESSES = require("../helper/coreAssets.json");
 
const { sumTokensExport } = require("../helper/unwrapLPs")
const { staking } = require("../helper/staking");

const tokens = [
   ADDRESSES.ethereum.USD0,  // USD0
  "0x35D8949372D46B7a3D5A56006AE77B215fc69bC0" // bUSD0 
];

const owners = [ 
  "0xa428723eE8ffD87088C36121d72100B43F11fb6A" // USL Lending Market 
];

module.exports = {
  methodology: "TVL represents the value held by the protocol",
  ethereum: {
    staking: staking(
      "0xFE7C47895eDb12a990b311Df33B90Cfea1D44c24",
      ADDRESSES.ethereum.USD0
    ), // USUAL
    tvl: sumTokensExport({
      tokens,
      owners, 
      resolveUniV3: false,
    }),
  },
  doublecounted: true,
}; 
