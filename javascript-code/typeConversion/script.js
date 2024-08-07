let val;

val = String(111);
 
val = String(false);

val = String(new Date());

val = ([1, 2, 3, 4, 5]);

//toString()
val = (5).toString();

val = Number('1')

val = Number(true) // 1

val = Number(false) // 0

val = Number(null) // 0

val = Number([1,2,3,4]) // NaN

val = parseInt('111.323');
val = parseFloat('111.323');

console.log(val);

