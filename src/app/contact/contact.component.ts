import { Component, OnInit } from '@angular/core';
import { CVService } from '../services/cv.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public cv: CVService) { }

  ngOnInit(): void {
  }

}
