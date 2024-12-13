const prompt = require('prompt-sync')();
 const operateur = prompt("Entrez un operateur (+, -, *, /, ^, >,!) : ");

        switch (operateur) {
            
            case '+':
                 num1 = prompt("Entrez un nombre : ");
                 num2 = prompt("Entrez un autre nombre : ");
                 bom=parseFloat(num1)+parseFloat(num2)
                 console.log(`resultat :${bom} `);
                break;  
                default:
                    console.log("Opérateur invalide !");
                }