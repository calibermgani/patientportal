import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomTemplateComponent } from './custom-template/custom-template.component';

const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
