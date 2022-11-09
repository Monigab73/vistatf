import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

export class PersonaService {
  private url: string ="http://localhost:8080/persona";
  constructor(private http: HttpClient) { }


  getPersona(): Observable<persona[]> {
    return this.http.get<persona[]>(this.url + 'persona/traer');
    }


  
}