*** Settings ***
Library    RequestsLibrary
Library    SeleniumLibrary
Library    Collections
Library    String
Library    FakerLibrary
Library    XML
Library    Screenshot
Test Setup    Open UI Application

*** Variables ***
${BROWSER}    chrome
${BASE_URL}    http://localhost:3000
${HEART}    class:star
${FEEDBACK_AREA}    name:message
${random_string}    Generate Random String
${SEND_BUTTON}    class:surveyform_submitButton__af3z3
${THANKYOU_BUTTON}    id:fadeOut
${CLOSE_BUTTON}    class:surveyform_closeStyle__INxqV
${TITLE}    xpath://div[@class='surveyform_surveyForm__ERcpJ']/h4


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
    Element Should Be Visible    ${THANKYOU_BUTTON}

Form cannot be submitted without a message
    Click Element    ${HEART}
    Click Button    ${SEND_BUTTON}

Form cannot be sumbitted with special characters
    Click Element    ${HEART}
    Wait Until Element Is Visible    ${FEEDBACK_AREA}
    Press Keys    ${FEEDBACK_AREA}    RETURN
    ${lorem}=    Paragraph    5
    Log    ${lorem}
    Input Text    ${FEEDBACK_AREA}    ${lorem}#€%&
    Element Should Be Disabled    ${SEND_BUTTON}

Form can be closed without sending a feedback
    Click Element    ${HEART}
    Wait Until Element Is Visible    ${FEEDBACK_AREA}
    Sleep    5
    Click Element    ${CLOSE_BUTTON}
    Capture Page Screenshot

Form should have title
    Page Should Contain Element   ${TITLE}    How likely are you to recommend Team Glory to your friends and family?

