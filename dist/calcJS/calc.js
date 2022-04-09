var themeOne = document.querySelector(".btn-1");
var themeTwo = document.querySelector(".btn-2");
var themeThree = document.querySelector(".btn-3");
var calBody = document.querySelector(".main");
var result = document.getElementById("number");
var calcKeys = Array.from(document.getElementsByClassName("calc-button"));


function addTheme(calcbody, current, className, prevClassName){
    current.addEventListener("click", ()=>{
        calBody.classList.add(className)
        calBody.classList.remove(prevClassName)
    })   
}

themeOne.addEventListener("click", function(){
    calBody.classList.remove("theme-one")
    calBody.classList.remove("theme-two")
})

addTheme(calBody, themeThree, "theme-two", "theme-one")
addTheme(calBody, themeTwo, "theme-one", "theme-two")


function calcEval(calcResult){
    return Function(`return ${calcResult}`)();
}


calcKeys.map((calcKey) =>{
    calcKey.addEventListener('click', (e) =>{
        switch(e.target.textContent){
            case "RESET":
                result.value = ""
                break;
            case "=":
                if (result.value != ''){

                    try{
                        result.value = parseFloat(calcEval(result.value))
                    
                    }
                    catch{
                        result.value = "Syntax Error"
                    }
                }
                else{
                    result.value = ""
                }

                break;
            case "DEL":
                if (result.value){
                    result.value = result.value.slice(0, -1)
                    
                }
                break;
            
            default:
                result.value += calcKey.innerText;
                
        }
    })
})

