import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DisplayInspectionComponent } from './display-inspection/display-inspection.component';

const routes: Routes = [
  {
    path: '',
    component: DisplayInspectionComponent
  },
  {
    path: '', redirectTo: '/', pathMatch: 'full'
  },

]

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
