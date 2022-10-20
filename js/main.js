
        // function openNav() {
        //     document.getElementById("mySidenav").style.width = "300px";
        //     document.getElementById("main").style.marginLeft = "300px";
        // }

        // function closeNav() {
        //     document.getElementById("mySidenav").style.width = "0";
        //     document.getElementById("main").style.marginLeft = "0" ;
        // }

// var a;
//   function opencloseNav()
//   {
//     let y = document.getElementById("mySidenav");
    
//     if (y.style.display === "none") {
//             y.style.display = "inline-block";
          

//         }
//         else {
//             y.style.display = " inline-table";
         
//         }
//     }
 document.getElementById("btn1").addEventListener("click",function(){


    var a =document.getElementById("mylogout");
    if (a.style.display=="none")
    {
        a.style.display="block"
    }else{
        a.style.display="none"
    }
})
document.getElementById("btn2").addEventListener("click",function(){


    var b =document.getElementById("myhome");
    if (b.style.display=="none")
    {
        b.style.display="block"
    }else{
        b.style.display="none"    }
})

// window.onload=function(){
//     window.addEventListener('scroll' ,function(e) {


//         if(window.pageXOffset>100){
//             document.getElementById("mylogout").classList.add('is-scrolling');
//         }else{
//             document.getElementById("mylogout").classList.remove('is-scrolling');
//         }
//     });
// }



var reswidth= screen.width;
if(reswidth<1500){
    document.getElementById('mylogout')
}else{
    (reswidth<1500)
}




