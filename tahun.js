var form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();

    var nama = document.getElementById('nama').value;
    var tgl = document.getElementById('tgl').value;
    tgl = tgl.split('-');
    var tanggal = parseInt(tgl[2]);
    var bulan = parseInt(tgl[1]);
    var tahunasli = parseInt(tgl[0]);
    var hitungan = weton(tanggal, bulan, tahunasli);
    var hari = hitungan[0];
    var pasaran = hitungan[1];
    var jumlah = hitung(hari, pasaran);

    var nama2 = document.getElementById('namap').value;
    var tgl2 = document.getElementById('tglp').value;
    tgl2 = tgl2.split('-');
    var tanggal2 = parseInt(tgl2[2]);
    var bulan2 = parseInt(tgl2[1]);
    var tahunasli2 = parseInt(tgl2[0]);
    var hitungan2 = weton(tanggal2, bulan2, tahunasli2);
    var hari2 = hitungan2[0];
    var pasaran2 = hitungan2[1];
    var jumlah2 = hitung(hari2, pasaran2);

    var has = hasil(jumlah, jumlah2);
    var sisa = wetonsisa(jumlah, jumlah2);


    document.getElementById('tahun').innerHTML =
        'Nama anda adalah ' +
        nama +
        ', dan nama pasangan anda adalah ' +
        nama2 +
        ', masing masing dari kalian berdua lahir pada hari ' +
        hari +
        ' ' +
        pasaran +
        ' dan ' +
        hari2 +
        ' ' +
        pasaran2 +
        '. Sehingga hasil perhitungan weton dari kalian berdua adalah ' +
        has[0] +
        ' yang artinya ' +
        has[1] +
        ' Dan hasil hitung weton sisa kalian berdua adalah ' +
        sisa[0] +
        ' yang artinya ' +
        sisa[1] +
        ' Mungkin itu sedikit uraian dari kami, kami harap hasil tersebut dapat menjadi referensi anda.';
    // console.log(weton(tanggal, bulan, tahunasli));
});

function weton(tanggal, bulan, tahunasli) {
    var tahun = tahunasli;
    if (tahun % 20 == 0) {
        tahunfix = tahun;
    } else {
        while (tahun % 20 != 0) {
            tahun = tahun - 1;
            tahunfix = tahun;
        }
    }

    var sisatahun = tahunasli - tahunfix;
    var tahunawal = 0;
    var tahunhitung = 5;
    while (tahunawal < tahunfix) {
        if ((tahunawal + 20) % 100 == 0) {
            if (((tahunawal + 20) / 100) % 2 == 1) {
                if (tahunhitung >= 0) {
                    tahunhitung = tahunhitung - 11;
                    if (tahunhitung < 0) {
                        tahunhitung = tahunhitung + 35;
                    } else {
                        tahunhitung = tahunhitung;
                    }
                } else {
                    tahunhitung = tahunhitung + 35;
                }
            } else if (((tahunawal + 20) / 100) % 2 == 0) {
                if (((tahunawal + 20) / 200) % 2 == 1) {
                    if (tahunhitung >= 0) {
                        tahunhitung = tahunhitung - 11;
                        if (tahunhitung < 0) {
                            tahunhitung = tahunhitung + 35;
                        } else {
                            tahunhitung = tahunhitung;
                        }
                    } else {
                        tahunhitung = tahunhitung + 35;
                    }
                } else if (((tahunawal + 20) / 200) % 2 == 0) {
                    if (tahunhitung >= 0) {
                        tahunhitung = tahunhitung - 10;
                        if (tahunhitung < 0) {
                            tahunhitung = tahunhitung + 35;
                        } else {
                            tahunhitung = tahunhitung;
                        }
                    } else {
                        tahunhitung = tahunhitung + 35;
                    }
                }
            }
        } else {
            if (tahunhitung >= 0) {
                tahunhitung = tahunhitung - 10;
                if (tahunhitung < 0) {
                    tahunhitung = tahunhitung + 35;
                } else {
                    tahunhitung = tahunhitung;
                }
            } else {
                tahunhitung = tahunhitung + 35;
            }
        }
        tahunawal = tahunawal + 20;
    }

    var bulanhitung;
    if (bulan == 1) {
        if (sisatahun == 0) {
            bulanhitung = 0;
        } else if (sisatahun == 1) {
            bulanhitung = 16;
        } else if (sisatahun == 2) {
            bulanhitung = 31;
        } else if (sisatahun == 3) {
            bulanhitung = 11;
        } else if (sisatahun == 4) {
            bulanhitung = 26;
        } else if (sisatahun == 5) {
            bulanhitung = 7;
        } else if (sisatahun == 6) {
            bulanhitung = 22;
        } else if (sisatahun == 7) {
            bulanhitung = 2;
        } else if (sisatahun == 8) {
            bulanhitung = 17;
        } else if (sisatahun == 9) {
            bulanhitung = 33;
        } else if (sisatahun == 10) {
            bulanhitung = 13;
        } else if (sisatahun == 11) {
            bulanhitung = 28;
        } else if (sisatahun == 12) {
            bulanhitung = 8;
        } else if (sisatahun == 13) {
            bulanhitung = 24;
        } else if (sisatahun == 14) {
            bulanhitung = 4;
        } else if (sisatahun == 15) {
            bulanhitung = 19;
        } else if (sisatahun == 16) {
            bulanhitung = 34;
        } else if (sisatahun == 17) {
            bulanhitung = 15;
        } else if (sisatahun == 18) {
            bulanhitung = 30;
        } else if (sisatahun == 19) {
            bulanhitung = 10;
        }
    } else if (bulan == 2) {
        if (sisatahun == 0) {
            bulanhitung = 31;
        } else if (sisatahun == 1) {
            bulanhitung = 12;
        } else if (sisatahun == 2) {
            bulanhitung = 27;
        } else if (sisatahun == 3) {
            bulanhitung = 7;
        } else if (sisatahun == 4) {
            bulanhitung = 22;
        } else if (sisatahun == 5) {
            bulanhitung = 3;
        } else if (sisatahun == 6) {
            bulanhitung = 18;
        } else if (sisatahun == 7) {
            bulanhitung = 33;
        } else if (sisatahun == 8) {
            bulanhitung = 13;
        } else if (sisatahun == 9) {
            bulanhitung = 29;
        } else if (sisatahun == 10) {
            bulanhitung = 9;
        } else if (sisatahun == 11) {
            bulanhitung = 24;
        } else if (sisatahun == 12) {
            bulanhitung = 4;
        } else if (sisatahun == 13) {
            bulanhitung = 20;
        } else if (sisatahun == 14) {
            bulanhitung = 0;
        } else if (sisatahun == 15) {
            bulanhitung = 15;
        } else if (sisatahun == 16) {
            bulanhitung = 30;
        } else if (sisatahun == 17) {
            bulanhitung = 11;
        } else if (sisatahun == 18) {
            bulanhitung = 26;
        } else if (sisatahun == 19) {
            bulanhitung = 6;
        }
    } else if (bulan == 3) {
        if (sisatahun == 0) {
            bulanhitung = 25;
        } else if (sisatahun == 1) {
            bulanhitung = 5;
        } else if (sisatahun == 2) {
            bulanhitung = 20;
        } else if (sisatahun == 3) {
            bulanhitung = 0;
        } else if (sisatahun == 4) {
            bulanhitung = 16;
        } else if (sisatahun == 5) {
            bulanhitung = 31;
        } else if (sisatahun == 6) {
            bulanhitung = 11;
        } else if (sisatahun == 7) {
            bulanhitung = 26;
        } else if (sisatahun == 8) {
            bulanhitung = 7;
        } else if (sisatahun == 9) {
            bulanhitung = 22;
        } else if (sisatahun == 10) {
            bulanhitung = 2;
        } else if (sisatahun == 11) {
            bulanhitung = 17;
        } else if (sisatahun == 12) {
            bulanhitung = 33;
        } else if (sisatahun == 13) {
            bulanhitung = 13;
        } else if (sisatahun == 14) {
            bulanhitung = 28;
        } else if (sisatahun == 15) {
            bulanhitung = 8;
        } else if (sisatahun == 16) {
            bulanhitung = 24;
        } else if (sisatahun == 17) {
            bulanhitung = 4;
        } else if (sisatahun == 18) {
            bulanhitung = 19;
        } else if (sisatahun == 19) {
            bulanhitung = 34;
        }
    } else if (bulan == 4) {
        if (sisatahun == 0) {
            bulanhitung = 21;
        } else if (sisatahun == 1) {
            bulanhitung = 1;
        } else if (sisatahun == 2) {
            bulanhitung = 16;
        } else if (sisatahun == 3) {
            bulanhitung = 31;
        } else if (sisatahun == 4) {
            bulanhitung = 12;
        } else if (sisatahun == 5) {
            bulanhitung = 27;
        } else if (sisatahun == 6) {
            bulanhitung = 7;
        } else if (sisatahun == 7) {
            bulanhitung = 22;
        } else if (sisatahun == 8) {
            bulanhitung = 3;
        } else if (sisatahun == 9) {
            bulanhitung = 18;
        } else if (sisatahun == 10) {
            bulanhitung = 33;
        } else if (sisatahun == 11) {
            bulanhitung = 13;
        } else if (sisatahun == 12) {
            bulanhitung = 29;
        } else if (sisatahun == 13) {
            bulanhitung = 9;
        } else if (sisatahun == 14) {
            bulanhitung = 24;
        } else if (sisatahun == 15) {
            bulanhitung = 4;
        } else if (sisatahun == 16) {
            bulanhitung = 20;
        } else if (sisatahun == 17) {
            bulanhitung = 0;
        } else if (sisatahun == 18) {
            bulanhitung = 15;
        } else if (sisatahun == 19) {
            bulanhitung = 30;
        }
    } else if (bulan == 5) {
        if (sisatahun == 0) {
            bulanhitung = 16;
        } else if (sisatahun == 1) {
            bulanhitung = 31;
        } else if (sisatahun == 2) {
            bulanhitung = 11;
        } else if (sisatahun == 3) {
            bulanhitung = 26;
        } else if (sisatahun == 4) {
            bulanhitung = 7;
        } else if (sisatahun == 5) {
            bulanhitung = 22;
        } else if (sisatahun == 6) {
            bulanhitung = 2;
        } else if (sisatahun == 7) {
            bulanhitung = 17;
        } else if (sisatahun == 8) {
            bulanhitung = 33;
        } else if (sisatahun == 9) {
            bulanhitung = 13;
        } else if (sisatahun == 10) {
            bulanhitung = 28;
        } else if (sisatahun == 11) {
            bulanhitung = 8;
        } else if (sisatahun == 12) {
            bulanhitung = 24;
        } else if (sisatahun == 13) {
            bulanhitung = 4;
        } else if (sisatahun == 14) {
            bulanhitung = 19;
        } else if (sisatahun == 15) {
            bulanhitung = 34;
        } else if (sisatahun == 16) {
            bulanhitung = 15;
        } else if (sisatahun == 17) {
            bulanhitung = 30;
        } else if (sisatahun == 18) {
            bulanhitung = 10;
        } else if (sisatahun == 19) {
            bulanhitung = 25;
        }
    } else if (bulan == 6) {
        if (sisatahun == 0) {
            bulanhitung = 12;
        } else if (sisatahun == 1) {
            bulanhitung = 27;
        } else if (sisatahun == 2) {
            bulanhitung = 7;
        } else if (sisatahun == 3) {
            bulanhitung = 22;
        } else if (sisatahun == 4) {
            bulanhitung = 3;
        } else if (sisatahun == 5) {
            bulanhitung = 18;
        } else if (sisatahun == 6) {
            bulanhitung = 33;
        } else if (sisatahun == 7) {
            bulanhitung = 13;
        } else if (sisatahun == 8) {
            bulanhitung = 29;
        } else if (sisatahun == 9) {
            bulanhitung = 9;
        } else if (sisatahun == 10) {
            bulanhitung = 24;
        } else if (sisatahun == 11) {
            bulanhitung = 4;
        } else if (sisatahun == 12) {
            bulanhitung = 20;
        } else if (sisatahun == 13) {
            bulanhitung = 0;
        } else if (sisatahun == 14) {
            bulanhitung = 15;
        } else if (sisatahun == 15) {
            bulanhitung = 30;
        } else if (sisatahun == 16) {
            bulanhitung = 11;
        } else if (sisatahun == 17) {
            bulanhitung = 26;
        } else if (sisatahun == 18) {
            bulanhitung = 6;
        } else if (sisatahun == 19) {
            bulanhitung = 21;
        }
    } else if (bulan == 7) {
        if (sisatahun == 0) {
            bulanhitung = 7;
        } else if (sisatahun == 1) {
            bulanhitung = 22;
        } else if (sisatahun == 2) {
            bulanhitung = 2;
        } else if (sisatahun == 3) {
            bulanhitung = 17;
        } else if (sisatahun == 4) {
            bulanhitung = 33;
        } else if (sisatahun == 5) {
            bulanhitung = 13;
        } else if (sisatahun == 6) {
            bulanhitung = 28;
        } else if (sisatahun == 7) {
            bulanhitung = 8;
        } else if (sisatahun == 8) {
            bulanhitung = 24;
        } else if (sisatahun == 9) {
            bulanhitung = 4;
        } else if (sisatahun == 10) {
            bulanhitung = 19;
        } else if (sisatahun == 11) {
            bulanhitung = 34;
        } else if (sisatahun == 12) {
            bulanhitung = 15;
        } else if (sisatahun == 13) {
            bulanhitung = 30;
        } else if (sisatahun == 14) {
            bulanhitung = 10;
        } else if (sisatahun == 15) {
            bulanhitung = 25;
        } else if (sisatahun == 16) {
            bulanhitung = 6;
        } else if (sisatahun == 17) {
            bulanhitung = 21;
        } else if (sisatahun == 18) {
            bulanhitung = 1;
        } else if (sisatahun == 19) {
            bulanhitung = 16;
        }
    } else if (bulan == 8) {
        if (sisatahun == 0) {
            bulanhitung = 3;
        } else if (sisatahun == 1) {
            bulanhitung = 18;
        } else if (sisatahun == 2) {
            bulanhitung = 33;
        } else if (sisatahun == 3) {
            bulanhitung = 13;
        } else if (sisatahun == 4) {
            bulanhitung = 29;
        } else if (sisatahun == 5) {
            bulanhitung = 9;
        } else if (sisatahun == 6) {
            bulanhitung = 24;
        } else if (sisatahun == 7) {
            bulanhitung = 4;
        } else if (sisatahun == 8) {
            bulanhitung = 20;
        } else if (sisatahun == 9) {
            bulanhitung = 0;
        } else if (sisatahun == 10) {
            bulanhitung = 15;
        } else if (sisatahun == 11) {
            bulanhitung = 30;
        } else if (sisatahun == 12) {
            bulanhitung = 11;
        } else if (sisatahun == 13) {
            bulanhitung = 26;
        } else if (sisatahun == 14) {
            bulanhitung = 6;
        } else if (sisatahun == 15) {
            bulanhitung = 21;
        } else if (sisatahun == 16) {
            bulanhitung = 2;
        } else if (sisatahun == 17) {
            bulanhitung = 17;
        } else if (sisatahun == 18) {
            bulanhitung = 32;
        } else if (sisatahun == 19) {
            bulanhitung = 12;
        }
    } else if (bulan == 9) {
        if (sisatahun == 0) {
            bulanhitung = 34;
        } else if (sisatahun == 1) {
            bulanhitung = 14;
        } else if (sisatahun == 2) {
            bulanhitung = 29;
        } else if (sisatahun == 3) {
            bulanhitung = 9;
        } else if (sisatahun == 4) {
            bulanhitung = 25;
        } else if (sisatahun == 5) {
            bulanhitung = 5;
        } else if (sisatahun == 6) {
            bulanhitung = 20;
        } else if (sisatahun == 7) {
            bulanhitung = 0;
        } else if (sisatahun == 8) {
            bulanhitung = 16;
        } else if (sisatahun == 9) {
            bulanhitung = 31;
        } else if (sisatahun == 10) {
            bulanhitung = 11;
        } else if (sisatahun == 11) {
            bulanhitung = 26;
        } else if (sisatahun == 12) {
            bulanhitung = 7;
        } else if (sisatahun == 13) {
            bulanhitung = 22;
        } else if (sisatahun == 14) {
            bulanhitung = 2;
        } else if (sisatahun == 15) {
            bulanhitung = 17;
        } else if (sisatahun == 16) {
            bulanhitung = 33;
        } else if (sisatahun == 17) {
            bulanhitung = 13;
        } else if (sisatahun == 18) {
            bulanhitung = 28;
        } else if (sisatahun == 19) {
            bulanhitung = 8;
        }
    } else if (bulan == 10) {
        if (sisatahun == 0) {
            bulanhitung = 29;
        } else if (sisatahun == 1) {
            bulanhitung = 9;
        } else if (sisatahun == 2) {
            bulanhitung = 24;
        } else if (sisatahun == 3) {
            bulanhitung = 4;
        } else if (sisatahun == 4) {
            bulanhitung = 20;
        } else if (sisatahun == 5) {
            bulanhitung = 0;
        } else if (sisatahun == 6) {
            bulanhitung = 15;
        } else if (sisatahun == 7) {
            bulanhitung = 30;
        } else if (sisatahun == 8) {
            bulanhitung = 11;
        } else if (sisatahun == 9) {
            bulanhitung = 16;
        } else if (sisatahun == 10) {
            bulanhitung = 6;
        } else if (sisatahun == 11) {
            bulanhitung = 21;
        } else if (sisatahun == 12) {
            bulanhitung = 2;
        } else if (sisatahun == 13) {
            bulanhitung = 17;
        } else if (sisatahun == 14) {
            bulanhitung = 32;
        } else if (sisatahun == 15) {
            bulanhitung = 12;
        } else if (sisatahun == 16) {
            bulanhitung = 28;
        } else if (sisatahun == 17) {
            bulanhitung = 8;
        } else if (sisatahun == 18) {
            bulanhitung = 23;
        } else if (sisatahun == 19) {
            bulanhitung = 3;
        }
    } else if (bulan == 11) {
        if (sisatahun == 0) {
            bulanhitung = 25;
        } else if (sisatahun == 1) {
            bulanhitung = 5;
        } else if (sisatahun == 2) {
            bulanhitung = 20;
        } else if (sisatahun == 3) {
            bulanhitung = 0;
        } else if (sisatahun == 4) {
            bulanhitung = 16;
        } else if (sisatahun == 5) {
            bulanhitung = 31;
        } else if (sisatahun == 6) {
            bulanhitung = 11;
        } else if (sisatahun == 7) {
            bulanhitung = 26;
        } else if (sisatahun == 8) {
            bulanhitung = 7;
        } else if (sisatahun == 9) {
            bulanhitung = 22;
        } else if (sisatahun == 10) {
            bulanhitung = 2;
        } else if (sisatahun == 11) {
            bulanhitung = 17;
        } else if (sisatahun == 12) {
            bulanhitung = 33;
        } else if (sisatahun == 13) {
            bulanhitung = 13;
        } else if (sisatahun == 14) {
            bulanhitung = 28;
        } else if (sisatahun == 15) {
            bulanhitung = 8;
        } else if (sisatahun == 16) {
            bulanhitung = 24;
        } else if (sisatahun == 17) {
            bulanhitung = 4;
        } else if (sisatahun == 18) {
            bulanhitung = 19;
        } else if (sisatahun == 19) {
            bulanhitung = 34;
        }
    } else if (bulan == 12) {
        if (sisatahun == 0) {
            bulanhitung = 20;
        } else if (sisatahun == 1) {
            bulanhitung = 0;
        } else if (sisatahun == 2) {
            bulanhitung = 15;
        } else if (sisatahun == 3) {
            bulanhitung = 30;
        } else if (sisatahun == 4) {
            bulanhitung = 11;
        } else if (sisatahun == 5) {
            bulanhitung = 26;
        } else if (sisatahun == 6) {
            bulanhitung = 6;
        } else if (sisatahun == 7) {
            bulanhitung = 21;
        } else if (sisatahun == 8) {
            bulanhitung = 2;
        } else if (sisatahun == 9) {
            bulanhitung = 17;
        } else if (sisatahun == 10) {
            bulanhitung = 32;
        } else if (sisatahun == 11) {
            bulanhitung = 21;
        } else if (sisatahun == 12) {
            bulanhitung = 28;
        } else if (sisatahun == 13) {
            bulanhitung = 8;
        } else if (sisatahun == 14) {
            bulanhitung = 23;
        } else if (sisatahun == 15) {
            bulanhitung = 3;
        } else if (sisatahun == 16) {
            bulanhitung = 19;
        } else if (sisatahun == 17) {
            bulanhitung = 34;
        } else if (sisatahun == 18) {
            bulanhitung = 14;
        } else if (sisatahun == 19) {
            bulanhitung = 29;
        }
    } else {
        bulanhitung = 0;
    }

    var hasil = tahunhitung + bulanhitung + tanggal;
    if (hasil <= 35) {
        hasil = hasil;
    } else {
        hasil = hasil - 35;
        if (hasil <= 35) {
            hasil = hasil;
        } else {
            hasil = hasil - 35;
        }
    }

    var hari;
    var pasaran;
    if (hasil == 1) {
        hari = 'Senin';
        pasaran = 'Legi';
    } else if (hasil == 2) {
        hari = 'Selasa';
        pasaran = 'Pahing';
    } else if (hasil == 3) {
        hari = 'Rabu';
        pasaran = 'Pon';
    } else if (hasil == 4) {
        hari = 'Kamis';
        pasaran = 'Wage';
    } else if (hasil == 5) {
        hari = "Jum'at";
        pasaran = 'Kliwon';
    } else if (hasil == 6) {
        hari = 'Sabtu';
        pasaran = 'Legi';
    } else if (hasil == 7) {
        hari = 'Minggu';
        pasaran = 'Pahing';
    } else if (hasil == 8) {
        hari = 'Senin';
        pasaran = 'Pon';
    } else if (hasil == 9) {
        hari = 'Selasa';
        pasaran = 'Wage';
    } else if (hasil == 10) {
        hari = 'Rabu';
        pasaran = 'Kliwon';
    } else if (hasil == 11) {
        hari = 'Kamis';
        pasaran = 'Legi';
    } else if (hasil == 12) {
        hari = "Jum'at";
        pasaran = 'Pahing';
    } else if (hasil == 13) {
        hari = 'Sabtu';
        pasaran = 'Pon';
    } else if (hasil == 14) {
        hari = 'Minggu';
        pasaran = 'Wage';
    } else if (hasil == 15) {
        hari = 'Senin';
        pasaran = 'Kliwon';
    } else if (hasil == 16) {
        hari = 'Selasa';
        pasaran = 'Legi';
    } else if (hasil == 17) {
        hari = 'Rabu';
        pasaran = 'Pahing';
    } else if (hasil == 18) {
        hari = 'Kamis';
        pasaran = 'Pon';
    } else if (hasil == 19) {
        hari = "Jum'at";
        pasaran = 'Wage';
    } else if (hasil == 20) {
        hari = 'Sabtu';
        pasaran = 'Kliwon';
    } else if (hasil == 21) {
        hari = 'Minggu';
        pasaran = 'Legi';
    } else if (hasil == 22) {
        hari = 'Senin';
        pasaran = 'Pahing';
    } else if (hasil == 23) {
        hari = 'Selasa';
        pasaran = 'Pon';
    } else if (hasil == 24) {
        hari = 'Rabu';
        pasaran = 'Wage';
    } else if (hasil == 25) {
        hari = 'Kamis';
        pasaran = 'Kliwon';
    } else if (hasil == 26) {
        hari = "Jum'at";
        pasaran = 'Legi';
    } else if (hasil == 27) {
        hari = 'Sabtu';
        pasaran = 'Pahing';
    } else if (hasil == 28) {
        hari = 'Minggu';
        pasaran = 'Pon';
    } else if (hasil == 29) {
        hari = 'Senin';
        pasaran = 'Wage';
    } else if (hasil == 30) {
        hari = 'Selasa';
        pasaran = 'Kliwon';
    } else if (hasil == 31) {
        hari = 'Rabu';
        pasaran = 'Legi';
    } else if (hasil == 32) {
        hari = 'Kamis';
        pasaran = 'Pahing';
    } else if (hasil == 33) {
        hari = "Jum'at";
        pasaran = 'Pon';
    } else if (hasil == 34) {
        hari = 'Sabtu';
        pasaran = 'Wage';
    } else if (hasil == 35) {
        hari = 'Minggu';
        pasaran = 'Kliwon';
    }
    var weton = [hari, pasaran];
    return weton;
}

function hitung(hari, pasaran) {
    if (hari == 'Minggu') {
        harihitung = 5;
    } else if (hari == 'Senin') {
        harihitung = 4;
    } else if (hari == 'Selasa') {
        harihitung = 3;
    } else if (hari == 'Rabu') {
        harihitung = 7;
    } else if (hari == 'Kamis') {
        harihitung = 8;
    } else if (hari == "Jum'at") {
        harihitung = 6;
    } else if (hari == 'Sabtu') {
        harihitung = 9;
    }

    if (pasaran == 'Legi') {
        pasaranhitung = 5;
    } else if (pasaran == 'Pahing') {
        pasaranhitung = 9;
    } else if (pasaran == 'Pon') {
        pasaranhitung = 7;
    } else if (pasaran == 'Wage') {
        pasaranhitung = 4;
    } else if (pasaran == 'Kliwon') {
        pasaranhitung = 8;
    }

    var hasil = harihitung + pasaranhitung;
    return hasil;
}

function hasil(weton1, weton2) {
    hasilhitung = weton1 + weton2;
    if (hasilhitung == 1 || hasilhitung == 9 || hasilhitung == 10 || hasilhitung == 18 || hasilhitung == 19 || hasilhitung == 27 || hasilhitung == 28 || hasilhitung == 36) {
        has = 'PEGAT';
        keterangan =
            'Pegat atau pegatan, dalam bahasa jawa berarti bercerai. Pasangan ini kemungkinan akan sering menghadapi masalah dikemudian hari. Masalah itu bisa dari masalah ekonomi, perselingkuhan, kekuasaan yang bisa menyebabkan perceraian.';
    } else if (hasilhitung == 2 || hasilhitung == 11 || hasilhitung == 20 || hasilhitung == 29) {
        has = 'RATU';
        keterangan =
            'Ratu identik dengan sosok yang dihormati. Jika hasilnya ratu, pasangan ini bisa dikatakan sudah cocok dan berjodoh. Sangat dihargai dan disegani oleh tetangga maupun lingkungan sekitar. Bahkan tak sedikit orang sekitar yang iri dengan keharmonisannya dalam membina rumah tangga.';
    } else if (hasilhitung == 3 || hasilhitung == 12 || hasilhitung == 21 || hasilhitung == 30) {
        has = 'JODOH';
        keterangan = 'Namanya saja sudah jodoh. Jika hasilnya Jodoh, pasangan ini memang ditakdirkan berjodoh. Mereka bisa saling menerima segala kekurangan maupun kelebihan masing-masing. Nasib rumah tangga dapat harmonis sampai tua.';
    } else if (hasilhitung == 4 || hasilhitung == 13 || hasilhitung == 22 || hasilhitung == 31) {
        has = 'TOPO';
        keterangan =
            'Topo, dalam bahasa jawa bisa diartikan bertirakat. Pasangan ini akan sering mengalami kesusahan di awal-awal membina rumah tangga, namun pada akhirnya akan bahagia. Persoalan rumah tangga bisa dari ekonomi dan lain sebagainya. Tapi setelah mempunyai anak dan cukup lama berumah tangga, hidupnya akan sukses serta bahagia.';
    } else if (hasilhitung == 5 || hasilhitung == 14 || hasilhitung == 23 || hasilhitung == 32) {
        has = 'TINARI';
        keterangan = 'Pasangan ini akan mendapatkan kebahagiaan. Kemudahan dalam mencari rezeki dan tidak akan hidup berkekurangan. Hidupnya juga diliputi keberuntungan.';
    } else if (hasilhitung == 6 || hasilhitung == 15 || hasilhitung == 24 || hasilhitung == 33) {
        has = 'PADU';
        keterangan =
            'Padu dalam bahasa jawa berarti cekcok atau pertengkaran. Rumah tangga pasangan ini akan sering mengalami pertikaian atau pertengkaran. Meski sering terjadi pertengkaran, nasib rumah tangga tidak sampai bercerai. Pertengkaran ini bahkan dipicu dari hal-hal yang bersifat sepele.';
    } else if (hasilhitung == 7 || hasilhitung == 16 || hasilhitung == 25 || hasilhitung == 34) {
        has = 'SUJANAN';
        keterangan = 'Rumah tangga ini akan sering mengalami percekcokan dan masalah perselingkuhan. Entah dari sang suami atau istri yang mulai membuat hubungan perselingkuhan.';
    } else if (hasilhitung == 8 || hasilhitung == 17 || hasilhitung == 26 || hasilhitung == 35) {
        has = 'PESTHI';
        keterangan = 'Rumah tangga akan berjalan dengan sangat harmonis, rukun , adem, ayem, tenteram dan sejahtera sampai tua. Sedikit masalah namun tidak megganggu keharmonisan.';
    }

    var hasil = [has, keterangan];
    return hasil;
}


function wetonsisa(jumlah, jumlah2) {
    hasilhitung=jumlah+jumlah2;
    wetonsisa=hasilhitung%7;
    
if (wetonsisa==0){
        sisa='Lebu ketiup angin';

        keterangan='sulit mencapai cita-cita, sering mendapatkan kesusahan, dan sering pindah rumah. Dalam primbon jawa biasanya dilakukan menabur debu saat akan Ijab Qobul guna menolak bala hal tersebut.';

    }else if (wetonsisa==1){

        sisa='Wasesasegara';
        keterangan='mempunyai watak yang sabar, pemaaf, berbudi luhur, dan berwibawa.';
    }else if (wetonsisa==2){

        sisa='Tunggaksemi';
        keterangan='rezeki dimudahkan dan dilancarkan.';
    }else if (wetonsisa==3){

        sisa='Satriya wibawa';
        keterangan='memperoleh kemuliaan dan keluhuran yang tinggi.';
    }else if (wetonsisa==4){

        sisa='Sumur sinaba';
        keterangan='banyak orang yang datang berguru dan meminta ilmu.';
    }else if (wetonsisa==5){

        sisa='Satriya wirang';
        keterangan='sering mendapatkan duka cita. Kesusahan , sering malu akibat tindakannya sendiri. Dalam kitab primbon jawa, untuk menolak balak hal tersebut bisa memotong ayam saat Ijab Qobul.';
    }else if (wetonsisa==6){

        sisa='Bumikepetak';
        keterangan='hatinya lapang, banyak mengalami cobaan dan rintangan hidup, serta pekerja keras. Biasanya untuk menolak hal tersebut dapat memendam/mengubur tanah saat akan Ijab Qobul.';
    }

    var hasil = [sisa, keterangan];
    return hasil;
}
