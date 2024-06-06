import { Component, OnInit } from '@angular/core';
import { BooksElement } from '../models/books-element';

import { BooksService } from '../services/books-service';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import * as FileSaver from 'file-saver';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-display-inspection',
  templateUrl: './display-inspection.component.html',
  styleUrls: ['./display-inspection.component.css'],
})
export class DisplayInspectionComponent implements OnInit {
  bookList: BooksElement[] = [];

  BooksElement: BooksElement = new BooksElement();

  isLoading:boolean = true;
  constructor(
    private bookService: BooksService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService,
    private spinner:NgxSpinnerService
  ) {}

  ngOnInit() {
    this.getBooksList();
    this.isLoading=false;
  }

  getBooksList(){
    this.spinner.show();
    this.bookService.getBookList().subscribe(data=>{
      this.bookList = data;
      this.spinner.hide();
      console.log("INSPECTION DATA=",this.bookList);
    },err=>{
      this.spinner.hide();
      this.messageService.add({severity:'error', summary: 'ERROR', detail: 'ERROR GETTING BOOK LIST', life: 3000});
      console.log("ERROR GETTING BOOK LIST");
    })
  }

  exportExcel() {
    import("xlsx").then(xlsx => {
        const worksheet = xlsx.utils.json_to_sheet(this.bookList);
        const workbook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
        const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
        this.saveAsExcelFile(excelBuffer, "Livres");
    });
}

saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
        type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
}
}
