import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CVService {
  datos: any;
  profesional: any[] = [];
  educacion: any[] = [];
  experiencia: any[] = [];
  servicio: any[] = [];
  testimonio: any[] = [];


  constructor(private http:HttpClient) {
    this.CargarProfesional(); 
    this.CargarDatos();
    this.CargarExperiencia();
    this.CargarServicios();
    this.CargarTestimonio();
    
  }
  
  private CargarDatos(){
    this.http.get('./assets/json/datos.json')
    .subscribe((respu: any) => {
      this.datos = respu;
      console.log(respu);
    });
  }
  
  private CargarProfesional(){
    this.http.get('https://cv-tutorial-8168f-default-rtdb.firebaseio.com/Profesional.json')
    .subscribe((respu: any) => {
      this.profesional = respu;
      console.log(respu);
    });
  }
  
  private CargarExperiencia(){
    this.http.get('https://cv-tutorial-8168f-default-rtdb.firebaseio.com/Experiencia.json')
    .subscribe((respu: any) => {
      this.experiencia = respu;
      console.log(respu);
    });
  }
  private CargarServicios(){
    this.http.get('https://cv-tutorial-8168f-default-rtdb.firebaseio.com/Servicios.json')    
    .subscribe((respu: any) => {
      this.servicio = respu;
      console.log(respu);
    });
  }
  private CargarTestimonio(){
    this.http.get('https://cv-tutorial-8168f-default-rtdb.firebaseio.com/Testimonio.json')
    .subscribe((respu: any) => {
      this.testimonio = respu;
      console.log(respu);
    });
  }
}
