const _lodash = require('lodash');
const items = [1,[2,[3,[4]]]];
const newItems = _lodash.flattenDeep(items);

console.log(newItems);
// OutPut : [ 1, 2, 3, 4 ]