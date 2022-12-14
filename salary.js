basicSalary = prompt("enter your basic salary");
benefits = prompt("enter your benefits ");

basicInput = basicSalary.value;
benefitsInput = benefits.value;
grossSalary = ("basicSalary.value + benefits.value");

console.log(`your gross salary is ${grossSalary}`)

function getPayeefromSalary (grossSalary){
    let Payee = 0;
    if(grossSalary <= 24,000){
        Payee = grossSlary*0.1
    }
    else if (grossSalary <= 24,000 && grossSalary <=32,333){
        Payee = grossSalary*0.25
    }
    else if (grossSalary > 32,333){
        Payee = grossSalary*0.3
    }
    return Payee
}
let Payeerate = getPayeefromSalary(grossSalary)
console.log(`your Payee tax is ${Payeerate}`)
 
function getNHIFdeductions (grossSalary){
 let deduction = 0;
 if (grossSalary <= 5999){
    deduction = 150
}
  else if (grossSalary >= 6000 && grossSalary <= 7999){
    deduction = 300
}
else if (grossSalary >= 8000 && grossSalary <= 11999){
    deduction = 400
}
 else if (grossSalary >= 12000 && grossSalary <= 14999){
    deduction = 500
}
 else if (grossSalary >= 15000 && grossSalary <= 19999){
    deduction = 600
}
 else if (grossSalary >= 20000 && grossSalary <= 24999){
    deduction = 750
}
 else if (grossSalary >= 25000 && grossSalary <= 29999){
    deduction = 850
}
else if ( grossSalary >= 30000 && grossSalary <= 34999){
    deduction = 1000
}
 else if (grossSalary >= 40000 && grossSalary <= 44999){
    deduction = 1100
}
else if ( grossSalary >= 45000 && grossSalary <= 49999){
    deduction = 1200
}
else if(grossSalary >=60000 && grossSalary<=69999){
    deduction = 1300
}
else if(grossSalary >=70000 && grossSalary<=79999){
    deduction = 1400
}
else if(grossSalary >=80,000 && grossSalary<=89,999){
    deduction = 1500
}
else if(grossSalary >=90000 && grossSalary<=99999){
    deduction = 1600
}
else if(grossSalary >=100000){
    deduction = 1700
}
return deduction

}

let NHIFrate = getNHIFdeductions(grossSalary);
console.log(`Your NHIF deduction is ${NHIFrate}`)

function getNSSFdeductions (grossSalary){
    deduction = grossSalary*0.05
    if (grossSalary >= 6000){
        deduction = 300
    }
    return deduction
}
let NSSFdeduction = getNSSFdeductions(grossSalary);
console.log(`Your NSSF deduction is $ {NSSF deduction}`)

function Netsalary(){
    let net = grossSalary -(Payeerate + NSSFdeduction)
    return Netsalary
}
console.log (`Your Net salary is ${Netsalary()}`);