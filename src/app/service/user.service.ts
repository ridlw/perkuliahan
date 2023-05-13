import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor() { }

  getJadwalPerkuliahanMhs(token: any, username: any, kode_tahun_periode: any, kode_mahasiswa:any, jenis_jadwal:any){
    const response = axios({
      method: 'get',
      url: `https://api.unpas.ac.id/situkul/jadwalMahasiswa?token=${token}&username=${username}`,
      params: {
        where : `kode_mahasiswa = '${kode_mahasiswa}'and tahun = '${kode_tahun_periode}'and id_jenis_jadwal = '${jenis_jadwal}'`
      }
  }).then((response) => response.data)
  return response
   }

   getJadwalPerkuliahan(token: any, username: any, kode_tahun_periode: any, kode_program:any, kode_prodi:any){
    const response = axios({
      method: 'get',
      url: `https://api.unpas.ac.id/situkul/jadwal?token=${token}&username=${username}&kode_tahun_periode=${kode_tahun_periode}`,//&kode_program=${kode_program}&kode_prodi=${kode_prodi}
      params: {
        where : `kode_program = '${kode_program}' and kode_prodi = '${kode_prodi}'`
      }
  }).then((response) => response.data)
  return response
   }

   getDataJadwal(token: any, username: any, kode_tahun_periode: any){
    const response = axios({
      method: 'get',
      url: `https://api.unpas.ac.id/dosen/jadwal?token=${token}&username=${username}&kode_tahun_periode=${kode_tahun_periode}`//&kode_program=${kode_program}&kode_prodi=${kode_prodi}
      
  }).then((response) => response.data)
  return response
   }

   getPresensi(token: any, username: any, kode_tahun_periode: any, jadwal_detail_id : any){
    const response = axios({
      method: 'get',
      url: `https://api.unpas.ac.id/dosen/presensi?token=${token}&username=${username}&kode_tahun_periode=${kode_tahun_periode}`,//&kode_program=${kode_program}&kode_prodi=${kode_prodi}
      params: {
        where : `jadwal_detail_id = '${jadwal_detail_id}'`
      }
  }).then((response) => response.data)
  return response
   }

  getJadwalDosen(token: any, username: any, kode_tahun_periode: any, jadwal_detail_id : any){
    const response = axios({
      method: 'get',
      url: `https://api.unpas.ac.id/dosen/jadwal?token=${token}&username=${username}&kode_tahun_periode=${kode_tahun_periode}`,
      params: {
        where : `jadwal_detail_id = '${jadwal_detail_id}'`
      }
      
  }).then((response) => response.data)
  return response
   }

   getPesertaKuliah(token: any, username: any, kode_tahun_periode: any, kode_program:any, kode_prodi:any){
    const response = axios({
      method: 'get',
      url: `https://api.unpas.ac.id/situkul/jadwal?token=${token}&username=${username}&kode_tahun_periode=${kode_tahun_periode}`,//&kode_program=${kode_program}&kode_prodi=${kode_prodi}
      params: {
        where : `kode_program = '${kode_program}' and kode_prodi = '${kode_prodi}'`
      }
  }).then((response) => response.data)
  return response
   }
}
