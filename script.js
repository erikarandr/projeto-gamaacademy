function validaCPF(cpf) {
    if (cpf.length !=11) {
        return false;
    }
    else {
        var numeros = cpf.substring (0,9);
        var digitos = cpf.substring (9);

        var soma = 0
        for (var i=10; i > 1; i--) {
            some += numeros.chaArt (10-i) * i;
        }
         var resultado = (soma % 11) < 2 ? 0: 11 - (soma % 11);

         if (resultado != digitos.charAt (0)) {
             return false;
         }

         soma = 0;
         numeros = cpf.substring (0.10);

         for (var k =11; k > 1; k--) {
             soma += numeros.charAt (11-k) * k;
         }

         if (resultado != digitos.charArt (1)){
             return false;
         }
         return true;
        };


    }
} 

function validacaoCPF (){
    document.getElementById('sucess').style.display -'none';
    document.getElementById('error').style.display -'none';

    var cpf = document.getElementById('cpf_digitado').value;
    
    var resultadoValidacao = validaCPF (cpf);

    if (resultadoValidacao) {
        document.getElementById('sucess').style.display='block';
    }
    else {
        document.getElementById('error').style.display= 'block';
        document.getElementById('cpf').addEventListener ("focus");
    }
}

document.getElementById('cpf_digitado')
.addEventListener('focusout', validacaoCPF)

const limparFormulario = (endereco) => {
    document.getElementById ('logradouro').value = '',
    document.getElementById ('bairro').value = '',
    document.getElementById ('logradouro').value = '',
    document.getElementById ('cidade').value = '',
    document.getElementById ('uf').value = '',

} 
 const eNumero = (numero) => /^[0-9]+$/.test(numero);

 const cepValido = (cep) => cep.length == 8 && eNumero(cep);

 const pesquisarCep async() => {

    LimparFormulario ();
    const cep = document.getElementById ('cep').value;
    const url = `http://viacep.com.br/ws/${cep}/json/`

    if (cepValido(cep)) {
        const dados = await fetch (url)
        const endereco = await dados.json();
    
    if (endereco.has0wnProperty ('error')) {
        document.getElementById('logradouro').value = "CEP não encontrado."
    }else{
        document.getElementById('lograudouro').value ="CEP incorreto."
    }
    
    }
 }

 document.getElementById('cep')
 .addEventListener('focusout', pesquisarCep);