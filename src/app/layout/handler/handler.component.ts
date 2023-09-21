import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { forkJoin, switchMap } from 'rxjs';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-handler',
  templateUrl: './handler.component.html',
  styleUrls: ['./handler.component.scss']
})
export class HandlerComponent implements OnInit {
  teachers: any
  classes: any
  form!: FormGroup;

  constructor(private service: HttpService, private fb: FormBuilder){
    this.service.getTeachers().subscribe((teachers)=>{this.teachers = teachers})
    this.service.getClass().subscribe((classes)=>this.classes = classes)
    this.form = this.fb.group({
      docente: '',
      classe: ''
    })
  }

  ngOnInit() {

  }




}
