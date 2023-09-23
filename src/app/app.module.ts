import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TeacherComponent } from './layout/teacher/teacher.component';
import { HandlerComponent } from './layout/handler/handler.component';
import { MaterialModule } from './material/material/material.module';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule , FormsModule} from '@angular/forms'



import localeIt from '@angular/common/locales/it';
import { DialogTeacherComponent } from './layout/dialog/dialog-teacher/dialog-teacher.component';
import { DialogClasseComponent } from './layout/dialog/dialog-classe/dialog-classe.component';
registerLocaleData(localeIt);
@NgModule({
  declarations: [
    AppComponent,
    TeacherComponent,
    HandlerComponent,
    DialogTeacherComponent,
    DialogClasseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'fr-FR'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
