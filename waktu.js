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
    ucapan = "Selamat Pagi Klenikers!!!"
} else if (waktu >= 10 && waktu < 17) {
    ucapan = "Selamat Siang Klenikers!!!"
} else if (waktu >= 17 && waktu < 21) {
    ucapan = "Selamat Sore Klenikers!!!"
} else {
    ucapan = "Selamat Malam Klenikers!!!"
}
document.getElementById("waktu").innerHTML = ucapan + " " + hari[d.getDay()] + ", " + d.getDate() + " " + bulan[d.getMonth()] + " " + d.getFullYear() + " Pukul " + d.getHours() + ":" + d.getMinutes();
