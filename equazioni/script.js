// TODO scrivi lo script
const inputA=document.getElementById("a");
const inputB=document.getElementById("b");
const inputC=document.getElementById("c");

const a=parseFloat(inputA.value);
const b=parseFloat(inputB.value);
const c=parseFloat(inputC.value);
const btnCalcola=document.getElementById("btn-calcola");

const soluzione1=document.getElementById("soluzione1");
const soluzione2=document.getElementById("soluzione2");

function CalcoloDiscriminante(){
    let risultato=(b*b)-4*a*c;
    return risultato;
}

function Calcolo2Risultati(){
    let risultato1=(-b+Math.sqrt(CalcoloDiscriminante()))/Math.pow(a,2);
    let risultato2=(-b-Math.sqrt(CalcoloDiscriminante()))/Math.pow(a,2);

    soluzione1.textContent = risultato1;
    soluzione2.textContent = risultato2;
}

function Calcolo1Risultato(){
    let risultato1=-b/Math.pow(a,2);
    soluzione1.textContent=risultato1;

}

function Calcolo(){
    if (CalcoloDiscriminante()>0){
        Calcolo2Risultati();
    }else{
        if(CalcoloDiscriminante<0){
            soluzione1.textContent="Impossibile";
        }else{
            Calcolo1Risultato();
        }
    }
}


btnCalcola.addEventListener("click",Calcolo);

