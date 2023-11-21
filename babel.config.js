module.exports = {
  presets: [
    [
      '@babel/preset-react',
      {
        pragma: 'dom',
        pragmaFrag: 'DomFrag',
        throwIfNamespace: false,
        runtime: 'classic',
      },
    ],
  ],
}
