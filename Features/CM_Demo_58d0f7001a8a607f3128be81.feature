Feature: CM Demo
Background:
# CM_Background2
Given  User navigates to "http://www.practiceselenium.com/welcome.html"
And  User clicks "HerbalTeacollection" button
And  User clicks "herbalteacheckout" button
And  User enters "nv.ram82@gmail.com" in "Emailco" field
And  User enters "Venkatraman" in "Nameco" field
And  User enters "Number 456 Hyderabad" in "Addressco" field
And  User select "Mastercard" from the "cardtype" dropdown list
And  User enters "564546789823" in "cardnumber" field
And  User enters "iambuying tea" in "cardholdername" field
And  User enters "544" in "verificationcode" field
Then  User clicks "placeorder" button


@CM_Demo_58d0f7001a8a607f3128be7e, @Smoke_58d0f7001a8a607f3128be7f, @Regression_58d0f7001a8a607f3128be80
Scenario Outline: User Sends an email to get some info
Given  User navigates to "<URL>"
And  User clicks "Menu" button
And  User clicks "letstalktea" button
And  User enters "<Name>" in "Name" field
And  User enters "<Email>" in "Email" field
And  User enters "<Subject>" in "Subject" field
And  User enters "<Message>" in "Message" field
Then  User clicks "Submit" button
Then  Verify "Successmessage" is displayed as "Thank you sending us your information. We will get back to you with your Chai :)"
Examples:
| URL| Name| Email| Subject| Message| 
| http://www.practiceselenium.com/menu.html| Venkatraman| nv.ram82@gmail.com| Hello| Need some Info| 
| http://www.practiceselenium.com/menu.html| Vaishali| vaishali_sharma@epam.com| Hi| Need some information| 

@CM_Demo_58d0f7001a8a607f3128be7e, @Smoke_58d0f7001a8a607f3128be7f, @Regression_58d0f7001a8a607f3128be80
Scenario: Scenario1
Given  User navigates to "http://www.practiceselenium.com/welcome.html"
And  User clicks "HerbalTeacollection" button
And  User clicks "herbalteacheckout" button
And  User enters "nv.ram82@gmail.com" in "Emailco" field
And  User enters "Venkatraman" in "Nameco" field
And  User enters "Number 456 Hyderabad" in "Addressco" field
And  User select "Mastercard" from the "cardtype" dropdown list
And  User enters "564546789823" in "cardnumber" field
And  User enters "iambuying tea" in "cardholdername" field
And  User enters "544" in "verificationcode" field
Then  User clicks "placeorder" button

