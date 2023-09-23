import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { BehaviorSubject, forkJoin, switchMap } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';
import { DialogTeacherComponent } from '../dialog/dialog-teacher/dialog-teacher.component';
import { DialogClasseComponent } from '../dialog/dialog-classe/dialog-classe.component';

@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.scss']
})
export class HandlerComponent implements OnInit {
  subject : BehaviorSubject<any> = new BehaviorSubject(null)
  teachers: any
  classes: any
  form!: FormGroup;

  constructor(public service: HttpService, private fb: FormBuilder, public dialog: MatDialog){
    this.service.getTeachers().subscribe((teachers)=>{
      this.teachers = teachers
    })

    this.service.getClass().subscribe((classes)=>this.classes = classes)
    this.form = this.fb.group({
      docente: ['', Validators.required],
      classe: ['', Validators.required],
      ora: ['', Validators.required]
    })
  }

  ngOnInit() {

  }


  addSupplenza(){
    let date = Date.now()
    let param = this.form.value
    param.date = date
    console.log(param)
  }

  openDialog(param: string): void {

    let component: any = null
    switch(param){
      case 'teacher' : {component = DialogTeacherComponent; break}
      case 'class' : {component = DialogClasseComponent; break}
    }
    const dialogRef = this.dialog.open(component, {
      width : '800px',
      height : '680px',
      data : ''
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result)
    });
  }
}
