import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';
import { ValidarCamposService } from '../validar-campos.service';

@Component({
  selector: 'dio-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.css']
})
export class InputSelectComponent {

  @Input() formGroup: FormGroup;
  @Input() controlName: string;
  @Input() titulo: string;
  @Input() opcoes: Array<string>;

  constructor(public validacao: ValidarCamposService) { }

    get formControl(): AbstractControl{
      return this.formGroup.controls[this.controlName];
    }


}
