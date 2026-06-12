function volume_sphere() {
    //Write your code 
	event.preventDefault();
    const radiusInput = document.getElementById("radius");
	const radius =  parseFloat(radiusInput.value);
	
	if(isNaN(radius) || radius < 0){
		document.getElementById('volume').value = 'NaN';
        return;	
	}
	else{
	const Volume = 4/3 * Math.PI * Math.pow(radius,3);
	document.getElementById('volume').value = Volume.toFixed(4);
	}
} 


document.getElementById('MyForm').onsubmit = volume_sphere;
