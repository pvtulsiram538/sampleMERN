/* 
 * To change self license header, choose License Headers in Project Properties.
 * To change self template file, choose Tools | Templates
 * and open the template in the editor.
 */


export const validateFields = (fieldName, value, self) => {
    let fieldValidationErrors = self.state.formErrors;
    switch (fieldName) {
        case 'email':
            fieldValidationErrors.email = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i) ? 
            (self.setState({emailValid:true}), '') : ' email is invalid';
            break;
        case 'password':
            fieldValidationErrors.password = value.length >= 6 ? 
            (self.setState({passwordValid:true}),'') : '  password is too short';
            break;
        default:
            break;
    }
function  validateForm() {
    self.setState({formValid: self.state.emailValid && self.state.passwordValid});
  }
    self.setState({formErrors: fieldValidationErrors,fieldName},validateForm);
};