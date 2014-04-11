# broccoli-inspect

Tools for understanding and debugging your Broccoli build.

```
npm install --save-dev broccoli-inspect
```

## Motiviation

Broccoli is a great build tool, but some of the design choices that make it such a great tool also make it a bit of a black box. In particular, two aspects:

* `tmp/` directories - while crucial to Broccoli's philosophy, randomly named tmp directories make understanding the intermediate stages of your build very difficult
* build pipelines - there are two stages of a Broccoli build: design and build time. The design stage is when your Brocfile.js is actually executed, but this is not whent the build occurs. Trees represent pipelines, not the final products. Thus, attempts to inspect stages of your build by inspect state in your Brocfile.js is fruitless.

The motivation for these tools are to provide ways to understand the intermediate and final output of your Broccoli build.

## Tools

*NOTE* right now there is only one tool in this kit (`tmpDir`). Suggestions for more are welcome (and pull requests even more so!)

### tmpDir(tree[, label])

Log out the temporary directory that contains the output of the tree you pass in, with an optional label. Returns the same tree you pass in.

#### Usage

```javascript
    var inspect = require('broccoli-inspect');
    // ...
    var mergedTree = mergeTrees([ foo, bar ]);
    mergedTree = inspect.tmpDir(mergedTree, 'merge foo and bar');
    // prints: merge foo and bar tree outputs to tmp/tree_merger-tmp_dest_dir-C89cFrtz.tmp
```