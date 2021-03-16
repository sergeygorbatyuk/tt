Feature: Test Task

  Scenario: Login
	Given I go to "http://demo.testfire.net/"
	When I do login as "admin"
	Then I logged in and verify that 2 accounts are present

	Scenario: Logout
	Given Sign off button is visible
	When I do Logout
	Then I am on the main page