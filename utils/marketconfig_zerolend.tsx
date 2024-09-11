import { ChainId } from "@aave/contract-helpers";

export const marketConfigZerolend = {
  ethereum_eth_lrt: {
    chainId: ChainId.mainnet,
    publicJsonRPCUrl: "https://eth-mainnet.alchemyapi.io/v2/demo",
    LENDING_POOL_ADDRESS_PROVIDER: '0xFD856E1a33225B86f70D686f9280435E3fF75FCF',
    UI_POOL_DATA_PROVIDER: '0xa6EA08D16d47feE408505fda73520EbefC68Ef01',
    POOL: '0x3BC3D34C32cc98bf098D832364Df8A222bBaB4c0',
    marketName: "proto_mainnet_lrt_v3",
  },
  ethereum_btc_lrt: {
    chainId: ChainId.mainnet,
    publicJsonRPCUrl: "https://eth-mainnet.alchemyapi.io/v2/demo",
    LENDING_POOL_ADDRESS_PROVIDER: '0x17878AFdD5772F4Ec93c265Ac7Ad8E2b29abB857',
    UI_POOL_DATA_PROVIDER: '0xa6EA08D16d47feE408505fda73520EbefC68Ef01',
    POOL: '0xCD2b31071119D7eA449a9D211AC8eBF7Ee97F987',
    marketName: "proto_mainnet_btc_v3",
  },
  zksync: {
    chainId: 324,
    publicJsonRPCUrl: "https://mainnet.era.zksync.io",
    LENDING_POOL_ADDRESS_PROVIDER: '0x4f285Ea117eF0067B59853D6d16a5dE8088bA259',
    UI_POOL_DATA_PROVIDER: '0x8FE0ac76b634B7D343Bd32282B98E9f271B43367',
    POOL: '0x4d9429246EA989C9CeE203B43F6d1C7D83e3B8F8',
    marketName: "proto_zksync_era_v3",
  },
  zircuit: {
    chainId: 48900,
    publicJsonRPCUrl: "https://zircuit1-mainnet.p2pify.com/",
    LENDING_POOL_ADDRESS_PROVIDER: '0xFF679e5B4178A2f74A56f0e2c0e1FA1C80579385',
    UI_POOL_DATA_PROVIDER: '0x189cfdb4d7a08D926CA209D84a713c4c629645aF',
    POOL: '0x2774C8B95CaB474D0d21943d83b9322Fb1cE9cF5',
    marketName: "proto_zksync_era_v3",
  },
  xlayer: {
    chainId: 196,
    publicJsonRPCUrl: "https://xlayerrpc.okx.com",
    LENDING_POOL_ADDRESS_PROVIDER: '0x2f7e54ff5d45f77bFfa11f2aee67bD7621Eb8a93',
    UI_POOL_DATA_PROVIDER: '0xFaDFb0BC400427663020887e7c8073D03A35dc3c',
    POOL: '0xffd79d05d5dc37e221ed7d3971e75ed5930c6580',
    marketName: "proto_layerx_v3",
  },
  manta: {
    chainId: 169,
    publicJsonRPCUrl: "https://pacific-rpc.manta.network/http",
    LENDING_POOL_ADDRESS_PROVIDER: '0xC44827C51d00381ed4C52646aeAB45b455d200eB',
    UI_POOL_DATA_PROVIDER: '0xa32Eb787F2A3DC1F2c2da0E5d8caE7Ff74E6fD32',
    POOL: '0x2f9bB73a8e98793e26Cb2F6C4ad037BDf1C6B269',
    marketName: "proto_manta_v3",
  },
  blast: {
    chainId: 81457,
    publicJsonRPCUrl: "https://rpc.ankr.com/blast",
    LENDING_POOL_ADDRESS_PROVIDER: '0xb0811a1FC9Fb9972ee683Ba04c32Cb828Bcf587B',
    UI_POOL_DATA_PROVIDER: '0xE230cF9Cee7b299F69778EF950A61de0dE520ba7',
    POOL: '0xa70B0F3C2470AbBE104BdB3F3aaa9C7C54BEA7A8',
    marketName: "proto_blast_v3",
  },
  linea: {
    chainId: 59144,
    publicJsonRPCUrl: "https://rpc.linea.build",
    LENDING_POOL_ADDRESS_PROVIDER: '0xC44827C51d00381ed4C52646aeAB45b455d200eB',
    UI_POOL_DATA_PROVIDER: '0x81b3184A3B5d4612F2c26A53Da8D99474B91B2D2',
    POOL: '0x2f9bB73a8e98793e26Cb2F6C4ad037BDf1C6B269',
    marketName: "proto_linea_v3",
  },

};
