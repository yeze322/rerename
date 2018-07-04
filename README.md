### Regex Rename lib for Node.JS

####Usage
1. `filterFiles`: Get all files match given regex under a given path.

```javascript
const { filterFiles } = require('rerename');

const fileNames = filterFiles('./', (x) => x.startsWidth('test'));
```

2. `rerename`: Rename a list of file with given transformer function.

```javascript
const { rerename } = require('rerename');

const fileNames = ['xxx'];
rerename(fileNames, (x) => x.replace('test', ''));
```
