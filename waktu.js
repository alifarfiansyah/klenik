var d = new Date();
var hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
var bulan = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
var waktu = d.getHours();
var menit;
var ucapan;
if (d.getMinutes() < 10) {
    menit = "0" + d.getMinutes();
} else {
    menit = d.getMinutes();
}
if (waktu < 10) {
    ucapan = "Selamat pagi klenikers"
} else if (waktu >= 10 && waktu < 17) {
    ucapan = "Selamat siang klenikers"
} else if (waktu >= 17 && waktu < 22) {
    ucapan = "Selamat sore klenikers"
} else {
    ucapan = "Selamat malam klenikers"
}
document.getElementById("waktu").innerHTML = ucapan + "<br>" + hari[d.getDay()] + ", " + d.getDate() + " " + bulan[d.getMonth()] + " " + d.getFullYear() + " Pukul " + d.getHours() + ":" + d.getMinutes();
