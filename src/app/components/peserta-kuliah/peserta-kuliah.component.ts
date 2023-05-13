import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-peserta-kuliah',
  templateUrl: './peserta-kuliah.component.html',
  styleUrls: ['./peserta-kuliah.component.css']
})
export class PesertaKuliahComponent implements OnInit {
  kode_tahun_akademik : any = '20211';
  kode_program : any = 'KER';
  kode_prodi : any = '301';
  peserta : any;
  errorHandler = false;
  pesanError = '';
  constructor(private AuthService : AuthService, private UserService : UserService) { }

  ngOnInit(): void {
  }

  getDataPeserta(){
    this.errorHandler = false;
    const token = this.AuthService.getToken();
    const username = this.AuthService.getUsername();
    const kode_tahun_akademik = this.kode_tahun_akademik;
    const kode_program = this.kode_program;
    const kode_prodi = this.kode_prodi;

    const resDataPeserta = this.UserService.getPesertaKuliah(token, username, kode_tahun_akademik, kode_program, kode_prodi);
    resDataPeserta.then(dataUser =>{
      console.log(dataUser)
      this.peserta = dataUser.result
      if (dataUser.jumlah_data == 0) {
        this.errorHandler = true;
        this.pesanError = 'Data yang anda cari tidak ada/kosong !';
        
       }

    })
  }

}
