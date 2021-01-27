describe('Vehicle details search', () => {
    it('Search for correct car reg number', () => {
        cy.visit("");
        cy.get("#wizard_vehicle_enquiry_capture_vrn_vrn").type("OV12UYY");
    })
  })