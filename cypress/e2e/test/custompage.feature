Feature: Tests for CustomPage


    Scenario: visiting the custompage
        Given User is using "desktop"
        When I visit homepage
        And I wait "6" sec
        Then I click on the custom btn
        And I click on the "color" tab on side panel
        Then I select "#D0021B" color on the color Picker
        And I expect that the color of Back button is "rgb(208, 2, 27)"
        #And I wait "2" sec
        #Then I visual check the t-shirt object with "Red-Tshirt"