Feature:Sign In and Purchase Product
        
 Scenario Outline: TC-002 Login to the account 
     Given I am on the home page
     When I provide "<email>" and "<password>"
     Then Verify User is on home page

     Examples:
     |email                |password|
     |arathydemo@gmail.com |demo@123|


  Scenario: TC-003 Select product and Add to Cart 
     Given I am selecting the category
     When I am choosing the product
     Then I select the size and color
     Then I click on add to cart

 Scenario: TC-004 Add address details and checkout the product
      Given I am going to cart
      When I provide the shipping address
      Then Verify the product and place order