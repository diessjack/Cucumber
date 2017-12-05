Feature: Life of king

In order to go office
As a working guy
I want to wish people

@tester
Scenario Outline:I am a kingman



Given we work in "<weekday>"
When we meet "<guy>"
Then we "<yesorno>" him

Examples:
|weekday | guy      | yesorno    |
|ten     | watchmen | yes		 |
|nine	 | cabdriver| no         |
|one	 | homboo   | yes		 |