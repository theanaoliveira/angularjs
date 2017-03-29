var teste = 'Olá Ana banana :)';

function minhaFunc(x,y){
    return x+y;
}

//ES 6 
let num = 2;
const pi = 3.14;

let numeros = [1,2,3];

numeros.map(function(v){ 
    return v+2;
});

//ES 6 
numeros.map(v=> v * 2);


//Tipagem de variavel (string)
let text: string = 'Ana';

//Deixar variavel assumir qualquer valor
let text2: any = 1;
text2 = 'Ana';