const userName = prompt ('Insert your name');
const userSurName= prompt('Insert your surname');
const userFavoariteColor = prompt('Insert your favorite color');
const randomPassword = 
    `
        ${userName}${userSurName}${userFavoariteColor}${21}
    `
;

document.getElementById('random-password').innerHTML = randomPassword;