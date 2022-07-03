var p=0,k=0
function funk1(){
if(p%2==1){
    document.querySelectorAll('.tanlov')[0].style.display="none";
}
else document.querySelectorAll('.tanlov')[0].style.display="block";
p++;
}
function funk2(){
    if(k%2==1){
        document.querySelectorAll('#sinf')[0].style.display="none";
    }
    else document.querySelectorAll('#sinf')[0].style.display="block";
    k++;
}
function funk3(){
    window.location.assign("sertifikat.html")
}