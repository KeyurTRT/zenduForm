import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit {
  @Input() submissionList: any[] = [];
  @Input() selectedRows: any[] = [];
  @Output() checkboxChangeEmit = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
  }

  onCheckbox(id: any,event : any) {
    this.checkboxChangeEmit.emit({id : id, isChecked : event?.target.checked});
  }
}
