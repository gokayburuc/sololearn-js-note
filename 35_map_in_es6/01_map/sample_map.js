const map = new Map();

map.set('one', 1);
map.set('2', 'two');
if (map.has('two')) {
    console.log('two');
} else {
    console.log(map.get('one'));
}