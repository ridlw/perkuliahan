import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DispensasiKehadiranDosenComponent } from './components/dispensasi-kehadiran-dosen/dispensasi-kehadiran-dosen.component';
import { EditDispensasiComponent } from './components/edit-dispensasi/edit-dispensasi.component';
import { HariLiburComponent } from './components/hari-libur/hari-libur.component';
import { HomeComponent } from './components/home/home.component';
import { JadwalPerkuliahanMhsComponent } from './components/jadwal-perkuliahan-mhs/jadwal-perkuliahan-mhs.component';
import { JadwalPerkuliahanComponent } from './components/jadwal-perkuliahan/jadwal-perkuliahan.component';
import { JadwalPraktikumMhsComponent } from './components/jadwal-praktikum-mhs/jadwal-praktikum-mhs.component';
import { JadwalSementaraComponent } from './components/jadwal-sementara/jadwal-sementara.component';
import { LaporanKehadiranDosenComponent } from './components/laporan-kehadiran-dosen/laporan-kehadiran-dosen.component';
import { LaporanKehadiranMhsComponent } from './components/laporan-kehadiran-mhs/laporan-kehadiran-mhs.component';
import { MonitoringKuliahComponent } from './components/monitoring-kuliah/monitoring-kuliah.component';
import { PesertaKuliahComponent } from './components/peserta-kuliah/peserta-kuliah.component';
import { PresensiPerkuliahanComponent } from './components/presensi-perkuliahan/presensi-perkuliahan.component';
import { RekapKehadiranMhsComponent } from './components/rekap-kehadiran-mhs/rekap-kehadiran-mhs.component';
import { SuratEvaluasiPmbComponent } from './components/surat-evaluasi-pmb/surat-evaluasi-pmb.component';
import { SuratPemberitahuanKuliahComponent } from './components/surat-pemberitahuan-kuliah/surat-pemberitahuan-kuliah.component';
import { SuratPresensiMhsComponent } from './components/surat-presensi-mhs/surat-presensi-mhs.component';
import { SuratProgresPmbComponent } from './components/surat-progres-pmb/surat-progres-pmb.component';
import { TambahDispensasinDosenComponent } from './components/tambah-dispensasin-dosen/tambah-dispensasin-dosen.component';
import { TambahJadwalComponent } from './components/tambah-jadwal/tambah-jadwal.component';
import { HeaderComponent } from './components/template/header/header.component';
import { PageNotFoundComponent } from './components/template/page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'jadwal-perkuliahan', component: JadwalPerkuliahanComponent },
  { path: 'jadwal-perkuliahan-mhs', component: JadwalPerkuliahanMhsComponent },
  { path: 'jadwal-praktikum-mhs', component: JadwalPraktikumMhsComponent },
  { path: 'peserta-kuliah', component: PesertaKuliahComponent },
  { path: 'presensi-perkuliahan', component: PresensiPerkuliahanComponent },
  { path: 'jadwal-sementara', component: JadwalSementaraComponent },
  { path: 'tambah-jadwal', component: TambahJadwalComponent },
  { path: 'dispensasi-kehadiran-dosen', component: DispensasiKehadiranDosenComponent },
  { path: 'tambah-dispensasi-dosen', component: TambahDispensasinDosenComponent },
  { path: 'laporan-kehadiran-dosen', component: LaporanKehadiranDosenComponent },
  { path: 'laporan-kehadiran-mhs', component: LaporanKehadiranMhsComponent },
  { path: 'monitoring-kuliah', component:MonitoringKuliahComponent},
  { path: 'hari-libur', component:HariLiburComponent},
  { path: 'rekap-kehadiran-mhs', component:RekapKehadiranMhsComponent},
  { path: 'surat-presensi-mhs', component:SuratPresensiMhsComponent},
  { path: 'surat-pemberitahuan-kuliah', component:SuratPemberitahuanKuliahComponent},
  { path: 'surat-progres-pmb', component:SuratProgresPmbComponent},
  { path: 'surat-evaluasi-pmb', component:SuratEvaluasiPmbComponent},
  { path: 'edit-dispensasi', component:EditDispensasiComponent},
  {
    path: '**', component:PageNotFoundComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
