import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasicCalcService } from './basic-calc.service';

@Component({
  selector: 'acalc-basic-calc',
  templateUrl: './basic-calc.component.html',
  styleUrls: ['./basic-calc.component.css']
})
export class BasicCalcComponent implements OnInit {

  sumForm = new FormGroup({
    a: new FormControl(),
    b: new FormControl(),
    result: new FormControl()
  })

  subtractForm = new FormGroup({
    a: new FormControl(),
    b: new FormControl(),
    result: new FormControl()
  })

  divisionForm = new FormGroup({
    a: new FormControl(),
    b: new FormControl(),
    result: new FormControl()
  })

  multiplicationForm = new FormGroup({
    a: new FormControl(),
    b: new FormControl(),
    result: new FormControl()
  })

  constructor(private service: BasicCalcService) {
  }


  ngOnInit(): void {
  }

  add() {
    const {a, b} = this.sumForm.value;
    this.service.add({a, b}).subscribe(value => {
      this.sumForm.controls.result.setValue(value);
    })
  }

  subtract() {
    const {a, b} = this.subtractForm.value;
    this.service.subtract({a, b}).subscribe(value => {
      this.subtractForm.controls.result.setValue(value);
    })
  }

  divide() {
    const {a, b} = this.divisionForm.value;
    this.service.divide({a, b}).subscribe(value => {
      this.divisionForm.controls.result.setValue(value);
    })
  }

  multiply() {
    const {a, b} = this.multiplicationForm.value;
    this.service.multiply({a, b}).subscribe(value => {
      this.multiplicationForm.controls.result.setValue(value);
    })
  }

}
