import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';



@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit {

  constructor(public cv: CVService) { }

  ngOnInit(): void {
  }

}
