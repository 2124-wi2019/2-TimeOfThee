/*
Timothy Washington
washington_a03b.js
INFO 2124 - Javascript I
Thoendel
Creation date: Dec 22, 2019
*/
//comment Legend: {c=creates variable, s=sets a variable to a value}
//Note: Copy Paste doesn't work through virtual machine. Unless you're expecting us to open the assignment on this itself on this browser (Which, mind you, is a laggy mess), we find workarounds that take more steps or simply type the whole thing out anyways.
const firstName = 'Timothy', lastName = 'Washington', villainFirstName = 'Ambiguous', villainLastName = 'Instructions', companyName = 'Company Inc';//cs
let annualSalary = 100000, laughString = 'zzz', age=20, weight=-83, counterStartValue=5;//cs

let a=`Good evening, ${firstName}. I'm glad to see you could join us.
According to your files, you're ${age} years old. Hehe, that means next
year you'll be ${age+1} years old and if I doubled your age, you'd be
${age*2} years old!

I found your file because your last name, '${lastName.toUpperCase}' was all
capitalized on your folder. This is unusual because our files usually have
last names all lowercase. So I expected to see '${lastName.toLowerCase}', which 
I did not see.

Allow me to introduce myself. My name is ${villainFirstName+' '+villainLastName}.

I'm the chief investigator at ${companyName}. I've been tasked with investigating you 
due to a suspected case of fraud. It appears you embezzled 10% of your annual salary. As you
know, your annual salary is $${annualSalary} and 10% of your annual salary is $${annualSalary/10},
which is a sizeable amount for our company.

I know your password. It was simple, it's just the first, third, and fourth letters of your first name:
${firstName.charAt(0)+' '+firstName.charAt(2)+' '+firstName.charAt(3)}

And the PIN code for your debit card was just the index value of the first, third, and fourth values of your last name:
${lastName.indexOf('Wa')+' '+lastName.indexOf('sh')+' '+lastName.indexOf('hi')}

Hmmm.... sometimes I ask my Google home, "Does my last name begin with 'V'", and Google responds "${villainLastName.startsWith('V')}"
...and then I ask Google home, "Does my last name end with 'n'", and Google responds "${villainLastName.endsWith('n')}"

And sometimes, I ask Google home if my weight is finite, and Google home responds "${Number.isFinite(weight)}", which makes me happy.
...but when I ask if my first name is finite, Google home responds, "${isFinite(villainLastName)}", and this makes me sad.

Anyway, I've talked to much. Now, it's time for action. Somebody set up us the bomb. All your base are belong to us.

Allow me to laugh five times:
${(laughString+"\n").repeat(5)}

**Background voice**
Now counting down:

${count()}
Boom!`//cs
console.log(a);//print

function count(){//countsdown
    var ret="";//cs
    while (counterStartValue>0){//loop until 0
        ret+=counterStartValue+"\n";//adds to ret
        counterStartValue--;//reduce
    }
    return ret;//return
}