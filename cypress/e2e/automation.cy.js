import { formPage } from '../support/page_objects/formPage';

describe('Automation Practice Form', () => {
  it('should fill the form and submit successfully', () => {
    formPage.visit();

    formPage.fillFirstName('Stephan');
    formPage.fillLastName('Cat');
    formPage.fillEmail('stephanthecat@example.com');
    formPage.selectGender('Male');
    formPage.fillMobileNumber('1234567890');
    formPage.setDateOfBirth('28', 'February', '1930');
    formPage.setSubjects('Economics');
    formPage.setHobbies('Music');
    formPage.uploadPicture('cypress/files/test-image.png');
    formPage.fillCurrentAddress('123 Main St, Delhi, NCR, 12345');
    formPage.selectState('NCR');
    formPage.selectCity('Delhi');
    formPage.clickSubmit();

    formPage.validateSubmittedData('Student Name', 'Stephan Cat');
    formPage.validateSubmittedData('Student Email', 'stephanthecat@example.com');
    formPage.validateSubmittedData('Gender', 'Male');
    formPage.validateSubmittedData('Mobile', '1234567890');
    formPage.validateSubmittedData('Date of Birth', '28 February,1930');
    formPage.validateSubmittedData('Subjects', 'Economics');
    formPage.validateSubmittedData('Hobbies', 'Music');
    formPage.validateSubmittedData('Picture', 'test-image.png');
    formPage.validateSubmittedData('Address', '123 Main St, Delhi, NCR, 12345');
    formPage.validateSubmittedData('State and City', 'NCR Delhi');
  });
});
