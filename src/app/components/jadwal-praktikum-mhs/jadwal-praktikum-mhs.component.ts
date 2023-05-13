import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-jadwal-praktikum-mhs',
  templateUrl: './jadwal-praktikum-mhs.component.html',
  styleUrls: ['./jadwal-praktikum-mhs.component.css']
})
export class JadwalPraktikumMhsComponent implements OnInit {
  jadwal : any;
  total=0;    
  private value:any;
  nrp : any;
  kode_tahun_akademik: any = '20211';
  pesanError = '';
  errorHandler = false;
  errorNrp = false
  jenis_jadwal: any = "P";
  constructor( private UserService : UserService, private AuthService:AuthService) { }

  ngOnInit(): void {
  
  }
  

  getData(){
      
    const token = this.AuthService.getToken()
    const username = this.AuthService.getUsername() // pengguna
    const kode_tahun_akademik = this.kode_tahun_akademik
    const kode_mahasiswa = this.nrp
    const jenis_jadwal = this.jenis_jadwal
      this.errorHandler = false;
      this.errorNrp = false;
      if (this.nrp == null) {
        this.errorNrp = true;
      }else{
        const resData = this.UserService.getJadwalPerkuliahanMhs(token, username, kode_tahun_akademik, kode_mahasiswa, jenis_jadwal);
        resData.then(dataUser =>{
          // dataUser.result;
          // this.toks = token_user
          // this.jadwal = dataUser.result
          // this.jadwal.filter(dataUser.result.id_jenis_jadwal == "K")
          
          console.log(dataUser)
          this.jadwal = dataUser.result
          this.findTotalSKS(this.jadwal)
          if (dataUser.jumlah_data == 0) {
           this.errorHandler = true;
           this.pesanError = 'Data yang ada cari tidak ada/kosong !';
           
          }
          
        }
        
        ).catch(error => {
          if (error.response) {
            console.log(error.response.data.message);
            this.errorHandler = true;
            this.pesanError = error.response.data.message;
          }
        }); 
      }
         
       
      
  }

  // filter(jadwal:any[]): any[]{
    
  //   return jadwal.filter(p=>p.id_jenis_jadwal == "K")
    
  // }

  findTotalSKS(data:any){    
    this.total=0;
    this.value=data    
    // console.log(this.value);  
    for(let j=0;j<data.length;j++){
      if (this.value[j].id_jenis_jadwal =="P") {
        this.total+= this.value[j].sks_mk  
        //  console.log(this.total)
      } 
         
    }
      
  }
}
