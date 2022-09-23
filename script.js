function MostrarOcultarSenha(){
var senha=document.getElementById("senha");
if(senha.type=="senha"){
    senha.type="text";
}else{
    senha.type="senha";
}
