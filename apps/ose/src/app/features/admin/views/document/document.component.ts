import { Component, OnInit } from '@angular/core';
import { Document } from 'apps/ose/src/app/core/models/document';
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

  documents: Document;

  constructor(
    private _receiptService: ReceiptService
  ) { }

  ngOnInit() {
    this._receiptService.getDocumentsAll().subscribe( res=> {
      console.log(res);
      this.documents = res;
      return res;
    });

    this.msgs.push({severity: 'warn', summary: 'IMPORTANTE', detail: 'No existen registros'});

    this.period = this._receiptService.getPeriod();

    this.month = this._receiptService.getMonths();

    this.year = this._receiptService.getYear();
    
  }

}
