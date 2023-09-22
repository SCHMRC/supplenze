import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, forkJoin, switchMap } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';

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

  constructor(public service: HttpService, private fb: FormBuilder){
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
    this.form.valueChanges.subscribe(console.log)
  }
}
