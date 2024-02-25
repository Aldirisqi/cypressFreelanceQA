require('cypress-xpath');
export class formPage{
    
    titleForm(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[2]/div[1]/span[1]')
        .should("have.text","Review our product")
    }
    question1(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/div[1]/div[1]/span[1]/span[1]/span[2]')
        .should("have.text","Full name");
    }
    answer1(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/span[1]/input[1]')
        .type("Aldirisqiriadi");
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[1]/div[2]/div[1]/span[1]/input[1]')
        .should("have.value", "Aldirisqiriadi");
    }
    question2(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[2]/div[1]/div[1]/span[1]/span[1]/span[2]')
        .should("have.text","Phone Number");
    }
    answer2(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/span[1]/input[1]')
        .type("082214195576");
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[2]/div[2]/div[1]/span[1]/input[1]')
        .should("have.value", "082214195576");
    }
    question3(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[3]/div[1]/div[1]/span[1]/span[1]/span[2]/span[1]')
        .should("have.text","Do you think your product or service is affordable or expensive?");
    }
    answer3(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]/div[1]/div[1]/div[1]/label[1]/span[1]/input[1]')
        .should("have.value","Affordable").click();
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]/div[1]/div[2]/div[1]/label[1]/span[1]/input[1]')
        .should("have.value","Expensive").click();
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]/div[2]/label[1]/div[1]/span[1]/input[1]')
        .type("It's depend");
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[3]/div[2]/div[1]/div[2]/label[1]/div[1]/span[1]/input[1]')
        .should("have.value","It's depend");
    }
    question4(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[4]/div[1]/div[1]/span[1]/span[1]/span[2]/span[1]')
        .should("have.text", "Rate our services");
    }
    answer4(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[4]/div[2]/div[1]/div[1]/div[1]/span[1]')
        .should("have.attr", "aria-label", "1 Star").click();
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[4]/div[2]/div[1]/div[1]/div[2]/span[1]')
        .should("have.attr","aria-label","2 Star").click();
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[4]/div[2]/div[1]/div[1]/div[3]/span[1]')
        .should("have.attr","aria-label","3 Star").click();
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[4]/div[2]/div[1]/div[1]/div[4]/span[1]')
        .should("have.attr","aria-label","4 Star").click();
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[4]/div[2]/div[1]/div[1]/div[5]/span[1]')
        .should("have.attr","aria-label","5 Star").click();
    }
    question5(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[5]/div[1]/div[1]/span[1]/span[1]/span[2]')
        .should("have.text","Review date");
    }
    answer5(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]')
        .dblclick().type('2/24/2024');
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[2]/div[5]/div[2]/div[1]/div[1]/div[1]/div[1]/div[1]/input[1]')
        .should("have.value","2/24/2024");
    }
    buttonSubmit(){
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[2]/div[3]/div[1]/button[1]')
        .click();
        cy.wait(3000)
        cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/div[1]/div[2]/div[1]/span[1]')
        .should("have.text", "Your response has been successfully recorded.");
    }
    
}