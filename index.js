exports.tmpDir = function(tree, name) {
  var read = tree.read;
  tree.read = function(readTree) {
    var promise = read.call(tree, readTree);
    promise.then(function(destDir){
      console.log(name, 'tree outputs to', destDir);
      return destDir
    });
    return promise;
  }
  return tree;
}