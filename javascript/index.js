console.log("AHMET UFUK KURT");
//? JAVASCRİPT NEDİR
//* JAVASCRİPT
//* YÜKSEK LEVEL
//* OBJE TABANLI
//* ÇOK PARADİGMALI
//* PROGRAMLAMA DİLİR.

//* HTML = İSİM İSE
//* CSS= SIFATI
//* JS= FİLLDİR
//* KIRMIZI ARABA GİDİYOR.

//? değişken atama tanımlaa
//* let değişken ismi = atamak istediğim değişken
//? değişken isimleri ayarlamak
//* camelCase kullanılır.
//* değişkene uygun bir isim seçilir

//* veri tipleri
//* 1 obje
//* primitive(ilkel)

//* primitive(ilkel) değişkenler
//* 1-) string => metinler için kullanılır arada bir sayılar için
//* 2-) number=> sayılar için kullanılır
//* 3-) boolean=> true ve false değerlerini alır => karar verirken kullanılır
//* 4-)undefined=> değer almamış boş değişkenler
//* 5-) null=> boş anlamına
//* 6-) symbol=> eski bir değişkendir kullanmayız
//* 7-) bigIng=> 10üzeri 15 gibi büyük sayıalr için kullanılır.

//* string
//* stringler tanımlarınken tırnak içine yazılır.
// let mySchool = "Yalova Üniversitesi";
//* değişkenleri tırnassık bir şekilde console içine eklenerek değişkene atadığımız veriyi consolda inceleebilriz
// console.log(mySchool);

//* number
//* numberları tanımlarken tırnak kullanma ihtiyacımız yoktur.
//* eğer tırnak kullanılırsak yazdığımız değişken
//* sayı bile olsa sanki bir stringmiş gibi kullanılır

// let age = 21;
// let myFatherAge = "50";
// console.log(age);
// console.log(myFatherAge);

// let showPassword = true;
// let hidePassword = false;

//? AND OPERATORÜ   &
//* VE ANLAMINA İKİ KOŞULUNDA SAĞLMASIN DURUMNDA ÇALIŞIR

//* A DURUMU B DURUMU
//* DURUMLARIN İKİSİDE SAĞLANIRSA BANA TRUE VERİR

//? OR OPERATÖRÜ ||

let person = "eslem";
let person2 = "karin";

//* A DURUMU B DURUMU
//* İKİ DURUMDAN İKİSİNDEN BİR GERÇEKLEŞTİĞİ TRUE DÖNER

//? NOT OPERATÖRÜ !
// let ufukVision = true;
// let ufukHasDrivingLicence = true;

//? MATEMATİK OPERATÖRLER
//* ,>, < ,>= ,<= ,   eşitlik =>  == , ===
// let myAge = "19";
// console.log(myAge === 19);
// let myBudge = 3200;
//* javascripte bir değişken başka bir değişken ya da değer eşit mi kontrol ederken iki = kullanılır (==)
//! not : bir eşittir atama için kullanılır.

//*let const
//* let değiştirebilien değerler
//* const ise değişmez değerler için
// const myCounter = "turkey";

//*
//* ülkenizi tanımayın konsola yazdırın.
//* ülkenizin konuştuğu dil
//* isim soy isim yaş meslek
//* ülkenizin nüfusu
//* ülkeniz adamı
//* ülkeniz hangi kıtada
//* konsolda yazılacak

// console.log(myAge > 18);
//* yukarıda ki örnek gibi bütün operatörleri ve değişkenleri kullanarak true false çıktısı
// const myCountry = "turkey";
//* artı olarak yukarıda verdiğim & || ve ! operatörünü kullanmaya çalışın
//* yaşı 15 olup 4000 tlsi olan biri yaşının 18 i geçip parasın en az 3000 tl olması gerken bir ülkede ehliyet alabilir mi
//* ufuğun gözleri iyi görmüyor ama ehliyeti var akşam araba sürebilir mi ?

//? matematik operatörleri
//* + - * / **  ++ -- == ===

console.log(4 + 2);
console.log(4 - 2);
console.log(4 * 2);
console.log(4 / 2);
console.log(4 ** 2); // birinci değeri tabana ikinici değeri üssü olarak alır ve işleme sokar
// 4**3=4*4*4
//3**3=3*3*3
//2**3=2*2*2
console.log(4 == "4"); //? tip taraması yapmaz
console.log(4 === "4"); //?tip taraması yapar
let x = 5;
x++; // verilen değişken değerini bir arttırır.
console.log(x);
let y = 5;
y--; // verilen değişken değerini bir azaltır.
console.log(y);

//? comparasion operatörlerimiz var
//* <,>,<=,>=

//? if else statement

//* if(){
//*  durum true olursa
//*}else{
//*  durum false olursa
//* }

let nisaAge = 19;
const motorEhliyetYası = 21;
const yetiskinlikYası = 18;

if (nisaAge > motorEhliyetYası) {
  console.log("Nisa ehliyet alabilir");
} else {
  console.log("Nisa ehliyet alamaz");
}
if (nisaAge > yetiskinlikYası) {
  console.log("nisa yetişkindir");
} else {
  console.log("nisa yetişkin değildir");
}

let karinParası = 1000;
const ayakkabı = 700;
const tshirt = 500;
const pantolon = 400;

if (karinParası > pantolon + tshirt) {
  console.log("Karin istediğini alabilir");
} else {
  console.log("karin'in biraz daha paraya ihtiyacı var");
}

let eslemVize = 50; //30
let elsemPot = 60; //30
let eslemfinal = 61; //40

let eslemTotalScore =
  (eslemVize * 30) / 100 + (elsemPot * 30) / 100 + (eslemfinal * 40) / 100;
console.log(eslemTotalScore);

if (eslemTotalScore >= 60) {
  console.log("eslem b1 kurunu başarı ile tamamladı");
} else {
  console.log("repeat b1 e hoşgeldin eslem");
}
//? +
const firstName = "Ahmet Ufuk";
const lastName = "Kurt";
let age = 21;
let ulkem = "türkiye";

console.log(
  "Ben" +
    " " +
    firstName +
    " " +
    lastName +
    age +
    "yaşındayım" +
    ulkem +
    "'de yaşıyorum"
);
console.log("93" + 2);
console.log("93" - 2);
console.log("10" - 4 - 3 - 2 + "1");
//! işlem önceliği kuralları burada da geçerli (-nisa)

//?template literals

console.log(
  `Ben ${firstName} ${lastName} ${age} yaşındayım ${ulkem}'de yaşıyorum`
);
