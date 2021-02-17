import { Component, OnInit } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';


@Component({
  selector: 'app-local',
  templateUrl: './local.component.html',
  styleUrls: ['./local.component.scss']
})
export class LocalComponent implements OnInit {

  constructor(
    private dialogService: DialogService,
    private confirmationService: ConfirmationService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
  }


  addLocal(): void {
    const ref = this.dialogService.open(LocalComponent, {
      showHeader: true,
      header: 'Nuevo Usuario',
      styleClass: '',
      width: '60%',
      baseZIndex: 10000,
    });
  }


}
