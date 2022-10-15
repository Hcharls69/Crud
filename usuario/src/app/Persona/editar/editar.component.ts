import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/Models/persona';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';


@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {
  id:number= 0;
  nombre:string='';
  edad: number=0;
  lastName: string='';
  persona: Persona = new Persona(this.id, this.nombre, this.edad, this.lastName);

  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit(): void {
    this.Editar();
  }

  Editar(){
    let id = JSON.parse(localStorage.getItem("id") || "");
    this.service.getPersonaId(id)
    .subscribe(data=>{
      this.persona=data;
      console.log(data);
    })
  }

  Actualizar(persona: Persona){
    this.service.updatePersona(persona)
    .subscribe(data=>{
      this.persona=data;
      alert("Se actualizó con exito")
      this.router.navigate(['listar']);
      })
  }



}
