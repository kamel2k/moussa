import { SelectionModel } from '@angular/cdk/collections';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { DeclarationDto } from '../../declaration.dto';
import { DeclarationService } from '../../services/declaration.service';

@Component({
  selector: 'app-recherche-declaration',
  templateUrl: './recherche-declaration.component.html',
  styleUrls: ['./recherche-declaration.component.scss']
})
export class RechercheDeclarationComponent implements OnInit {

  constructor(
    private declarationService: DeclarationService
  ) { }

  ngOnInit() {
  }
  
  form: any = {}

  listeDeclaration: any = [];
  
 
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = ['numeroRepertoire', 'anneeRegime', 'bureauEnregistrement', 'regimeDouanier'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  
  selectedRow: any = null;
  updateSelected($event, row) {
    if(this.selectedRow === null) {
      this.selectedRow = row;
    }else{
      this.selectedRow = null;
    }
  }


  getDeclarations() {
    
    if(this.form && this.form.numeroRepertoire){
      this.declarationService.getByNumero(this.form.numeroRepertoire).subscribe(
        (data) => {
          
          this.listeDeclaration = data
          
          this.dataSource.data = this.listeDeclaration
        },
        (error) => {
          console.log(error.error.error.message);
        }
      );
    }else{
      this.declarationService.getAllDeclarations().subscribe(
        (data) => {
          
          this.listeDeclaration = data
          
          this.dataSource.data = this.listeDeclaration
        },
        (error) => {
          console.log(error.error.error.message);
        }
      );
    }
    
  }


}
