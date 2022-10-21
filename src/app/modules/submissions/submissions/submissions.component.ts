import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../../shared/services/global.service';
import JSON_DATA from '../../../../assets/data.json';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent implements OnInit {
  public isViewList = 'list';
  public submissionList = JSON_DATA.submissionsList;
  public exportCSVData: any = null;
  public fromData = JSON_DATA.fromData;
  public headers = JSON_DATA.headers;
  public statusData: string[] = ['Select Status'];
  public selectedRow: string[] = [];

  // Start Goole map //
  center: google.maps.LatLngLiteral = {
    lat: 24,
    lng: 12,
  };
  zoom = 4;
  markerOptions: google.maps.MarkerOptions = {
    draggable: false,
  };
  markerPositions: google.maps.LatLngLiteral[] = [
    { lat: 25.912297487164587, lng: 28.127929687499996 },
    { lat: 26.30690495424138, lng: 20.041992187499996 },
    { lat: 27.17030840339055, lng: 6.506835937499997 },
    { lat: 18.59803808918268, lng: 8.352539062499996 },
    { lat: 14.895629584989265, lng: 19.514648437499996 },
    { lat: 15.40464321870164, lng: 28.831054687499996 },
  ];
  // End Goole map //

  constructor(private sharedService: GlobalService) {}

  ngOnInit(): void {
    this.submissionList.forEach((item: any) => {
      this.statusData.push(item.status);
      item['selected'] = false;
    });
    this.statusData = [...new Set(this.statusData)];
  }

  selectView(view: string) {
    if (view === 'map') {
      this.isViewList = 'map';
    } else {
      this.isViewList = 'list';
    }
  }

  onChangeCheckBox(data: any) {
    let id = data.id;
    if (id === 'All') {
      if (!data.isChecked) {
        this.selectedRow = [];
      } else {
        this.selectedRow = this.submissionList.map((item: any) => item.id);
      }
    } else {
      if (this.selectedRow.includes(id)) {
        this.selectedRow.splice(this.selectedRow.indexOf(id), 1);
      } else {
        this.selectedRow.push(id);
      }
    }

    let csvData: any = [];
    for (let i = 0; i < this.submissionList.length; i++) {
      if (this.selectedRow.includes(this.submissionList[i].id)) {
        delete this.submissionList[i].selected;
        csvData.push(this.submissionList[i]);
      }
    }
    this.exportCSVData = csvData;
  }

  exportCSV() {
    if (this.exportCSVData !== null && this.exportCSVData.length > 0) {
      this.sharedService.exportCSV(this.exportCSVData);
    } else {
      this.sharedService.exportCSV(this.submissionList);
    }
  }
}
