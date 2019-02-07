// var w = ['Andi', 'Seto','Seno']

// var filterNama = w.filter(function(a){
//     return a.includes('S')
// })
// console.log(filterNama)

// var mapNama = w.map(function(val){
//     return val+' Saya'
// })

// console.log(mapNama)

// var orang = [
//     {nama : "Andi", marga: "Hasibuan"},
//     {nama : "Budi", marga: "Sinaga"},
//     {nama : "Caca", marga: "Pasaribu"}
//     ];
//     function namaLengkap(item, index) {
//     var fullname = [item.nama,item.marga].join(" ");
//     return fullname;
//     }
//     function tesMap() {
//     console.log(orang.map(namaLengkap));
//     console.log(orang.map(namaLengkap)[0]);
//     console.log(orang.map(namaLengkap)[1]);
//     console.log(orang.map(namaLengkap)[2]);
//     }
//     tesMap()

// var merk = 'Yamaha';
// var tahun = 2015;
// let mio = {
// merk: merk,
// prod: tahun
// }
// merk = 'Honda'
// tahun = 2016
// let vixion = {
// merk, tahun
// }
// console.log(mio);
// console.log(vixion);

let nama = new Set();
nama.add('Adi').add('Budi').add('Adi');
console.log(nama);
console.log(nama.size);
nama.delete('Adi');
console.log(nama);
console.log(nama.size);
nama.clear();
console.log(nama);
console.log(nama.size);

let buah = [
    'Apel',
    'Duku',
    'Leci'
    ]
    var [ x, y, z ] = buah;
    console.log(x);
    console.log(y);
    console.log(z);