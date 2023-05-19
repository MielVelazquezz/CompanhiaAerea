var readline= require('readline-sync');
var encerrar = 0
var comprar = 1
var consultar = 2
var mapa = 3
var emitir = 4


while(informacao != 0){
    console.log('')
    console.log('+--------Passagens aérias--------+')
    console.log('|    0 - Encerrar o programa     |')
    console.log('|    1 - Comprar passagem        |')
    console.log('|    2 - Consultar voos          |')
    console.log('|    3 - Emitir ticket           |')
    console.log('|    4 - Comprar passagem        |')
    console.log('+--------------------------------+')

    var informacao = readline.question("De qual informacao precisa? ")

    if(informacao == 1){
        console.log('')
        console.log('Você está em --> Comprar passagem')
    
        var nome = readline.question('Informe seu nome:  '); 
        var sobrenome = readline.question('Informe seu sobrenome: '); 
        var idade = readline.question('Informe sua idade: ');
        while(idade < 18){
            idade = readline.question("Voce nao possui idade o suficiente, tente novamente.")
        }
        var assento = readline.question('Informe seu assento: ');
        var origem = readline.question('Informe sua origem: ');
        var destino = readline.question('Informe seu destino: ');
        
        console.log('')
        console.log('+--------Resumo da compra--------+')
    
        var cliente = console.log("Cliente: "+nome+" "+sobrenome)
                      console.log("Idade: "+idade)
                      console.log("Assento: "+assento)
                      console.log("Voo: "+origem+" X "+destino)
                      console.log("Total da compra: R$1500,00")                      
    }
    else if(informacao == 2){
        console.log('')
        console.log('+--------Passagens aérias--------+')
        console.log('Você está em --> Consultar voos')
        console.log('')
        console.log('')
        console.log('+-----------------------------------------------+')
        console.log('|         Origem          |        Destino      |')
        console.log('+-------------------------|---------------------+')
        console.log('|  Presidente Prudente    |        Dublin       |')
        console.log('|  Presidente Prudente    |        Ceará        |')
        console.log('|  Presidente Prudente    |        São Paulo    |')
        console.log('|  Presidente Prudente    |        New York     |')
        console.log('+-----------------------------------------------+')
        console.log('')
        console.log('+-----------------------------------------------+')

    }
    else if(informacao == 3){
        var assentoA = 0
        var assentoB = 0

        console.log('')
        console.log('+--------Passagens aérias--------+')
        console.log("você esta em -> Mapa de Assentos")
        console.log("--------------------------------")
        for(assentoA = 1;assentoA < 13; assentoA ++)
        console.log("A"+assentoA)
       
        for(assentoB = 1; assentoB < 13; assentoB ++)
       
        console.log ("B"+assentoB)

        if(assentoB=assento){
            console.log("+---- O assento "+assento+" está ocupado ----+")
        }
        console.log("+--------------------------------+")
    }
    else if(informacao == 4){
        console.log('')
        console.log('Você está em --> Emitir ticket')
        console.log('*************************************************')
        console.log('*         OBRIGADO POR VIAJAR CONOSCO ;D        *')
        console.log('*                                               *')
        console.log("* Cliente: "+nome+" "+sobrenome+"               *")
        console.log("* Idade: "+idade+"                              *")
        console.log("* Assento: "+assento+"                          *")
        console.log("* Assento/Origem: "+assento+" --> "+origem+"    *")
        console.log('*************************************************')
    }
    else if(informacao == 0){
        console.log('')
        console.log('Finalizado ;)')
        console.log('')
    }
    else{
        console.log('Não reconhecemos este codigo, por favor tente novamente')
    }
}


