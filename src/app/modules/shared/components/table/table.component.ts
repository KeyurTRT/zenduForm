import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() data!: any;
  @Input() selectedRows: any[] = [];
  @Output() checked = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  onCheckbox(id: any,event : any) {
    this.checked.emit({id : id, isChecked : event?.target.checked});
  }
}
