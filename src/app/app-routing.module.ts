import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeacherComponent } from './layout/teacher/teacher.component';
import { HandlerComponent } from './layout/handler/handler.component';

const routes: Routes = [
  {path: 'teacher', component: TeacherComponent},
  {path: 'handler', component: HandlerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
