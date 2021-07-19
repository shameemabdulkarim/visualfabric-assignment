///<reference types="cypress" />

//import calculateDays from '../../plugins/index.js'

const data= require('../../fixtures/example.json');

describe('BirthdayCalculator API Tests' , function() {


    it ('Verify the calculation of month logic  when unit is provided as month  ' , function() {
        cy.calculateDays(data.firstTestCase.dateOfBirth,data.firstTestCase.unit).then((response) => {
             this.timeLeft= response;
        });
        cy.getNextBirthday(data.firstTestCase.dateOfBirth,data.firstTestCase.unit).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.property('message',`${this.timeLeft} months left`)
        })
    });

    it ('Verify the hour calculation when next day is provided as birth date' ,function() {
        cy.calculateNewDate(1,'add').then((res) => {
            this.dateString =res;
        }).then(() => {
            cy.calculateDays(this.dateString,"hour").then((response) => {
                this.timeLeft=response;
            });
        }).then(() =>{
            cy.getNextBirthday(this.dateString,"hour").then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).has.property('message',`${this.timeLeft} hours left`);  
            });   
        })
    });
        
    it('Verify the error message when incorrect date format is provided in the input', function() {
        cy.getNextBirthday(data.thirdTestCase.dateOfBirth,data.thirdTestCase.unit).then((response) =>{
            expect(response.status).to.eq(200);
            expect(response.body).has.property('message','Please specify dateofbirth in ISO format YYYY-MM-DD')
        })
    });

    it ('Verify the week calculation when unit is provided in weeks' ,function() {
        cy.calculateDays(data.fourthTestCase.dateOfBirth,data.fourthTestCase.unit).then((response) => {
            this.timeLeft=response;
        });
        cy.getNextBirthday(data.fourthTestCase.dateOfBirth,data.fourthTestCase.unit).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.property('message',`${this.timeLeft} weeks left`);  
        })
    });

    it ('Verify the day calculation when 2 weeks duration is provided' ,function() {
        cy.calculateDays(data.fifthTestCase.dateOfBirth,data.fifthTestCase.unit).then((response) => {
            this.timeLeft=response;
        });
        cy.getNextBirthday(data.fifthTestCase.dateOfBirth,data.fifthTestCase.unit).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.property('message',`${this.timeLeft} days left`);  
        })
    });

    it ('Verify the day calculation when birth date is given In September (Note:July and August are having 31 days)' ,function() {
        cy.calculateDays(data.sixthTestCase.dateOfBirth,data.sixthTestCase.unit).then((response) => {
            this.timeLeft=response;
        });
        cy.getNextBirthday(data.sixthTestCase.dateOfBirth,data.sixthTestCase.unit).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).has.property('message',`${this.timeLeft} days left`);  
        })
    });

    it ('Verify the error message when one of the query parameter is not provided' ,function() {
        cy.request({
            method: 'GET',
            url: `https://p9fwi1d77e.execute-api.eu-west-1.amazonaws.com/Prod/next-birthday?dateofbirth=${data.seventhTestCase.dateOfBirth}`,
            headers: {
              'Content-Type': 'application/json'  
            },
            failOnStatusCode:false}).then((response) => {
            expect(response.status).to.eq(400);
            expect(response.body).has.property('message','Please specify both query parameter dateofbirth and unit');  
        })
    });

    it ('Verify the week calculation when 1 year duration is provided with unit as weeks' ,function() {        
        cy.calculateNewDate(1,'subtract').then((res) => {
            this.dateString =res;
        }).then(() => {
            cy.calculateDays(this.dateString,"week").then((response) => {
                this.timeLeft=response;
            });
        }).then(() =>{
            cy.getNextBirthday(this.dateString,"week").then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).has.property('message',`${this.timeLeft} weeks left`);  
            });   
        })
    });

    it ('Verify the days calculation when 1 year duration is provided with unit as days' ,function() {
        cy.calculateNewDate(1,'subtract').then((res) => {
            this.dateString =res;
        }).then(() => {
            cy.calculateDays(this.dateString,"day").then((response) => {
                this.timeLeft=response;
            });
        }).then(() =>{
            cy.getNextBirthday(this.dateString,"day").then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).has.property('message',`${this.timeLeft} days left`);  
            });   
        })
    });

    it ('Verify the hour calculation when 1 year duration is provided with unit as hour' ,function() { 
        cy.calculateNewDate(1,'subtract').then((res) => {
            this.dateString =res;
        }).then(() => {
            cy.calculateDays(this.dateString,"hour").then((response) => {
                this.timeLeft=response;
            });
        }).then(() =>{
            cy.getNextBirthday(this.dateString,"hour").then((response) => {
                expect(response.status).to.eq(200);
                expect(response.body).has.property('message',`${this.timeLeft} hours left`);  
            });   
        }) 
    });
});

