import {When, Then} from './node_modules/cypress-cucumber-preprocessor/steps'

When("When I enter correct {string}", (regNum) => {
    let carRegNum;
    if (regNum === "vehicleDetailsPage") {
        carRegNum = "OV12UYY";
    } else if (regNum === "vehicleNotFoundPage") {
        carRegNum = "KT14XSS"
    }
    cy.get("#wizard_vehicle_enquiry_capture_vrn_vrn").type(carRegNum)
      .get("#submit_vrn_button").click();
})

Then("I click on continue", () => {
    cy.get("#submit_vrn_button").click();
})

Then("I can see {string}", (page) => {
    let text;
    if(page === "vehicleDetailsPage"){
        text = "Is this the vehicle you are looking for?";
    }
    else if(page === "vehicleNotFoundPage"){
        text = "Vehicle details could not be found";
    }
    cy.get("div.govuk-grid-row").contains(text);
})

Then("I can verify make and colour of the vehicle", () => {
    let vehicleDetails = {
        make : "ALFA ROMEO",
        colour: "BLACK"
    }

    cy.get(".govuk-grid-column-two-thirds")
      .contains(vehicleDetails.make)
      .contains(vehicleDetails.colour);
})

