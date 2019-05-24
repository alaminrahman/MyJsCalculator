function store(value){
    
    form.panel.value = form.panel.value + value;
    
}
function ce(){
    form.panel.value = "";
}

function back(){
    var value = form.panel.value;
    
    form.panel.value = value.substr(0,value.length-1);
}

function calculator(cal){
    form.panel.value = eval(cal);
}
