import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { BehaviorSubject, merge } from 'rxjs';

import { HttpService } from 'src/app/service/http.service';


export interface Substitution{
  idTeacher: string,
  name: string,
  surname: string,
  idClass: string,
  sezione: string,
  anno: string,
  piano: string,
  numero_aula: string,
  settore: string,
  ora: string,
  data: string
}


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  timestampMillis = Date.now();


  displayedColumns: string[] = ['name', 'surname','ora' ,'classe','piano','aula_numero','indirizzo'];
  dataSource = new MatTableDataSource();

  constructor(private service: HttpService){
    setInterval(()=>{
      this.timestampMillis = Date.now();
    },1000)
    this.service.getJoin().subscribe(data=>{
      this.dataSource = new MatTableDataSource(data);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
