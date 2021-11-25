import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { StreamCalcService } from './stream-calc.service';

@Component({
  selector: 'acalc-stream-calc',
  templateUrl: './stream-calc.component.html',
  styleUrls: ['./stream-calc.component.css']
})
export class StreamCalcComponent implements OnInit {

  name = new FormControl();

  result: number = 0;

  constructor(private service: StreamCalcService) { }

  ngOnInit(): void {
  }

  add() {
    this.service.add(this.name.value).subscribe((value: number) => this.result = value);
  }

}
