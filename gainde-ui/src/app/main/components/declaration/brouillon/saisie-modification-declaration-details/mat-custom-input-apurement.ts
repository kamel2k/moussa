import { FocusMonitor } from '@angular/cdk/a11y';
import { Component, ElementRef, Inject, Input, OnDestroy, Optional, Self, ViewChild } from '@angular/core';
import { AbstractControl, ControlValueAccessor, FormBuilder, FormGroup, NgControl, Validators } from '@angular/forms';
import { MatFormField, MatFormFieldControl, MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { Subject } from 'rxjs';
import { ApurementNumero } from './saisie-modification-declaration-details.component';
import {coerceBooleanProperty} from '@angular/cdk/coercion';

@Component({
    selector: 'mat-custom-input-apurement',
    templateUrl: 'form-field-custom.html',
    styleUrls: ['form-field-custom.scss'],
    providers: [{ provide: MatFormFieldControl, useExisting: MatCustomInputApurement }],
    host: {
      '[class.example-floating]': 'shouldLabelFloat',
      '[id]': 'id',
    }
  })
  export class MatCustomInputApurement
    implements ControlValueAccessor, MatFormFieldControl<ApurementNumero>, OnDestroy {
    static nextId = 0;
    @ViewChild('annee', null) annee: HTMLInputElement;
    @ViewChild('bureau', null) bureau: HTMLInputElement;
    @ViewChild('numero', null) numero: HTMLInputElement;
  
    parts: FormGroup;
    stateChanges = new Subject<void>();
    focused = false;
    controlType = 'example-tel-input';
    id = `example-tel-input-${MatCustomInputApurement.nextId++}`;
    onChange = (_: any) => {};
    onTouched = () => {};
  
    get empty() {
      const {
        value: { area, exchange, subscriber }
      } = this.parts;
  
      return !area && !exchange && !subscriber;
    }
  
    get shouldLabelFloat() {
      return this.focused || !this.empty;
    }
  
    @Input('aria-describedby') userAriaDescribedBy: string;
  
    @Input()
    get placeholder(): string {
      return this._placeholder;
    }
    set placeholder(value: string) {
      this._placeholder = value;
      this.stateChanges.next();
    }
    private _placeholder: string;
  
    @Input()
    get required(): boolean {
      return this._required;
    }
    set required(value: boolean) {
      this._required = coerceBooleanProperty(value);
      this.stateChanges.next();
    }
    private _required = false;
  
    @Input()
    get disabled(): boolean {
      return this._disabled;
    }
    set disabled(value: boolean) {
      this._disabled = coerceBooleanProperty(value);
      this._disabled ? this.parts.disable() : this.parts.enable();
      this.stateChanges.next();
    }
    private _disabled = false;
  
    @Input()
    get value(): ApurementNumero | null {
      if (this.parts.valid) {
        const {
          value: { annee, bureau, numero }
        } = this.parts;
        return new ApurementNumero(annee, bureau, numero);
      }
      return null;
    }
    set value(tel: ApurementNumero | null) {
      const { annee, bureau, numero } = tel || new ApurementNumero('', '', null);
      this.parts.setValue({ annee, bureau, numero });
      this.stateChanges.next();
    }
  
    get errorState(): boolean {
      return this.parts.invalid && this.parts.dirty;
    }
  
    constructor(
      formBuilder: FormBuilder,
      private _focusMonitor: FocusMonitor,
      private _elementRef: ElementRef<HTMLElement>,
      @Optional() @Inject(MAT_FORM_FIELD_DEFAULT_OPTIONS) public _formField: MatFormField,
      @Optional() @Self() public ngControl: NgControl) {
  
      this.parts = formBuilder.group({
        annee: [
          null,
          [Validators.required, Validators.minLength(4), Validators.maxLength(4)]
        ],
        bureau: [
          null,
          [Validators.required, Validators.minLength(3), Validators.maxLength(4)]
        ],
        numero: [
          null,
          [Validators.required, Validators.minLength(3), Validators.maxLength(8)]
        ]
      });
  
      _focusMonitor.monitor(_elementRef, true).subscribe(origin => {
        if (this.focused && !origin) {
          this.onTouched();
        }
        this.focused = !!origin;
        this.stateChanges.next();
      });
  
      if (this.ngControl != null) {
        this.ngControl.valueAccessor = this;
      }
    }
  
    autoFocusNext(control: AbstractControl, nextElement?: HTMLInputElement): void {
      if (!control.errors && nextElement) {
        this._focusMonitor.focusVia(nextElement, 'program');
      }
    }
  
    autoFocusPrev(control: AbstractControl, prevElement: HTMLInputElement): void {
      if (control.value.length < 1) {
        this._focusMonitor.focusVia(prevElement, 'program');
      }
    }
  
    ngOnDestroy() {
      this.stateChanges.complete();
      this._focusMonitor.stopMonitoring(this._elementRef);
    }
  
    setDescribedByIds(ids: string[]) {
      const controlElement = this._elementRef.nativeElement
        .querySelector('.example-tel-input-container')!;
      controlElement.setAttribute('aria-describedby', ids.join(' '));
    }
  
    onContainerClick() {
      
    }
  
    writeValue(tel: ApurementNumero | null): void {
      this.value = tel;
    }
  
    registerOnChange(fn: any): void {
      this.onChange = fn;
    }
  
    registerOnTouched(fn: any): void {
      this.onTouched = fn;
    }
  
    setDisabledState(isDisabled: boolean): void {
      this.disabled = isDisabled;
    }
  
    _handleInput(control: AbstractControl, nextElement?: HTMLInputElement): void {
      this.autoFocusNext(control, nextElement);
      this.onChange(this.value);
    }
  
    static ngAcceptInputType_disabled: boolean | string | null | undefined;
    static ngAcceptInputType_required: boolean | string | null | undefined;
  }