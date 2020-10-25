import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopComponent } from './components/desktop/desktop.component';
import { LoaderComponent } from './containers/common/loader/loader.component';


const routes: Routes = [
  {
    path: 'desktop',
    component: DesktopComponent 
  },
  {
    path: 'loader',
    component: LoaderComponent
  },
  { path: '', redirectTo: '/desktop', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
