function fun1() {
   let e = document.getElementById("year").value;
   
   if (e % 4 === 0) {
      var c = "it is a leap year"
      console.log(c);
      document.getElementById("p").innerHTML=c;
   }
   else {
      var d = "it is not a leap year"
      console.log(d)
      document.getElementById("p").innerHTML=d;
   }
}





