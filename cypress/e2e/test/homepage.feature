Feature: Test for Homepage


    Scenario: visiting the frontpage
        Given User is using "mobile"
        When I visit homepage
        Then I wait "2" sec
        And I click on the custom btn
        Then I expect the icon is not displayed