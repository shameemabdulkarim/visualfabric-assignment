# Project Description

This project contains automated tests for the API  nextBirthdayCalculator

API Endpoint - https://p9fwi1d77e.execute-api.eu-west-1.amazonaws.com/Prod/next-birthday?dateofbirth=1990-10-30&unit=hour

# Installation

Follow below steps to run these tests locally

## Prerequisites
Make sure that `npm` and `node` are installed in the machine . In case you are new to this, please install the same by following instructions at https://nodejs.org/en/download/

Make sure `git` is installed in the machine

## Steps to follow

1. Clone this repository to your local machine 
2. Navigate to the folder where the repository is cloned and run the command `npm install`.This will install all the necessary packages and the tool `cypress` as well
3. The tests can be run in two modes : Either using the test runner or in headless mode
4. In order to run the tests using the runner, provide the command `npm run open` in the same location where Step 2 was executed.
5. This will open up a runner in which you can see the `spec` file with all the tests as shown below

![image](https://user-images.githubusercontent.com/43175331/126228105-fdfe8347-fac8-4006-b0b9-dda2178842f4.png)
6. Click the file `apiTest.spec.js` to run the tests and you will see the browser opening up and all tests running as shown below 
 
 Note-The tests will not be in expanded mode once it runs. Click on the test to see the steps that are executed and the assertions executed for each test.
    
![image](https://user-images.githubusercontent.com/43175331/126228259-acbf876f-c78e-4134-92dd-a1b9e2c089e1.png)
7. In order to run the tests in a headless mode, please use the command `npm run headless`. This will run the tests and will show the results in the command as shown below

![image](https://user-images.githubusercontent.com/43175331/126229207-de162236-e79a-4962-b955-df5eb272f81b.png)
8. In case the details of test execution needs to be seen, that is possible via the videos that are now added in your videos folder that is created after running your test in headless mode. 
