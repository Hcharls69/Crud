export class Persona{
    id:number;
    nombre:string;
    edad: number;
    lastName: string;

    constructor (id:number, nombre:string, edad:number, lastName:string) {
        this.id = id;
        this.nombre = nombre;
        this.edad = edad;
        this.lastName = lastName;
    }
}
