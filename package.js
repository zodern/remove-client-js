Package.describe({
  name: 'zodern:remove-client-js',
  summary: 'Minifier that removes client js',
  version: '1.0.0',
  documentation: './readme.md',
  git: 'https://github.com/zodern/remove-client-js.git'
});

Package.registerBuildPlugin({
  name: 'minifyRemoveClient',
  use: [
    'ecmascript@0.7.0',
  ],
  sources: [
    'plugin/minify-js.js',
  ],
});

Package.onUse(function (api) {
  api.use('isobuild:minifier-plugin@1.0.0');
});
