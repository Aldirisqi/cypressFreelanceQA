require('cypress-xpath');

import { formPage } from "./Pages/form"

const fPage = new formPage()

describe('test formulir', () => {
  beforeEach(() => {
    cy.visit('https://forms.office.com/pages/responsepage.aspx?id=is2XW8LLaEmfFhLKD9VwE9lpKmxdveNGmMWKETZvAWNUMzhBV1lYTlc1SDNRS00xRVg4OFhPODlQTS4u')
  })
  it('Title formulir', function() {
    fPage.titleForm()
  }
  )
  it('question full name', () => {
    fPage.question1()
  })
  it('answer question name', () => {
    fPage.answer1()
  })
  it('question phone number', () => {
    fPage.question2()
  })
  it('answer question phone number', () => {
    fPage.answer2()
  })
  it('question affordable or expensive', () => {
    fPage.question3()
  })
  it('answer affordable or expensive', () => {
    fPage.answer3()
  })
  it('question rate service', () => {
    fPage.question4()
  })
  it('answer rate service', () => {
    fPage.answer4()
  })
  it('question review date', () => {
    fPage.question5()
  })
  it('answer review date', () => {
    fPage.answer5()
  })
  it('submit formulir', () => {
    fPage.answer1()
    fPage.answer2()
    fPage.answer3()
    fPage.answer4()
    fPage.answer5()
    fPage.buttonSubmit()
  })
  it('submit without input require answer', () => {
    
    fPage.submitWithoutRequireField()
  })
})