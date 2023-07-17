Feature: The Internet Website Home Page

  Scenario Outline: As a user, I can open my website

    Given I open the browser and load the URL <myurl>
    When I click on Banking Tab
    Then I should see subtabs available
    When I click on Credit Cards Sub Tab
    When I click on Bendigo Bright Credit Card 
    Then I should land on my eligibility screen
    When I click on Continue to apply button
    Then I should land on my getting Started screen
    When I enter preferred credit limit
    When I select general purpose use option
    Then I click Continue Button
    When I select relationship status
    When I choose am I current customer of bank
    When I choose do I have promo code
    Then I click Continue Button
    When I select meet criteria as Yes
    Then I click Continue Button
    When I enter location
    When Click find button
    When I select Clifton Hill option from the list
    Then I click Continue Button


    Examples:
      | myurl | 
      | https://www.bendigobank.com.au/ |
