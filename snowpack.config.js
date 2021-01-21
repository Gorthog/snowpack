/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  optimize: {
    bundle: true,
    minify: true,
    target: 'es2020',
    treeshake: true,
  },
  packageOptions: { source: 'remote' },
  plugins: [
    '@snowpack/plugin-sass',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  mount: {
    public: { url: '/', static: true },
    src: { url: '/dist' },
  },
  packageOptions: { source: 'remote', types: true },
};
