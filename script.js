const weight = document.getElementById("weight")
const height = document.getElementById("height")

function calculateBMI(){      //Calculation
    const heightM = height.value / 100
    const bmi = weight.value / (heightM **2)
    const bmiNew = parseFloat(bmi.toFixed(2));
    console.log(bmiNew);

    if(weight.value == 0 && height.value == 0){
        alert("Enter a valid Weight and Height")
        return;
    }
    if(weight.value == 0 && height.value !== 0){
        alert("Enter a valid Weight")
        return;
    }
    if(weight.value !== 0 && height.value == 0){
        alert("Enter a valid Height")
        return;
    }
    
    if(weight.value !== 0 && height.value !== 0){       // Displaying Result

        resulth.textContent = "Your BMI Score :"

        if(bmiNew<18.5){
            result.innerHTML = `<h1 style="color: var(--underweight);" id="result" class="mt-3">${bmiNew}</h1>`
            resulttag.innerHTML = `<p style="color: var(--underweight);" id="resulttag">You are Underweight</p>`
        }
        else if(bmiNew>18.5 && bmiNew<25){
            result.innerHTML = `<h1 style="color: var(--healthy);" id="result" class="mt-3">${bmiNew}</h1>`
            resulttag.innerHTML = `<p style="color: var(--healthy);" id="resulttag">You are Healthy</p>`
        }
        else if(bmiNew>25 && bmiNew<30){
            result.innerHTML = `<h1 style="color: var(--overweight);" id="result" class="mt-3">${bmiNew}</h1>`
            resulttag.innerHTML = `<p style="color: var(--overweight);" id="resulttag">You are Overweight</p>`
        }
        else if(bmiNew>=30){
            result.innerHTML = `<h1 style="color: var(--obese);" id="result" class="mt-3">${bmiNew}</h1>`
            resulttag.innerHTML = `<p style="color: var(--obese);" id="resulttag">You are Obese</p>`
        }
    }

}

 
function resetCalc(){  //Reset
window.location.reload()
}