# Promoter's Call System

Usage:
git archive --format=tar HEAD | tar x -C ~/workspace/docker/project-name

## 1. Project Description

[Net Promoter Score](https://en.wikipedia.org/wiki/Net_promoter_score) that is widely used metric mesurement system that takes a form of single survey question asking customers to rate the likelihood that they would reccommend a company, product or service to a friend or colleague. It measures the loyalty of customers to a company. Scores are measured with a single question survey with number 1-10, a higher score is desirable.

Promoter's Call System allows buisnesses to collect customer feedback and arrive at NPS scores.

### 1.1. Business Vision

Promoter's Call System use their promoter score to measure 'customer satisfaction' & 'loyalty to a brand'. Its useful for organisations to see how customer service is percieved and where improvements might be made.

### 1.2. Task Management

We are using JIRA to manage & track our tasks, issues.

### 1.3. Personas

User research is a first step to creating a persona. By observing users, the team can understand their behavior and motivations, then create a design accordingly.

### 1.4. Use Cases

Customer 1 is asked a simple question how likely are you to reccommend this company to friend or relative?
Not at all likely 0 to extremely likely 10 based on their responses or ratings customes are placed into three categories.
Customer's feedback is expressed their views in their own words.
If 100 people answered the question so 40% - Promoters, 50% Passive and 10% Detractors
NPS = 40%-10%= 30%/100= 30

### 1.5. Non-Functional Requirements

https://wiki.phz.fi/NonFunctionalRequirements

The NPS Calculation Formula

To calculate your Net Promoter Score, subtract the percentage of Detractors from the percentage of Promoters. NPS = % promoters - % detractors. It is that simple. So, if 50% of respondents were Promoters and 10% were Detractors, your Net Promoter is a score of 40.

## 2. Architecture

### 2.1. Technologies

All PHZ Full Stack -projects should encapsulate all environments by virtualization. Choose one of the following for your project:

Dev

- React
- CSS
- Firebase
- Vagrant/Virtualbox
- Docker-compose/Docker

CI

- use dev -env on ci.in.phz.fi + Jenkins executors running Docker or Vagrant/Virtualbox.
- Jenkins
- (do not use Gitlab CI, or AWS Code Deploy or other CI unless you have a permission from management, can rationalize the exception to management and you know what you are doing)
- Nothing should be run outside virtualization and everything should be wrapped inside the container/virtual machine
- do not pin the projects down on any individual executor, but set up the builds so that they can be run on any executor machine

Staging

- Xen / PHZ Virtual Machines
- PHZ Docker Swarm
- PHZ Kubernetes

Production

- Xen / PHZ Virtual Machines + Baremetal Database db.in.phz.fi
- PHZ Docker Swarm (internal projects only)
- PHZ Kubernetes (internal projects only)
- AWS (customer projects, but customer needs to pay for it and there needs to be a contract in place with the customer before you start to set up the AWS env)

### 2.2. Naming, Terms and Key Concepts

Environments and the configs should be named as

- dev: docker-compose.yml (i.e. use the default names for dev env), but .env.dev
- (ci): use the dev -env on CI
- stg: docker-compose.stg.yml, .env.stg
- prod: docker-compose.prod.yml, .env.prod

### 2.3. Coding Convention

Directory structure

- doc/ for UML documents
- etc/ for nginx, ssh etc configs. Can be cp -pr etc/ /etc to the virtual machine during provisioning and matches the os directory structure
- results/ test results
- reports/ for e.g. code coverage reports
- src/ for source code
  \*\* Note! Source code should be placed under a single folder (src) that can be mounted over Docker -volume or Vagrant -shared folder inside the virtual machine so that node_modules or vendor directory are not on the shared folder. See https://wiki.phz.fi/Docker and https://wiki.phz.fi/Vagrant for further details how to circumvent the problems.
- tests/ for tests

### 2.4. Development Guide

Add here examples and hints of good ways how to code the project. Convert the silent knowledge as tacit knowledge here.

- See https://en.wikipedia.org/wiki/Knowledge_management

## 3. Development Environment

### 3.1. Prerequisites

- NodeJS 16+
- Visual Studio Code
- Firebase

### 3.2. Start the Application

npm install
npm start

### 3.3. Access the Application

### 3.4. Run Tests

cypress - npm run e2e-test

### 3.5. IDE Setup and Debugging

### 3.6. Version Control

Survey Form https://github.com/a-matta/phz_ps
Backend https://github.com/martin-holland/phz_ps_backend
Dashboard https://github.com/martin-holland/ps_phz_dashboard

### 3.7. Databases and Migrations

Firebase

### 3.8. Continuous Integration

## 4. Staging Environment

### 4.1. Access

### 4.2. Deployment

### 4.3. Smoke Tests

1. Form can be submitted with message.
2. Form can be sumbitted without a message.
3. Form can be closed without giving a feedback.
4. User can login and view dashboard.
5. Filtering of dates.

#### 4.3.1. Automated Test Cases

1. Form can be submitted with message
2. Form can be sumbitted without a message
3. Form can be closed without giving a feedback

#### 4.3.2. Manual Test Cases

### 4.4. Rollback

### 4.5. Logs

### 4.6. Monitoring

## 5. Production Environment

### 5.1. Access

### 5.2. Deployment

### 5.3. Smoke Tests

#### 5.3.1. Automated Test Cases

#### 5.3.2. Manual Test Cases

1. Launch Survey form at https://embedtest-mh.netlify.app, as expected survey form loads successfully is working.
2. Cross button should work as per functionality, when clicked on the Cross button the survey form should close, survey form closes sucessfully as expected.
3. Clicking on any heart should open feedback form, when heart icon is clicked feedback form can be seen.
4. Click on any heart ex. 10th,7th or 1st heart, hover should work, when any on heart icon is clicked hover is working.
5. Click on any heart without writing a feedback, when heart icon is clicked and send message is clicked, form is submitted sucessfully.
6. Add feedback and sumbit form sucessfully.
7. User cannot add special characters €#", when tried to add send button was disabled
8. Add valid username/password, Login works sucessfully
9. Add invalid username/password, Login should not work, user cannot view dashboard
10. Check if messages appear is descending order, messages are seen in descending order
11. Check if logout button is working, logout button works
12. Check if theme works, theme works
13. Check if filter works with future dates & past dates

### 5.4. Rollback

### 5.5. Logs

### 5.6. Monitoring

## 6. Operating Manual

### 6.1 Scheduled Jobs

### 6.2 Manual Processes

## 7. Problems

### 7.1. Environments

### 7.2. Coding

### 7.3. Dependencies

Add here TODO and blockers that you have found related to upgrading to newer versions.
List the library/framework/service, version, and then the error message.
