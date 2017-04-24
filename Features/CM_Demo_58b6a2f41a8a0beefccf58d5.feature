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


@CM_Demo_58b6a2f41a8a0beefccf58d2, @Smoke_58b6a2f41a8a0beefccf58d3, @Regression_58b6a2f41a8a0beefccf58d4
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

@CM_Demo_58b6a2f41a8a0beefccf58d2, @Smoke_58b6a2f41a8a0beefccf58d3, @Regression_58b6a2f41a8a0beefccf58d4
Scenario Outline: Scenario1
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
Examples:
| csc| ewfwef| gbfgb| rtgtg| trgrtg| thgr| rf3f| erfer| sample| vaishali| rahul| shiwani| nitish| madame| 
| rf| rtgveftgvv e rf erf erf  f ef  f ef re rf we f we fe rf  erf er f| rfer| f| | | f| f| fcdfc| | dfc| sd| f| dsf| 
| sf| rf| | erf fe rf erf e rf erf e rf re f erf er f erf er f gtyhtr| er| f| erf| rk, we could get a bettr quality stuff from other brands that too at an affordable price| | | | | | rk, we could get a bettr quality stuff from other brands that too at an affordable price| 
| er| rf| refref| f| | g rt grt gr tg rt g gt rtg| e| | rk, we could get a bettr quality stuff from other brands that too at an affordable price| | | Sample| | | 
| f| r| ferf| e| erf| r| rf| fer| | rk, we could get a bettr quality stuff from other brands that too at an affordable price| | Samplerk, we could get a bettr quality stuff from other brands that too at an affordable price| rk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable pricerk, we could get a bettr quality stuff from other brands that too at an affordable price| | 
| fw| frf| frefrf| er| ef| re| ef| | | | rk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable pricerk, we could get a bettr quality stuff from other brands that too at an affordable price| | | rk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable pricerk, we could get a bettr quality stuff from other brands that too at an affordable pricerk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable price rk, we could get a bettr quality stuff from other brands that too at an affordable pricerk, we could get a bettr quality stuff from other brands that too at an affordable price| 
| rfrff| fer| rfref| f| f| fre| erf| | | | | rk, we could get a bettr quality stuff from other brands that too at an affordable price| | | 

