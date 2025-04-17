const form = document.getElementById('form-one'); //transf. o formulário em constante
const numberA = document.getElementById('number-a'); //transf. o formulário em constante
const numberB = document.getElementById('number-b'); //transf. o formulário em constante
let formEValido = false; // cria uma variável para validar o formulário


function maiorQue(numeroA, numeroB){
	return numeroB > numeroA
}// função para verificar se B é maior que A

form.addEventListener('submit', function(e){
	e.preventDefault(); //função que adiciona evento que ao clicar no botão a página não recarregue

const successMessage = `${numberB.value} <b>é</b> maior que ${numberA.value}` //constante com mensagem de sucesso
const failMessage = `${numberB.value} <b>não é</b> maior que ${numberA.value}` //constante com mensagem de falha

const containerSuccessMessage = document.querySelector('.success-message'); // transforma <p> em constante
const containerFailMessage = document.querySelector('.fail-message'); // transforma <p> em constante

formEValido = maiorQue(Number(numberA.value), Number(numberB.value));//atribui a o valor à função (maiorQue) e o valor da função a constante 

if (formEValido){
	containerSuccessMessage.innerHTML = successMessage; //adc a mensagem da constante ao HTML
	containerSuccessMessage.style.display ='block'; //adc o display block ao css


	containerFailMessage.style.display = 'none'; // Esconde mensagem de erro
	numberB.style.border = '1px solid green';  //adc a borda green
	numberA.style.border = '1px solid rgb(228, 26, 127)'; // reseta visual
	

}else{

	containerFailMessage.innerHTML = failMessage; //adc a mensagem da constante ao HTML
	containerFailMessage.style.display = 'block'; //adc o display block ao css

	containerSuccessMessage.style.display = 'none'; // Esconde mensagem de sucesso
	numberA.style.border = '1px solid red'; //adc a borda red
	numberB.style.border = '1px solid rgb(228, 26, 127)'; // reset visual

	
}
})

