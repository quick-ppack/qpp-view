import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QPPViewComponent } from './qppview/qppview.component';

const routes: Routes = [
  {path: '**', component: QPPViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
