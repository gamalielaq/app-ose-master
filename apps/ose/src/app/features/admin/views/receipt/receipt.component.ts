import { Component, OnInit } from '@angular/core';
import { Months, Period, Year, Filter } from '../../../../core/models/receipt';
import { ReceiptService } from '../../../../core/service/receipt.service';


@Component({
  selector: 'app-receipt',
  templateUrl: './receipt.component.html',
  styleUrls: ['./receipt.component.scss']
})

export class ReceiptComponent implements OnInit {

  msgs = [];
  month: Months[];
  selectedMonthStart: Months;
  selectedMonthEnd: Months;

  period: Period[];
  selectedPeriodStart: Period;
  selectedPeriodEnd: Period;

  year: Year[];
  selectedYearStart: Year;
  selectedYearEnd: Year;

  filter: Filter[];
  selectedFilterOne: Filter;
  selectedFilterTwo: Filter;
  selectedFilterThree: Filter;
  selectedFilterFour: Filter;

  constructor(
    private _receiptService: ReceiptService
  ) { }

  ngOnInit() {
    
    this.msgs.push({severity: 'warn', summary: 'IMPORTANTE', detail: 'No existen registros'});

    this.month = this._receiptService.getMonths();

    this.year = this._receiptService.getYear();

    this.filter = this._receiptService.getFilter();

    this.period = this._receiptService.getPeriod();

  }

}
