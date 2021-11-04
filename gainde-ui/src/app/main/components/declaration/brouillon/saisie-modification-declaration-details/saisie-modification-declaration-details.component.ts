import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DeclarationDto } from '../../declaration.dto';
import { DeclarationService } from '../../services/declaration.service';

@Component({
  selector: 'app-saisie-modification-declaration-details',
  templateUrl: './saisie-modification-declaration-details.component.html',
  styleUrls: ['./saisie-modification-declaration-details.component.scss']
})
export class SaisieModificationDeclarationDetailsComponent implements OnInit {

  control_result = false;

  form: any = {
    ppm: {
      code: ''
    }
  }
  
  declarationForm: FormGroup

  constructor(
    public _formBuilder: FormBuilder,
    public dialog: MatDialog,
    private declarationService: DeclarationService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {
    this.declarationForm = this._formBuilder.group({
      numeroRepertoire: ['', Validators.required],
	    referenceDeclarant: ['', Validators.required],
	    bureauFrontiere: ['', Validators.required],
	    regimeDouanier: ['', Validators.required],
	    modeDeclaration: ['', Validators.required],
	    bureauEnregistrement: ['', Validators.required],
	    anneeRegime: [''],
	    numeroRegime: [''],
	    paysProvenance: [''],
      manifesteDto: new FormControl(new ApurementNumero('', '', null))
    });
   }

  ngOnInit() {
  }


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

  type_apurement = [
    "Manifeste"
  ]

  controler() {
    
    this.declarationService.controlManifeste(
      this.declarationForm.controls.manifesteDto.value.annee,
      this.declarationForm.controls.manifesteDto.value.bureau,
      this.declarationForm.controls.manifesteDto.value.numero).subscribe(
        (data) => {
          this.controlerSuccess();
          this.control_result = true && this.declarationForm.valid;
        },
        (err) => {
          this.controlerError();
          this.control_result = false;
        }
      )
  }

  
  controlerError() {
    
      const dialogRef = this.dialog.open(ControlErrorContent, {
        height: '260px',
        width: '600px',
      });
    
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
  
  }

  controlerSuccess() {
    
    const dialogRef = this.dialog.open(ControlSuccessContent, {
      height: '260px',
      width: '600px',
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });

}

  newDecalartion: DeclarationDto;

  addDeclaration() {
    this.newDecalartion = new DeclarationDto();
    this.newDecalartion.anneeRegime = this.declarationForm.controls.anneeRegime.value
    this.newDecalartion.bureauEnregistrement = this.declarationForm.controls.bureauEnregistrement.value
    this.newDecalartion.bureauFrontiere = this.declarationForm.controls.bureauFrontiere.value
    this.newDecalartion.manifesteDto = this.declarationForm.controls.manifesteDto.value
    this.newDecalartion.modeDeclaration = this.declarationForm.controls.modeDeclaration.value
    this.newDecalartion.numeroRegime = this.declarationForm.controls.numeroRegime.value
    this.newDecalartion.numeroRepertoire = this.declarationForm.controls.numeroRepertoire.value
    this.newDecalartion.paysProvenance = this.declarationForm.controls.paysProvenance.value
    this.newDecalartion.referenceDeclarant = this.declarationForm.controls.referenceDeclarant.value
    this.newDecalartion.regimeDouanier = this.declarationForm.controls.regimeDouanier.value
    
    this.declarationService.add(this.newDecalartion).subscribe(
      (data) => {
        this.snackBar.open('Déclaration enregistrée avec succès', null, {duration: 2000});
        this.router.navigateByUrl('declaration/brouillon/saisie');
      },
      (err) => {
        this.snackBar.open('Erreur de création de déclaration', null, {duration: 2000});
      }
    )
  }

  ppm_data = {
    code: 'DDDDD',
    nom: 'AGT ECONOMIQUE DSI',
    num_contribuable: '',
    type_voie: 'RUE',
    nom_voie: 'ALLEES DELMAS',
    quartier: 'PLATEAU',
    bp: 4033,
    num_voie: '',
    ville: 'DAKKAR',
    num_ninea: 'DDDDDDDDDDDDD'
  }


  timeout: any = null;

  private onKeySearch(event: any) {
    clearTimeout(this.timeout);
    var $this = this;
    this.timeout = setTimeout(function () {
      if (event.keyCode != 13) {
        $this.loadPPM();
      }
    }, 300);
  }

  loadPPM(){
    if(this.form.ppm.code == this.ppm_data.code) {
      this.form.ppm = {
        code: this.ppm_data.code,
        nom: this.ppm_data.nom,
        num_contribuable: this.ppm_data.num_contribuable,
        type_voie: this.ppm_data.type_voie,
        nom_voie: this.ppm_data.nom_voie,
        quartier: this.ppm_data.quartier,
        bp: this.ppm_data.bp,
        num_voie: this.ppm_data.num_voie,
        ville: this.ppm_data.ville,
        num_ninea: this.ppm_data.num_ninea
      }
    }else{
      this.form.ppm = {
        code: this.form.ppm.code,
        nom: '',
        num_contribuable: '',
        type_voie: '',
        nom_voie: '',
        quartier: '',
        bp: '',
        num_voie: '',
        ville: '',
        num_ninea: ''
      }
    }
  }

}

@Component({
  selector: 'control-success',
  templateUrl: './control-success-content.html',
})
export class ControlSuccessContent {}

@Component({
  selector: 'control-error',
  templateUrl: './control-error-content.html',
})
export class ControlErrorContent {}

@Component({
  selector: 'form-field-custom',
  templateUrl: 'form-field-custom.html',
})
export class FormFieldCustomControlExample {
}

export class ApurementNumero {
  constructor(
    public annee: string,
    public bureau: string,
    public numero: number
  ) {}
}