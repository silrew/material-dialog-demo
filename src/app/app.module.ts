import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module'
import { AppMaterialModule } from './app-material/app-material.module';
import { NewConatacgManagerComponent } from './contact-mngr/new-conatacg-manager/new-conatacg-manager.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    BrowserAnimationsModule,
    SharedModule ,
    AppMaterialModule

  ],
  providers: [],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
