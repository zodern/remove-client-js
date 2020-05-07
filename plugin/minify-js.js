Plugin.registerMinifier({
  extensions: ['js'],
  archMatching: 'web'
}, function () {
  var minifier = new Minifier();
  return minifier;
});

class Minifier {
  processFilesForBundle(files) {
    const toBeAdded = {
      data: "function empty () {}",
      stats: Object.create(null)
    };

    if (files.length) {
      files[0].addJavaScript(toBeAdded);
    }
  }
}
