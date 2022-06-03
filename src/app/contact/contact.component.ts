import { Component, OnInit } from '@angular/core';
import { Formulario } from '../modelo/formulario';
import { CVService } from '../services/cv.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  public formu:Formulario = new Formulario;
  
  constructor(public cv: CVService) { }

  ngOnInit(): void {
      }
     /*public CargarFormulario():void{
        this.cv.create(this.formu)
        .subscribe((respu:any) => {
            this.formu = respu; }                 
      )};*/
   
      public CargarFormulario():void{
        console.log(this.formu.nombre)
    }
  }
   
   
     