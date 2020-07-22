import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from '../app-material/app-material.module'

import { ContactMngrRoutingModule } from './contact-mngr-routing.module';
import { ContactMngrComponent } from './contact-mngr/contact-mngr.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { UserService } from './services/user.service'
import { HttpClientModule } from '@angular/common/http';
import { NotesComponent } from './notes/notes.component';
import { NewConatacgManagerComponent } from './new-conatacg-manager/new-conatacg-manager.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactMngrComponent, SideNavComponent, 
    ToolBarComponent, MainContentComponent, NotesComponent,NewConatacgManagerComponent ],

  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ContactMngrRoutingModule,
    AppMaterialModule
  ],
  
  providers:[ UserService]
})
export class ContactMngrModule { }
