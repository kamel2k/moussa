import { SelectionModel } from '@angular/cdk/collections';
import { AfterViewInit, Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { DialogContent, ServerErrorContent } from '../../enregistrement-manifeste/enregistrement-manifeste.component';
import { ManifesteService } from '../../services/manifeste.service';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit, AfterViewInit {

  idManifeste: any;
  selection = new SelectionModel<any>(true, []);
  manifesteForm: FormGroup
  ELEMENT_DATA = [
    {
      position: 1,
      num_article: 'MLO281 /4 /0', 
      transport: 'CLC0110709', 
      nbre_colis: 72, 
      mode_conditionnement: 'PK',
      poids_brut: '52100',
      desig_commerciale: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' + 
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      position: 2,
      num_article: 'MLO284 /5 /0', 
      transport: 'CLC0158709', 
      nbre_colis: 142, 
      mode_conditionnement: 'PK',
      poids_brut: '150880',
      desig_commerciale: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' + 
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    },
    {
      position: 3,
      num_article: 'MLO240 /4 /0', 
      transport: 'CLC0811409', 
      nbre_colis: 50, 
      mode_conditionnement: 'BG',
      poids_brut: '36400',
      desig_commerciale: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit,' +
      'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' + 
      'minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  ];



  displayedColumns: string[] = ['position','num_article', 'transport','nbre_colis','mode_conditionnement','poids_brut', 'desig_commerciale'];
  dataSource = new MatTableDataSource<any>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator, null) paginator: MatPaginator;
  

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

  manifeste: any = {
  };


  constructor(
    private _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private manifesteService: ManifesteService,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private router: Router
  ) 
  {
    this.manifesteForm = this._formBuilder.group({
    name: []
   });

   this.idManifeste = this.route.snapshot.paramMap.get('id');
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit() {
    console.log(this.idManifeste)
    if(this.idManifeste != null) {
      this.manifesteService.getById(this.idManifeste).subscribe(
        (data) => {
          this.manifeste = data
          this.dataSource.data = this.manifeste.articles
        },
        (err) => {
          console.log(err)
          if(err.status == 0) {
            this.openServerErrorDialog();
          }
        }
      )
    }else{
      this.router.navigateByUrl('manifeste/enregistrement/enreg_manif');
      this.snackBar.open('Veuillez sélectionner un manifeste', null, {
        duration: 4000,        
      });
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
  
  patchManifeste: any;
  enregistrerManifeste() {
    this.manifeste.statut = 'enregistrement';
    this.manifesteService.enregistrer(this.manifeste).subscribe(
      (data) => {
        this.patchManifeste = data
        console.log('PATCH SUCCESS ' + this.patchManifeste.numero)
        this.openDialogWithNumero()
        
      },
      (err) => {
        console.log('PATCH ERROR')
        this.snackBar.open('Erreur lors de l\'enregistrement du manifest', null, {duration: 2000});
      }
    )
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContent, {
      height: '260px',
      width: '600px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
      if(result == true){
        this.enregistrerManifeste();
      }  
    });
  }

  openDialogWithNumero() {
    const dialogRef = this.dialog.open(DialogNumeroManifeste, {
      height: '180px',
      width: '600px',
      data: this.patchManifeste.numero
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.router.navigateByUrl('manifeste/enregistrement/enreg_manif');
    });
  }

  updateCheckedList(event,index)
  {
    if(event.checked)
        console.log(this.ELEMENT_DATA[index]);
  }

}

@Component({
  selector: 'dialog-numero-manifeste',
  templateUrl: './dialog-numero-manifeste.html',
})
export class DialogNumeroManifeste{

  numero: any;
  constructor(@Inject(MAT_DIALOG_DATA) public data: any){
    this.numero = data
  }
}