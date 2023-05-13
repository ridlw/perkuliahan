import { Component, OnInit } from '@angular/core';
import  jspdf  from "jspdf";
import html2canvas from 'html2canvas';
@Component({
  selector: 'app-dispensasi-kehadiran-dosen',
  templateUrl: './dispensasi-kehadiran-dosen.component.html',
  styleUrls: ['./dispensasi-kehadiran-dosen.component.css']
})
export class DispensasiKehadiranDosenComponent implements OnInit {

  constructor() { }

  public openPDF(): void {
    let DATA: any = document.getElementById('htmlData');
    html2canvas(DATA).then((canvas) => {
      let fileWidth = 208;
      let fileHeight = (canvas.height * fileWidth) / canvas.width;
      const FILEURI = canvas.toDataURL('image/png');
      let PDF = new jspdf('p', 'mm', 'a4');
      let position = 0;
      PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
      PDF.save('angular-demo.pdf');
    });
  }
  ngOnInit(): void {
  }

}
