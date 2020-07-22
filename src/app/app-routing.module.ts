import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'contact-manager', loadChildren: () => import('./contact-mngr/contact-mngr.module').then(mod => mod.ContactMngrModule) 
},
  {path:'**', redirectTo: 'contact-manager'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
