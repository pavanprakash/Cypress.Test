Feature: Vehicle Look up tests

Scenario:
    When I enter correct 'vehicleRegistrationNumber'
    And I click on continue
    Then I can see 'vehicleDetailsPage'
    And I can verify make and colour of the vehicle

Scenario:
    When I enter correct 'incorrectRegistrationNumber'
    And I click on continue
    Then I can see 'vehicleNotFoundPage'
