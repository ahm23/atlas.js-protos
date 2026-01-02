const { join } = require('path');
const telescope = require('@cosmology/telescope').default;
const rimraf = require('rimraf').rimrafSync;
const { AMINO_MAP } = require('./aminos');

const protoDirs = [join(__dirname, '/../proto')];
const outPath = join(__dirname, '../src/types');
rimraf(outPath);

telescope({
  protoDirs,
  outPath,
  options: {
    tsDisable: {
      files: [],
      patterns: [],
      disableAll: true
    },
    prototypes: {
      enabled: true,
      removeUnusedImports: true,
      interfaces: {
        enabled: true,
        useUnionTypes: true
      },
      includes: {
        packages: ['nebulix.storage.v1', 'nebulix.filetree.v1', 'cosmos.bank.v1beta1']
      },
      methods: {
        fromJSON: false,
        toJSON: false,
        encode: true,
        decode: true,
        fromPartial: true,
        toAmino: false,
        fromAmino: false,
        fromProto: true,
        toProto: true
      },
    },
    bundle: {
      enabled: true
    },
    stargateClients: {
      enabled: true,
      includeCosmosDefaultTypes: true
    },
    aminoEncoding: {
      enabled: false
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      type: 'tendermint',
      enabled: true
    },
    reactQuery: {
      enabled: false
    },
    mobx: {
      enabled: false
    },
    pinia: {
      enabled: false
    }
  }
})
  .then(() => {
    console.log('✨ all done!');
  })
  .catch((e) => {
    console.error(e);
    process.exit(1);
  });
