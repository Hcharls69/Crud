import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { Persona } from 'src/app/Models/persona';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  id:number= 0;
  nombre:string='';

  edad: number=0;
  lastName: string='';


  persona: Persona = new Persona(this.id, this.nombre, this.edad, this.lastName);

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
  }

  Guardar(): void{
    console.log(this.persona);
    this.service.createPersona(this.persona).subscribe({
      next: (data)=>{
      console.log(data);
      console.log(this.persona);
      alert("Se ha añadido una nueva persona");
      this.router.navigate(['listar']);

  }})

  }

}
