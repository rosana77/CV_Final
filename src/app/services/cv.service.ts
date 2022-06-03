import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Formulario } from '../modelo/formulario';


@Injectable({
  providedIn: 'root'
})
export class CVService {
  personal: any[] = [];
  datos: any[] = [];
  profesional: any[] = [];
  educacion: any[] = [];
  experiencia: any[] = [];
  servicio: any[] = [];
  testimonio: any[] = [];
  formulario: any ;


  constructor(private http:HttpClient) {
    this.CargarProfesional(); 
    this.CargarDatos();
    this.CargarExperiencia();
    this.CargarServicios();
    this.CargarTestimonio();
    this.CargarEducacion();
    this.VerMensajes();  
    this.CargarFormulario();  
  }
  
    
    private CargarDatos(){
    this.http.get('http://localhost:8080/api/datos')            
    .subscribe((respu: any) => {
      this.datos = respu;
      console.log(respu);
    });
  }

  private CargarEducacion(){
    this.http.get('http://localhost:8080/api/educacion').subscribe((respu: any) => {
      this.educacion = respu;
      console.log(respu);
    });
  }
    
  private CargarProfesional(){
    this.http.get('http://localhost:8080/api/skins')
    .subscribe((respu: any) => {
      this.profesional = respu;
      console.log(respu);
    });
  }
  
  private CargarExperiencia(){
    this.http.get('http://localhost:8080/api/experiencia')
    .subscribe((respu: any) => {
      this.experiencia = respu;
      console.log(respu);
    });
  }
  private CargarServicios(){
    this.http.get('http://localhost:8080/api/servicios')    
    .subscribe((respu: any) => {
      this.servicio = respu;
      console.log(respu);
    });
  }
  private CargarTestimonio(){
    this.http.get('http://localhost:8080/api/testimonio')
    .subscribe((respu: any) => {
      this.testimonio = respu;
      console.log(respu);
    });
  }
  private VerMensajes() {
    this.http.get('http://localhost:8080/api/mensajes')
   .subscribe((respu: any) => {
     this.formulario = respu;
     console.log(respu);
   });  
  }

  private urlcrear :string ='http://localhost:8080/api/formulario';
  private httpHeaders = new HttpHeaders({'Content-type':'application/json'})

  /*create(formu:Formulario): Observable<Formulario>{
    console.log('formulario', formu)
    return this.http.post<Formulario>(this.urlcrear,formu,{headers:this.httpHeaders});
}*/
  private CargarFormulario() {
    this.http.post(this.urlcrear,this.formulario)//,{headers:this.httpHeaders}//)
   .subscribe((respu: any) => {
     this.formulario = respu;
     console.log(respu);
   });  
  }
  }

  

