import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './components/customer-detail/customer-detail.component';
import { ShownTableComponent } from './components/shown-table/shown-table.component';

const routes: Routes = [
  {path:'',component:CustomerDetailComponent},
  {path:'customerdetail',component:CustomerDetailComponent},
  {path:'showtable',component:ShownTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
