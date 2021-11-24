import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BasicCalcService } from './basic-calc.service';

@Component({
  selector: 'acalc-basic-calc',
  templateUrl: './basic-calc.component.html',
  styleUrls: ['./basic-calc.component.css']
})
export class BasicCalcComponent implements OnInit {

  form = new FormGroup({
    addend1: new FormControl(),
    addend2: new FormControl(),
    result: new FormControl()
  })

  constructor(private service: BasicCalcService) {

  }


  ngOnInit(): void {
  }

  add() {
    const {addend1, addend2} = this.form.value;
    this.service.add({addend1, addend2}).subscribe(value => {
      this.form.controls.result.setValue(value);
    })
  }

}
