//your JS code here. If required.
const textInput = document.getElementById('text');
const delayInput = document.getElementById('delay');
const btn = document.getElementById('btn');
const output = document.getElementById('output');

//create an asyn fnc to handle the delay 
async function handleSubmit(e){
	e.preventDefault();
	const text = textInput.value;
	const delay = parseInt(delayInput.value);
	
	await delayFunction(delay);

	output.innerText = text;
}

    const delayFunction =(ms) => new promise((resolve)=>setTimeout(resolve,ms));
 btn.addEventListener('click',handleSubmit);















