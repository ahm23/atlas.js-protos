export default {
  protoDirs: ['./proto'],
  outPath: './src/generated',
  options: {
    aminoEncoding: true,
    rpcClients: true,
    lcdClients: true,
    interfaces: true,
  },
};