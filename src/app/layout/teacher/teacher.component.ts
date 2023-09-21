import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { merge } from 'rxjs';

import { HttpService } from 'src/app/service/http.service';


@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.scss']
})
export class TeacherComponent {
  displayedColumns: string[] = ['ora', 'name', 'surname', 'classe','piano','indirizzo'];
  dataSource: any;

  constructor(private service: HttpService){
    const merged = merge(this.service.getTeachers(),this.service.getClass());
    merged.subscribe(x => console.log(x));
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
