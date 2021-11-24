import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicCalcComponent } from './basic-calc/basic-calc.component';

const routes: Routes = [
  {path: '', component: BasicCalcComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
