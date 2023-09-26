// Arrays en javascrip
// Colecion ordenada de datos 
const miArray = new Array('1',2,3);
const otherArray = ('1',2, true, 1.4);
console.log(miArray);
console.log(otherArray);
console.log(miArray[0]);
console.log(otherArray[1]);
console.log(miArray[1])
console.log(otherArray[2]);

otherArray[1] = 'one';
otherArray[2] = 'Theew';
console.lo(otherArray);
// podemos ondetar elementos 
// push() para insertar al final 
// unshift() para insertar el inicio 
// popt() para estraer del final 
// shift() para estraer del inico
const pila= []; // ultimo en entrar el¿s el ultimo en salir 
pila.push(1);
pila.push(2);
pila.push(3);
pila.push(4);
console.log(pila);
pila.pop();
pila.pop();
console.log(pila);


 const cola = []; ///primero en esytrar es primero en salir 
 cola.push(1); 
 cola.push(2); 
 cola.push(3); 
 cola.push(4); 
console.log(cola);
cola.shift();
cola.shift();
 console.log(cola);