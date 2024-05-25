//define function for displaying numbers and operators

function display(num){
    result.value += num
     
}

function allClear(){
    result.value = " "

}
function calc(){
    result.value = eval(result.value)
}
function del(){
     result.value= result.value.slice(0,-1)
}
