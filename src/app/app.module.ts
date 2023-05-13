import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/template/header/header.component';
import { SidebarComponent } from './components/template/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JadwalPerkuliahanComponent } from './components/jadwal-perkuliahan/jadwal-perkuliahan.component';
import { JadwalPerkuliahanMhsComponent } from './components/jadwal-perkuliahan-mhs/jadwal-perkuliahan-mhs.component';
import { JadwalPraktikumMhsComponent } from './components/jadwal-praktikum-mhs/jadwal-praktikum-mhs.component';
import { PageNotFoundComponent } from './components/template/page-not-found/page-not-found.component';
import { PesertaKuliahComponent } from './components/peserta-kuliah/peserta-kuliah.component';
import { PresensiPerkuliahanComponent } from './components/presensi-perkuliahan/presensi-perkuliahan.component';
import { CostumPipe } from './pipe/costum.pipe';
import { SortByPipe } from './pipe/sort-by.pipe';
import { JadwalSementaraComponent } from './components/jadwal-sementara/jadwal-sementara.component';
import { TambahJadwalComponent } from './components/tambah-jadwal/tambah-jadwal.component';
import { DispensasiKehadiranDosenComponent } from './components/dispensasi-kehadiran-dosen/dispensasi-kehadiran-dosen.component';
import { TambahDispensasinDosenComponent } from './components/tambah-dispensasin-dosen/tambah-dispensasin-dosen.component';
import { LaporanKehadiranDosenComponent } from './components/laporan-kehadiran-dosen/laporan-kehadiran-dosen.component';
import { LaporanKehadiranMhsComponent } from './components/laporan-kehadiran-mhs/laporan-kehadiran-mhs.component';
import { MonitoringKuliahComponent } from './components/monitoring-kuliah/monitoring-kuliah.component';
import { HariLiburComponent } from './components/hari-libur/hari-libur.component';
import { RekapKehadiranMhsComponent } from './components/rekap-kehadiran-mhs/rekap-kehadiran-mhs.component';
import { SuratPresensiMhsComponent } from './components/surat-presensi-mhs/surat-presensi-mhs.component';
import { SuratPemberitahuanKuliahComponent } from './components/surat-pemberitahuan-kuliah/surat-pemberitahuan-kuliah.component';
import { SuratProgresPmbComponent } from './components/surat-progres-pmb/surat-progres-pmb.component';
import { SuratEvaluasiPmbComponent } from './components/surat-evaluasi-pmb/surat-evaluasi-pmb.component';
import { EditDispensasiComponent } from './components/edit-dispensasi/edit-dispensasi.component';
// import { RemoveDuplicateJsonObjectModule } from 'remove-duplicate-json-object';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    JadwalPerkuliahanComponent,
    JadwalPerkuliahanMhsComponent,
    JadwalPraktikumMhsComponent,
    PageNotFoundComponent,
    PesertaKuliahComponent,
    PresensiPerkuliahanComponent,
    CostumPipe,
    SortByPipe,
    JadwalSementaraComponent,
    TambahJadwalComponent,
    DispensasiKehadiranDosenComponent,
    TambahDispensasinDosenComponent,
    LaporanKehadiranDosenComponent,
    LaporanKehadiranMhsComponent,
    MonitoringKuliahComponent,
    HariLiburComponent,
    RekapKehadiranMhsComponent,
    SuratPresensiMhsComponent,
    SuratPemberitahuanKuliahComponent,
    SuratProgresPmbComponent,
    SuratEvaluasiPmbComponent,
    EditDispensasiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
