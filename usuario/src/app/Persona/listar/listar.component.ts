import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/Service/service.service';
import { Router } from '@angular/router';
import { Persona } from 'src/app/Models/persona';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.scss']
})

export class ListarComponent implements OnInit {

  personas: Persona[] = [];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
    this.cargar();
  }

  cargar(): void {
    this.service.getPersona().subscribe({
      next: (data)=>{
        this.personas=data;
        console.log(data);
      },
      error: (err) =>{
        console.log(err);
      }

    });
  }
  Editar(persona: Persona){
    localStorage.setItem("id", persona.id.toString());
    this.router.navigate(['editar']);
  }

  Eliminar(persona: Persona){
    this.service.deletePersona(persona).subscribe(
      data=>{
        this.personas=this.personas.filter(p=>p!==persona);
      }
    )

    }


}
