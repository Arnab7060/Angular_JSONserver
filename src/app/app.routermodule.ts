
import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DataintelComponent } from './dataintel/dataintel.component';



const appRoutes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'dataintel/:id' , component: DataintelComponent},
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
      RouterModule
  ]
})
export class AppRouterModule { }
export const routecomponents = [HomeComponent, DataintelComponent];
