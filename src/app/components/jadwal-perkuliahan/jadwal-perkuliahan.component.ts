import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-jadwal-perkuliahan',
  templateUrl: './jadwal-perkuliahan.component.html',
  styleUrls: ['./jadwal-perkuliahan.component.css']
})
export class JadwalPerkuliahanComponent implements OnInit {
  kode_tahun_akademik : any = '20211';
  kode_program : any = 'KER';
  kode_prodi : any = '301';
  jadwal : any;
  errorHandler = false;
  pesanError = '';

  constructor(private AuthService : AuthService, private UserService : UserService) { }

  ngOnInit(): void {
  }

  getDataPerkuliahan(){
    this.errorHandler = false;
    const token = this.AuthService.getToken();
    const username = this.AuthService.getUsername();
    const kode_tahun_akademik = this.kode_tahun_akademik;
    const kode_program = this.kode_program;
    const kode_prodi = this.kode_prodi;

    const resDataPerkuliahan = this.UserService.getJadwalPerkuliahan(token, username, kode_tahun_akademik, kode_program, kode_prodi);
    resDataPerkuliahan.then(dataUser =>{
      console.log(dataUser)
      this.jadwal = dataUser.result
      if (dataUser.jumlah_data == 0) {
        this.errorHandler = true;
        this.pesanError = 'Data yang anda cari tidak ada/kosong !';
        
       }

    })
  }
//https://www.tektutorialshub.com/angular/select-options-example-in-angular/
}
