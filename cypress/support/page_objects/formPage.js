class FormPage {
    visit() {
      cy.visit('https://demoqa.com/automation-practice-form');
    }
  
    fillFirstName(firstName) {
      cy.get('#firstName').type(firstName);
    }
  
    fillLastName(lastName) {
      cy.get('#lastName').type(lastName);
    }
  
    fillEmail(email) {
      cy.get('#userEmail').type(email);
    }
  
    selectGender(gender) {
      cy.contains('.custom-control-label', gender).click();
    }
  
    fillMobileNumber(mobileNumber) {
      cy.get('#userNumber').type(mobileNumber);
    }
  
    setDateOfBirth(day, month, year) {
      cy.get('#dateOfBirthInput').click();
      cy.get('.react-datepicker__month-select').select(month);
      cy.get('.react-datepicker__year-select').select(year);
      cy.get(`.react-datepicker__day--0${day}:not(.react-datepicker__day--outside-month)`).click();
    }
  
    setSubjects(subject) {
      cy.get('#subjectsInput').type(subject).type('{enter}');
    }
  
    setHobbies(hobby) {
      cy.contains('.custom-control-label', hobby).click();
    }
  
    uploadPicture(imagePath) {
      cy.get('#uploadPicture').selectFile(imagePath, { force: true });
    }
  
    fillCurrentAddress(address) {
      cy.get('#currentAddress').type(address);
    }
  
    selectState(state) {
      cy.get('#state').click({ force: true }).type(`${state}{enter}`);
    }
  
    selectCity(city) {
      cy.get('#city').click({ force: true }).type(`${city}{enter}`);
    }
  
    clickSubmit() {
      cy.get('#submit').click({ force: true });
    }
  
    validateSubmittedData(label, value) {
      cy.contains('td', label).next().should('contain', value);
    }
  }
  
  export const formPage = new FormPage();
  