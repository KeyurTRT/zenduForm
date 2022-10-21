import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';

@Injectable({
  providedIn: 'root',
})
export class GlobalService {
  constructor() {}

  exportCSV(submissionList: any) {
    const replacer = (key:any, value:any) => (value === null ? '' : value);
    const header = Object.keys(submissionList[0]);
    const csv = submissionList.map((row:any) =>
      header
        .map((fieldName) => JSON.stringify(row[fieldName], replacer))
        .join(',')
    );
    csv.unshift(header.join(','));
    const csvArray = csv.join('\r\n');
  
    const a = document.createElement('a');
    const blob = new Blob([csvArray], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
  
    a.href = url;
    a.download = 'submission.csv';
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  }
}
