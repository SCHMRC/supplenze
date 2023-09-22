import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';

const MODULES = [
  MatTableModule,
  MatInputModule,
  MatFormFieldModule,
  MatSelectModule,
  MatButtonModule
]

@NgModule({
  declarations: [],
  imports: [...MODULES],
  exports: [...MODULES]
})
export class MaterialModule { }
