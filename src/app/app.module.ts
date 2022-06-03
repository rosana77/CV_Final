import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CVService } from './services/cv.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkinsComponent } from './skins/skins.component';
import { InicioComponent } from './inicio/inicio.component';
import { PorfolioComponent } from './porfolio/porfolio.component';
import { FormsModule } from '@angular/forms';
import { MensajesComponent } from './mensajes/mensajes.component';




@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    SkinsComponent,
    InicioComponent,
    PorfolioComponent,
    MensajesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule    
  ],
  providers: [CVService],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}

