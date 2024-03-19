"use strict";
console.log("holo mundo desde typescript");
let edad = 28;
let nombre = "MATIAs";
nombre = "josue";
nombre = "10";
//vision de los errores en tiempo de escritura no en tiempo de ejecucion porque se tiene que compilar
let isDarkTheme = true;
let algunaCosa; //variable tipo any
algunaCosa = null;
algunaCosa = 1;
let color = undefined;
// si no se especifica el valor de retorno de una funcion queda implicito
function saludar(nombre) {
    const saludo = `hola ${nombre} `;
    return saludo;
}
saludar("goku");
let frutas = ["manzana", "banana", "guayaba"];
let calificaciones = [12, 34, 7];
let numeroYLetras1 = ["josue", 45, null, "adios"];
let numeroYLetras = ["josue", 45, "adios"];
// let usuarios=[{nombre:"naruto"}, {nombre:"sasuke"}]
// {nombre:string}[]
var Roles;
(function (Roles) {
    Roles["Administrador"] = "admin";
    Roles["Usuario"] = "user";
})(Roles || (Roles = {}));
class Usuario {
    constructor(nombre, edad, role = Roles.Usuario) {
        this.nombre = nombre;
        this.edad = edad || 18;
        this.role = role;
    }
    iniciarSesion() {
        console.log("sesion Iniciada");
    }
    cerrarSesion() {
        console.log("sesion Cerrada");
    }
}
const spiderman = new Usuario('Peter Parker', 15, Roles.Administrador);
const superman = new Usuario("Clark Ken", 20, Roles.Usuario);
let usuarios = [
    spiderman,
    superman
];
// spiderman.cerrarSesion()
// let usuarios: Usuario[] = [
// 	{ nombre: "naruto", edad: 13 },
// 	{ nombre: "sasuke", edad: 13 },
// 	{ nombre: "Saoho", edad: 20 },
// ];
function validateIsAdmin(role) {
    //  return role === "Admin";//no usar directo los estrings
    return role === Roles.Administrador;
}
// enum se puede usar como tipo de dato
//¡¡Revisar mas eso de enum vs obj
let nombreEdad = ["sakura", 13];
//TUPLE
//duplas para el orden de los datos no poder poner el numero antes que el string etcpor oden
let nombreEdad2 = ["sakura", 13];
