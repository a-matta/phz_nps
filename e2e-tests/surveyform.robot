*** Settings ***
Library    RequestsLibrary
Library    SeleniumLibrary
Library    Collections
Library    String
Library    FakerLibrary
Test Setup    Open UI Application

*** Variables ***
${BROWSER}    chrome
${BASE_URL}    http://localhost:3000
${HEART}    class:star
${FEEDBACK_AREA}    name:message
${random_string}    Generate Random String
${SEND_BUTTON}    class:surveyform_submitButton__af3z3

*** Keywords ***
Open UI Application
    Open Browser    ${BASE_URL}    ${BROWSER}

*** Test Cases ***
#Open Survey Form
 #   Element Text Should Be    ${TEXT}    How likely are you to recommend Team Glory to your friends and family?
  #  Sleep    5

Form can be submitted with message
    Click Element    ${HEART}
    Wait Until Element Is Visible    ${FEEDBACK_AREA}
    Press Keys    ${FEEDBACK_AREA}    RETURN
    ${lorem}=    Paragraph    5
    Log    ${lorem}
    Input Text    ${FEEDBACK_AREA}    ${lorem}
    Click Button    ${SEND_BUTTON}
