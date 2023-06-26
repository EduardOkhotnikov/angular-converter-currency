import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConverterFormComponent } from './converter-form/converter-form.component';
import { ResultDisplayComponent } from './result-display/result-display.component';

const routes: Routes = [
  { path: '', redirectTo: '/converter', pathMatch: 'full' },
  { path: 'converter', component: ConverterFormComponent },
  { path: 'result', component: ResultDisplayComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }