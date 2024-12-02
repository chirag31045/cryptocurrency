require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/QkNcCUstHjpdcGDnVfyyLLf4OCylDRKu",
      accounts: [
        "b255d0ca344e89569daad9739d7faab53e290da9dfb3ee2e79b19b943c5e36cd",
      ],
    },
  },
};
