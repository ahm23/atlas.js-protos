const { join } = require('path');
const telescope = require('@hyperweb/telescope').default;
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
      enableRegistryLoader: true,
      enableMessageComposer: true,
      removeUnusedImports: true,
      includes: {
        packages: [
          'google.protobuf.any',
          'nebulix.storage.v1',
          'nebulix.filetree.v1',
          'cosmos.bank.v1beta1'
        ]
      },
      excluded: [],
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
      addTypeUrlToDecoders: true
    },
    interfaces: {
      enabled: true,
      useGlobalDecoderRegistry: true,
      registerAllDecodersToGlobal: true,
      useUnionTypes: true
    },
    bundle: {
      enabled: true
    },
    aminoEncoding: {
      enabled: false
    },
    lcdClients: {
      enabled: false
    },
    rpcClients: {
      enabled: true,
      type: 'tendermint',
      camelCase: true,
      bundle: true,
      useConnectComet: true // ← Add this! Uses connectComet() for auto-detection (Comet38Client / CometClient union)
      // clientStyle: { useUpdatedClientStyle: true }  // optional, if available in your Telescope version
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
