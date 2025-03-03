import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {
  tableInformation = [
    { name: 'Instant Coupons', linkingRequired: true},
    { name: 'Full access to visa Savings Edge Benefits', linkingRequired: false},
    { name: 'Cash Back tracking', linkingRequired: false},
    { name: 'Merchane location search', linkingRequired: false},
    { name: 'Cashback offers', linkingRequired: false}
];
}
