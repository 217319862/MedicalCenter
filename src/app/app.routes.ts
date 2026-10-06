import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Customers } from '../components/customers/customers';  // עדכן את הייבוא בהתאם למיקום הקומפוננטה שלך

export const routes: Routes = [
  { path: 'contact', component: Customers },
  { path: 'customers', component: Customers },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
