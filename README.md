# Lab 5 - Starter

Shravi Jain\
Phoebe Tang

[Link to expose](https://shjucsd.github.io/Lab5_Starter/expose.html) \
[link to explore](https://shjucsd.github.io/Lab5_Starter/explore.html)

**1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.** \
\
We would not use unit test to check the whole feature of "message" because it would involve testing individual components that interact with each other as we would have to check not only that the message was correctly written and sent but also if it was correctly received by the user. Such complex testing of a feature is not easily feasible through unit test. 

**2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing moreI than 80 characters.** \
\
We can use a unit test to check the maximum lenght of a message because it is on a small scale and does not affect the other components of the message features. It can easily be executed with a function with an if statement without depending on any other part. Hence, unit test is good for checking small-scale features which do not affect any other component of the whole "message" feature.
