import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input() class!: string;
  @Input() options!: any;
  @Output() changeSelect = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit(): void {
  }

  getSelected(event: any) {
    this.changeSelect.emit(event.target.value);
  }
}
