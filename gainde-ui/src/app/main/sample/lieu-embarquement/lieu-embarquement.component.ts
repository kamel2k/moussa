import { AfterViewInit, Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-lieu-embarquement',
  templateUrl: './lieu-embarquement.component.html',
  styleUrls: ['./lieu-embarquement.component.scss']
})
export class LieuEmbarquementComponent implements OnInit, AfterViewInit {
  
  declarationForm: FormGroup


  ngAfterViewInit() {
  }

  constructor(
    private _formBuilder: FormBuilder,
  ) 
  {
   this._formBuilder.group({
    name: []
   });
  }

  ngOnInit() {
  }

}
