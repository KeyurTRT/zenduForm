import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() placeholder!: string;
  @Input() type!: string;
  @Input() class!: string;
  @Output() searchVal = new EventEmitter<String>();

  constructor() {}

  ngOnInit(): void {}

  getSearch(event: any) {
    this.searchVal.emit(event.target.value);
  }
}
