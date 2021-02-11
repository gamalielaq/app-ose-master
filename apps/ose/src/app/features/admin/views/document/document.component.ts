import { Component, OnInit } from '@angular/core';
import { Months, Period, Year, Filter } from '../../../../core/models/receipt';
import { ReceiptService } from '../../../../core/service/receipt.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.scss']
})
export class DocumentComponent implements OnInit {
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

  constructor(
    private _receiptService: ReceiptService
  ) { }

  ngOnInit() {
    this.msgs.push({severity: 'warn', summary: 'IMPORTANTE', detail: 'No existen registros'});

    this.period = this._receiptService.getPeriod();

    this.month = this._receiptService.getMonths();

    this.year = this._receiptService.getYear();
    
  }

}
