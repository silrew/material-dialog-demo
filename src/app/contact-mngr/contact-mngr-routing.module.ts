import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactMngrComponent } from './contact-mngr/contact-mngr.component';
import { MainContentComponent } from './main-content/main-content.component';


const routes: Routes = [
  {path: '', component: ContactMngrComponent,
    children: [
      {path: ':id', component: MainContentComponent},
        {path: '', component: MainContentComponent}
    ]
},
{path: '**', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContactMngrRoutingModule { }
