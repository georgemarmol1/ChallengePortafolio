const btnform = document.querySelector(".formcontato__botao");
const inputs = document.querySelectorAll(".formcontato__form");

const valiciones = {
    nombre:/^[a-zA]{1,50}$/,
    email:/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/,
    asunto:/^[a-zA]{1,50}$/,
    mensaje:/^[a-zA]{1,300}$/
}

const campos = {
    nombre:false, 
    email:false, 
    asunto:false, 
    mensaje:false,  
}

const validarFormulario = (e) =>{
    //el e.target.name captura todos los campos de tipo name del formulario
       switch (e.target.name){
        case "nombre":
            if(valiciones.nombre.test(e.target.value)){
                document.getElementById("idnombre").classList.remove('validationName');
                document.getElementById("pname").classList.add('ocultar');
                campos.nombre = true;
            }else{
                document.getElementById("idnombre").classList.add('validationName');
                document.getElementById("pname").classList.remove('ocultar');
                document.getElementById("pname").classList.add('pname');
                campos.nombre = false;
            }
        break;
        case "email":
            if(valiciones.email.test(e.target.value)){
                document.getElementById("idemail").classList.remove('validationEmail');
                document.getElementById("pemail").classList.add('ocultar');
                campos.email = true;
            }else{
                document.getElementById("idemail").classList.add('validationEmail');
                document.getElementById("pemail").classList.remove('ocultar');
                document.getElementById("pemail").classList.add('pemail');
                campos.email = false;
            }
        break;
        case "asunto":
            if(valiciones.asunto.test(e.target.value)){
                document.getElementById("idasunto").classList.remove('validationAsunto');
                document.getElementById("pasunto").classList.add('ocultar');
                campos.asunto = true;
            }else{
                document.getElementById("idasunto").classList.add('validationAsunto');
                document.getElementById("pasunto").classList.remove('ocultar');
                document.getElementById("pasunto").classList.add('pasunto');
                campos.asunto = false;
            }
            
        break;
        case "mensaje":
            if(valiciones.mensaje.test(e.target.value)){
                document.getElementById("idmensaje").classList.remove('validationArea');
                document.getElementById("pmensaje").classList.add('ocultar');
                campos.mensaje = true;
            }else{
                document.getElementById("idmensaje").classList.add('validationArea');
                document.getElementById("pmensaje").classList.remove('ocultar');
                document.getElementById("pmensaje").classList.add('pmensaje');
                campos.mensaje = false;
            }
            
        break;
       }
       if (campos.nombre && campos.email && campos.asunto && campos.mensaje ){
            btnform.classList.remove('desable');
            btnform.disabled = false;
    }else{
        btnform.disabled = true;
        btnform.classList.add('desable'); 
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup',validarFormulario);
    input.addEventListener('focusout',validarFormulario);
});

btnform.addEventListener('click', function(e){
    e.preventDefault();
    if (campos.nombre && campos.email && campos.asunto && campos.mensaje ){
        alert("Todos los campos estan validados");
}

})
