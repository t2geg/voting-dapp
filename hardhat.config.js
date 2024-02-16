require("@nomicfoundation/hardhat-toolbox");


/** @type import('hardhat/config').HardhatUserConfig */


module.exports = {
  solidity: "0.8.9",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    polygon_mumbai: {
      url: `https://polygon-mumbai.g.alchemy.com/v2/49-nVazla2ToI-VYm_lzRFmVA2krCPmY`,
      accounts: [
        `0x${"8432bc1773da058640ec9325b05f6485ea655ea2774837ce98a8f6e68f0bed88"}`,
      ],
    },
  },

};
