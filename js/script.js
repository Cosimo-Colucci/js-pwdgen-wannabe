const userName = prompt ('Insert your name');
const userSurName= prompt('Insert your surname');
const userFavoariteColor = prompt('Insert your favorite color');
const userNumber = 21;
const randomPassword = 

    `
        ${userName}${userSurName}${userFavoariteColor}${userNumber+ 10}
    `
;

document.getElementById('random-password').innerHTML = randomPassword;