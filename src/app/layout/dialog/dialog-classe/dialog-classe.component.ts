import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-dialog-classe',
  templateUrl: './dialog-classe.component.html',
  styleUrls: ['./dialog-classe.component.scss']
})
export class DialogClasseComponent implements OnInit{
  classroom = new MatTableDataSource();
  displayedColumns: string[] = ['id','sezione', 'anno', 'piano', 'numero_aula', 'settore','rimuovi'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(
    public dialogRef: MatDialogRef<DialogClasseComponent>,
    private service: HttpService,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {}

  ngOnInit(): void{
    this.service.getClass().subscribe(data=>{
      this.classroom = new MatTableDataSource(data);
      this.classroom.paginator = this.paginator;
      this.classroom.sort = this.sort;
    })
  }


  onNoClick(): void {
    this.dialogRef.close();
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.classroom.filter = filterValue.trim().toLowerCase();

    if (this.classroom.paginator) {
      this.classroom.paginator.firstPage();
    }
  }

  alertRemove(){
    confirm('Sicuro di voler rimuovere l\'elemento?')? console.log('rimuovi docente') : console.log('annulla');
  }

}
