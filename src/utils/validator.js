export const nameValidator = name => {
    if (!name) {
      return "Email is required";
    } 
    return true;
  };
export const emailValidator = email => {
    if (!email) {
      return "Email is required";
    } else if (!new RegExp(/\S+@\S+\.\S+/).test(email)) {
      return "Incorrect email format";
    }
    return true;
  };
  
  export const passwordValidator = password => {
    if (!password) {
      return "Password is required";
    } else if (password.length < 8) {
      return "Password must have a minimum 8 characters";
    }
    return true;
  };
  
  export const confirmPasswordValidator = (confirmPassword, form) => {
    if (!confirmPassword) {
      return "Confirm password is required";
    } else if (confirmPassword.length < 8) {
      return "Confirm password must have a minimum 8 characters";
    } else if (confirmPassword !== form.password) {
      return "Passwords do not match";
    }
    return true;
  };

  export const validateValues = (inputValues) => {
    let errors = {};
    console.log(inputValues.email)
    if (!inputValues.name) {
        errors.name = "Name is required";
      }
    if (inputValues.name?.length < 3) {
        errors.name = "Name is too short";
      }
      if (!inputValues.email) {
        errors.email = "Email is required";
      }
    if (inputValues.email?.length < 15) {
      errors.email = "Email is too short";
    }
    if (!new RegExp(/\S+@\S+\.\S+/).test(inputValues.email)) {
        return "Incorrect email format";
      }
      if (!inputValues.password) {
        errors.password = "Password is required";
      }
    if (inputValues.password.length < 8) {
      errors.password = "Password is too short";
    }
    if (!inputValues.confirmPassword) {
        errors.password = "Confirm password is required";
      }
    if (inputValues.confirmPassword.length < 8) {
        errors.password = "Password is too short";
      }
    if (!inputValues.confirmPassword !==  inputValues.password) {
      errors.age = "Passwords do not match";
    }
    return errors;
  };