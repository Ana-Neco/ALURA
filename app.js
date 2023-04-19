

function Criptografar() 
{ 

    var texto = document.getElementById("area").value;
    var localtexto = document.getElementById("localtexto");

    if(texto != "")
    {
        var cripto = texto.replace(/e/g,'enter').replace(/i/g,'imes').replace(/a/g,'ai').replace(/o/g,'ober').replace(/u/g,'ufat');

        localtexto.innerHTML = cripto;

        var bloco = document.getElementsByClassName("bloco");
        for(i = 0; i < bloco.length; i++)
        {
            bloco[i].style.display = "none";
        }
    
        document.getElementById("format").style.justifyContent = 'space-between';
       
        document.getElementById("copiar").style.display = 'block';
    
        localtexto.style.display = 'block';
        localtexto.style.overflowY='scroll';
    }

}

function Descriptografar()
{
    
    var texto = document.getElementById("area").value;
    var localtexto = document.getElementById("localtexto");

    if(texto != "")
    {
        var cripto = texto.replace(/imes/g,'i').replace(/enter/g,'e').replace(/ai/g,'a').replace(/ober/g,'o').replace(/ufat/g,'u');

        localtexto.innerHTML = cripto;

        var bloco = document.getElementsByClassName("bloco");
        for(i = 0; i < bloco.length; i++)
        {
            bloco[i].style.display = "none";
        }
    
        document.getElementById("format").style.justifyContent = 'space-between';
       
        document.getElementById("copiar").style.display = 'block';
    
        localtexto.style.display = 'block';
        localtexto.style.overflowY='scroll';
    }
}

function Copia() 
{  
    var localtexto = document.querySelector("#localtexto");
    window.navigator.clipboard.writeText(localtexto.textContent);
}







