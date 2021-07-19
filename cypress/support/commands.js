// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
const moment =require('moment');
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
    Cypress.Commands.add('calculateDays',(dateOfBirth,unit) => {
        const birthdate = dateOfBirth;
        const today = moment().format('YYYY-MM-DD');
        const years = moment().diff(birthdate, 'years');
        const adjustToday = birthdate.substring(5) === today.substring(5) || (birthdate.substring(5,7) === today.substring(5,7) && birthdate.substring(8,10) > today.substring(8,10)) ? 0 : 1;
        const nextBirthday = moment(birthdate).add(years + adjustToday, 'years');
        const daysUntilBirthday = nextBirthday.diff(today, 'days');
        const hoursUntilBirthday=nextBirthday.diff(today,'hours');
        const monthsUntilBirthday=nextBirthday.diff(today,'months');
        const weeksUntillBirthday=nextBirthday.diff(today,'weeks');
        switch(unit) {
            case 'day':
                return daysUntilBirthday;
                break;
            case 'month':
                return monthsUntilBirthday;
                break;
            case 'hour':
                return hoursUntilBirthday;
                break;
            case 'week':
                return weeksUntillBirthday;
                break;
        }

    })

    Cypress.Commands.add('getNextBirthday',(dateofBirth,unit) => {
        cy.request({
            method: 'GET',
            url: `https://p9fwi1d77e.execute-api.eu-west-1.amazonaws.com/Prod/next-birthday?dateofbirth=${dateofBirth}&unit=${unit}`,
            headers: {
              'Content-Type': 'application/json'  
            },
            failOnStatusCode:false})
    })

    Cypress.Commands.add('calculateNewDate',(days,action) => {
        if (action=='add'){
            let date = new Date();
            date.setDate(date.getDate()+days);
            let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                                .toISOString()
                                .split("T")[0];
            return dateString;
        }else if (action=='subtract') {
            let date = new Date();
            date.setDate(date.getDate()-days);
            let dateString = new Date(date.getTime() - (date.getTimezoneOffset() * 60000 ))
                                .toISOString()
                                .split("T")[0];
            return dateString;
        }
       

    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
