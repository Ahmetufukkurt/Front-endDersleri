//? JAVASCRİPT YÜKSEK SEVİYELİ
//? ÇOK PARADİGMALI
//? OBJE TABANLI
//? PROGRAMLAMA DİLİDİR

// console.log("Hello World!");

//? VERİ TİPLERİ İKİYE AYRILIR
//? BİRİNCİ OBJE TABANLI
//? PRİMİTİVE YANİ İLKEL

//? İLKEL VERİLER
//*Number==> sayıları tanımlarken kullanılırz.
//*String ==> string bizim textlerimizdir yazılarımız
//*Boolean ==> true or false değeri alır karar verirken kullanılırız

//*undefined ==> tanımlanmamış (boş anlamına gelir)
//*null ==> boş demek
//*symbol es2015 ==> symbol eski bir veri tipidir kullanmayız sadece bilgi için.
//*bigInt ==> buda 10 üzeri 10 gibi 10 üzeri 15 gibi büyük sayılar için kullandığımız.

//? number veri tipi
//* değişkeni atadıktan sonra tırnak kullanılmaz

// let age = 21;
// console.log(age);

//? String veri tipi
//* değişkene atarken "tırnak içersinde ifade edilir"

// const myName = "Ahmet Ufuk";
// console.log(myName);

//! console.log(içersiine değişken atarken sadece değişken ismi yazılır)
//! Değişken ismi verirken camelCase Kullanılır.

//? camelCase=birden fazla kelime içeren değişkenleri
//? ikinci kelimesinden itibaren büyük harfle yazdığımız
//? bir adlanlandırma şeklidir

// const myFullName = "Ahmet ufuk kurt";
// console.log(myFullName);
// //? Const ve let , var

// const myCountry = "Adana";
// let myJob = "student";

// console.log(myCountry);
// console.log(myJob);
// console.log(myCountry, myJob);

// console.log(typeof "ahmet");
// console.log(23);

//? BASİC OPERATOR
//* math
//* +,-,*,/,**,++,--
// console.log(4 + 2);
// console.log(4 - 2);
// console.log(4 / 2);
// console.log(4 * 2);
// console.log(4 ** 2); //
//*    **  ilk sayı taban ikinci sayı kuvveti gelecek şekilde hesaplanır.

// let x = 5;
// x++; // mevcut değeri bir arttırır
// x--; // mevcut değeri bir azaltır.
// x += 10; // mevcut değer verilen sayı ile toplar
// x -= 10; // mevut değeri verilen sayı ile çıkartır.
// console.log(x);

// const name = "Ahmet Ufuk";
// const surname = "Kurt";
// let age = 21;
// console.log(name + " " + surname + " " + age);

//! + işareti kullanılırken type coercion yani tip zorlaması yapılır ve genelde string tipine dönüştürülür.
// console.log("21" + 21);
//! diğer matematik operatorleri ise type coercion number üzerinden ilerler yani string bir fiadeyi numbera dönüştürür ve işleme sokar.
// console.log("21" - 21);

// console.log("23" + 2 - 22);
// console.log(23 + "12" - 12 + "2");
// console.log("10" - 4 - 3 - 2 + "1");

//? comparasion operator
//* <,>,<=,>=,==,===
//! bunların sonuçlar true ya da false olarak döner
//? if else statement

//* if(durum){
//*   durum true ise çalıştıralcak kısım
//* }else{
//*  durum false ise çalıştırılacak kısım
//* }

const aliAge = 21;
const ecemAge = 19;
const edevAge = 20;
const efeAge = 15;

const aliBudge = 3000;
const ecemBudge = 1000;
const edevBudge = 10000;
const efeBudge = 0;

if (aliAge > 18) {
  console.log("Ali yusuf ehliyet alabilir");
}
if (ecemAge > 18) {
  console.log("ecem ehliyet alabilir");
}

if (edevAge > 18) {
  console.log("edev ehliyet alabilir");
}
if (efeAge > 18) {
  console.log("efe ehliyet alabilir");
} else {
  console.log(18 - efeAge + "yıl sonra ehliyet alabilir");
}

let day = "monday";

if (day == "monday") {
  console.log("haftanın ilk günü");
}

//* template literals => ` ${değişken ismi} artık istediğimiz gibi yazabiliriz `
const first = "Ali";
const second = "ecem";
const third = "edev";
console.log(first + second + third + "Benim öğrencilerimdir");
console.log(`${first} ${second} ${third} benim öğrencilerimdir`);
console.log(`Ahmet
ufuk
kurt`);
