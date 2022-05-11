import { NgModule, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { CVService } from './services/cv.service';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkinsComponent } from './skins/skins.component';




@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    AboutComponent,
    ContactComponent,
    ExperienceComponent,
    SkinsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
        
  ],
  providers: [CVService],
  bootstrap: [AppComponent]
})

export class AppModule { 
  
}

