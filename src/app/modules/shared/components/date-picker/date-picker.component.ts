import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-date-picker",
  templateUrl: "./date-picker.component.html",
  styleUrls: ["./date-picker.component.scss"],
})
export class DatePickerComponent implements OnInit, OnChanges {
  MONTH_NAMES = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  showDatepicker = false;
  datepickerValue!: string;
  month!: number; // !: mean promis it will not be null, and it will definitely be assigned
  year!: number;
  no_of_days = [] as number[];
  blankdays = [] as number[];

  // output event emitter
  @Output()
  dateSelected = new EventEmitter<any>();

  // input custom classes
  @Input()
  customClass = "";
  @Input() name = "";
  @Input()
  selectedDate: any = "";
  @Input() closeButtonClicked = false;

  ngOnInit(): void {
    this.initDate();
    this.getNoOfDays();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes["selectedDate"] && changes["selectedDate"].currentValue) {
      this.selectedDate = changes["selectedDate"].currentValue;
      this.initDate();
    }
    if (
      changes["closeButtonClicked"] &&
      changes["closeButtonClicked"].currentValue
    ) {
      this.showDatepicker = false;
      this.initDate();
    }
  }

  initDate() {
    let today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
    this.datepickerValue =
      this.selectedDate !== ""
        ? this.selectedDate
        : new Date(this.year, this.month, today.getDate()).toDateString();
  }

  isToday(date: any) {
    const today = new Date();
    const d = new Date(this.year, this.month, date);
    return today.toDateString() === d.toDateString() ? true : false;
  }

  getDateValue(date: any) {
    let selectedDate = new Date(this.year, this.month, date);
    this.datepickerValue = selectedDate.toDateString();
    this.showDatepicker = false;
    this.dateSelected.emit(selectedDate);
  }

  getNoOfDays() {
    const daysInMonth = new Date(this.year, this.month + 1, 0).getDate();

    // find where to start calendar day of week
    let dayOfWeek = new Date(this.year, this.month).getDay();
    let blankdaysArray = [];
    for (let i = 1; i <= dayOfWeek; i++) {
      blankdaysArray.push(i);
    }

    let daysArray = [];
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push(i);
    }

    this.blankdays = blankdaysArray;
    this.no_of_days = daysArray;
  }

  trackByIdentity = (index: number, item: any) => item;
}
