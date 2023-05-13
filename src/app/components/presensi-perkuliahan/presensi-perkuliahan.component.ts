import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-presensi-perkuliahan',
  templateUrl: './presensi-perkuliahan.component.html',
  styleUrls: ['./presensi-perkuliahan.component.css']
})
export class PresensiPerkuliahanComponent implements OnInit {
  dataPresensi : any;
  taSelected : any = "";
  dosenSelected : any = "";
  mkSelected : any = "";
  dummy: any[] = [];
  dataMK : any;
  errorHandler = false;
  pesanError = '';
  
  constructor(private userService : UserService, private authService : AuthService) { }
  
  ngOnInit(): void {
    
  }
  
  //https://stackoverflow.com/questions/51877990/angular-4-update-list-in-select-option
  filterYear(deviceValue : any) {
    
    const token = this.authService.getToken();
    const username = this.authService.getUsername();
    const kode_tahun_akademik = deviceValue;
    const resDataJadwal = this.userService.getDataJadwal(token, username, kode_tahun_akademik);
  
  resDataJadwal.then(dataUser =>{
    this.dummy = dataUser.result;

    // console.log(dataUser.result)
  })
  }


  //masih error
  // get filterDosen(){
  //   return this.dummy.filter((items,index) => {
  //    return index === this.dummy.indexOf(items);
     
  //   })
  // }

   get filterMK(){
    return this.dummy.filter(items => {
      return items.nama_dosen == this.dosenSelected;
    })
  }
  getPresensi(){
    // console.log(this.taSelected);
    // console.log(this.dosenSelected);
    // console.log(this.mkSelected);
    this.errorHandler = false;
      const token = this.authService.getToken()
      const username = this.authService.getUsername();
      const kode_tahun_akademik = this.taSelected
      const jadwal_detail_id = this.mkSelected

      const resDataMK = this.userService.getJadwalDosen(token, username, kode_tahun_akademik, jadwal_detail_id);
      resDataMK.then(dataUser =>{
        // console.log(dataUser)
        this.dataMK = dataUser.result
        
      })

        const resData = this.userService.getPresensi(token, username, kode_tahun_akademik, jadwal_detail_id);
        resData.then(dataUser =>{
          // console.log(dataUser)
          this.dataPresensi = dataUser.result
          if (dataUser.message == 'Invalid Parameter'|| dataUser.jumlah_data == 0) {
            this.errorHandler = true;
            this.pesanError = 'Data yang anda cari tidak ada/kosong !';
            
           }
        })
        
          
         
        
      }
  }

