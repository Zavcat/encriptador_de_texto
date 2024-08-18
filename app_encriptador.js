const textoUsuario = document.getElementById("texto_a_encriptar");
const tU_Desencriptado = document.getElementById("texto_a_desencriptar");

function encriptarTexto(textoEncriptar){
    let palabrasClave = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoEncriptar = textoEncriptar.toLowerCase();

    for(let i = 0 ; i < palabrasClave.length; i++){
        if(textoEncriptar.includes(palabrasClave[i][0])){
            textoEncriptar = textoEncriptar.replaceAll(palabrasClave[i][0],palabrasClave[i][1]); 
        }
    }
    return textoEncriptar;
}

function botonEncriptar(){
    const textoEncriptado = encriptarTexto(textoUsuario.value);
    tU_Desencriptado.value = textoEncriptado;
    textoUsuario.value ="";
    document.getElementById("Imagen_Alura").setAttribute("hidden",true);
    document.getElementById("Texto_Imagen_Alura").style.display = "none";
    document.getElementById("cuadro_Encriptado").style.display = "block";
    document.getElementById("boton_copiado").style.display = "block";



}

function desencriptarTexto(textoDesencriptado){
    let palabrasClave = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    textoDesencriptado = textoDesencriptado.toLowerCase();

    for(let i = 0; i < palabrasClave.length;i++){
        if(textoDesencriptado.includes(palabrasClave[i][1])){
            textoDesencriptado = textoDesencriptado.replaceAll(palabrasClave[i][1],palabrasClave[i][0]);
        }
    }
    return textoDesencriptado;
}

function botonDesencriptar(){
    const textoDesencriptado = desencriptarTexto(textoUsuario.value);
    tU_Desencriptado.value = textoDesencriptado;
    textoUsuario.value = "";
    document.getElementById("Imagen_Alura").setAttribute("hidden",true);
    document.getElementById("Texto_Imagen_Alura").style.display = "none";
    document.getElementById("cuadro_Encriptado").style.display = "block";
    document.getElementById("boton_copiado").style.display = "block";
}

function copiartexto(){
    let textocopiado = document.getElementById("texto_a_desencriptar");
    navigator.clipboard.writeText(textocopiado.value);
}