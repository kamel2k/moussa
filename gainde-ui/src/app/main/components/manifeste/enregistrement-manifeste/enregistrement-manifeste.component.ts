import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SelectionModel } from '@angular/cdk/collections';
import { ManifesteService } from '../services/manifeste.service';

@Component({
  selector: 'app-enregistrement-manifeste',
  templateUrl: './enregistrement-manifeste.component.html',
  styleUrls: ['./enregistrement-manifeste.component.scss']
})
export class EnregistrementManifesteComponent implements OnInit, AfterViewInit {

  form: any = {}
  type_manifeste: any;
  type_manifestes = [
    "Manifeste maritime",
    "Manifeste terrestre",
    "Manifeste aerien",
    "Manifeste de groupage"
  ];

  bureau: any;
  bureaux = [
    "direction générale",
    "Bureau fictic",
    "Coordination Générale",
    "Bureau /0",
    "Bureau 001"
  ];

  ELEMENT_DATA = [
    {

    }
  ];
  selection = new SelectionModel<any>(true, []);
  displayedColumns: string[] = ['numeroRepertoire','bureauEntree', 'moyenTransport','typeManifeste','dateArrivee','dateEnregistrement', 'origine', 'consignature'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator, null) paginator: MatPaginator;

  constructor
  (
    public dialog: MatDialog,
    private router: Router,
    private manifesteService: ManifesteService
  ) 
  { }

  ngOnInit() {
    this.getBrouillonManifestes();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  
  listeManifestes: any = [];
  getBrouillonManifestes() {
    
    if(this.form.debut && this.form.fin){
      this.manifesteService.getBrouillonManifestesByDate(this.form.debut, this.form.fin).subscribe(
        (data) => {
          
          this.listeManifestes = data
          
          this.dataSource.data = this.listeManifestes
        },
        (error) => {  
          if(error.status == 0) {
            this.openServerErrorDialog();
          }
        }
      );
    }else{
      this.manifesteService.getBrouillonManifestes().subscribe(
        (data) => {
          
          this.listeManifestes = data
          
          this.dataSource.data = this.listeManifestes
        },
        (error) => {
          if(error.status == 0) {
            this.openServerErrorDialog();
          }
        }
      );
    }
    
  }

  openServerErrorDialog() {
    const serverDialogRef = this.dialog.open(ServerErrorContent, {
      height: '160px',
      width: '400px',
    })
    serverDialogRef.afterClosed().subscribe(result => {
      console.log(`Server Dialog result: ${result}`);
    });
  }


  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      height: '260px',
      width: '600px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  modifierManifeste(id) {
    this.router.navigate(['/manifeste/brouillon/modifier', {id: id}]);
  }
  

  

  selectedRow: any = null;
  updateSelected($event, row) {
    if(this.selectedRow === null) {
      console.log(row.id + ' SELECTED')
      this.selectedRow = row;
    }else{
      console.log(row.id + ' NOT SELECTED')
      this.selectedRow = null;
    }
  }

  selectedEvent($event, row) {
    console.log(row.id);
    if(this.selection.isSelected(row)){
      this.selection.clear(); 
    }else{
      this.selection.clear(); 
      this.selection.toggle(row);
    }
    this.updateSelected($event, row)
  }


}

@Component({
  selector: 'dialog-content',
  templateUrl: './dialog-content.html',
})
export class DialogContent {}

@Component({
  selector: 'server-error',
  templateUrl: './server-error.html',
})
export class ServerErrorContent {}
