import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Persona } from '../Models/persona';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url ='http://localhost:8080/api';

  constructor(private http:HttpClient) { }

  public getPersona(): Observable<Persona[]> {
    return this.http.get<Persona[]>(this.Url + '/all');
  }

  public createPersona(persona:Persona){
    return this.http.post<Persona>(this.Url+ '/login', persona);

  }

  public getPersonaId(id:number){
    return this.http.get<Persona>(this.Url + "/" + id);
  }

  public updatePersona(persona: Persona){
    return this.http.put<Persona>(this.Url + "/" + persona.id,persona)
  }

  public deletePersona(persona: Persona){
    return this.http.delete<Persona>(this.Url + "/" + persona.id)
  }

}
