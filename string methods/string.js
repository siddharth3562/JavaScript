a='             how u doin?           '
b='HOW U DOIN3435'
console.log(a[4]);
console.log(a);
console.log(a.toUpperCase());
console.log(a.toLowerCase());
console.log(a.trim(),'stf');
console.log(a.trimStart(),'stf');
console.log(a.trimEnd(),'stf');
console.log(b.charAt(0));
console.log(b.charCodeAt(10));
console.log(b.length);
console.log(b.slice(2,7));

console.log(b.match('DOIN'));
console.log(b.match('[A-Z][0-9]'));
console.log(b.match('[A-Z0-9]'));

console.log(b.search('DO'));
console.log(b.search('D4'));
console.log(b.match('35.*'));
console.log(b.match('35.+'));
console.log(b.match('[0-9].+'));
console.log(b.match('[A-Z].?'));







