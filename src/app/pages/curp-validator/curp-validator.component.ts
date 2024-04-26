import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-curp-validator',
  templateUrl: './curp-validator.component.html',
  styleUrls: ['./curp-validator.component.css']
})
export class CurpValidatorComponent implements OnInit {
  curp: string = '';
  isValidCurp: boolean = false;
  validateCurp() {
    // Aquí implementa la lógica de validación del CURP
    // Por ejemplo, puedes usar expresiones regulares
    const curpPattern = /[A-Z]{4}[0-9]{6}[HM][A-Z]{5}[0-9]{2}/;
    this.isValidCurp = curpPattern.test(this.curp);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
