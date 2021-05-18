export const firstNameFormInput = (firstName, onChange) => {
  return {
    className: 'pr-md-1',
    md: '6',
    type: 'text',
    label: 'First Name',
    defaultValue: firstName,
    placeholder: 'First Name',
    name: 'firstName',
    onChange: onChange
  }
}

export const lastNameFormInput = (lastName, onChange) => {
  return {
    className: 'pl-md-1',
    md: '6',
    type: 'text',
    label: 'Last Name',
    defaultValue: lastName,
    placeholder: 'Last Name',
    name: 'lastName',
    onChange: onChange
  }
}

export const phoneFormInput = (phone, onChange) => {
  return {
    className: 'pr-md-1',
    md: '5',
    type: 'text',
    label: 'Phone',
    defaultValue: phone,
    placeholder: 'Phone',
    name: 'phone',
    onChange: onChange
  }
}

export const emailFormInput = (email, onChange) => {
  return {
    autoComplete: 'username',
    className: 'pl-md-1',
    md: '7',
    type: 'text',
    label: 'Email',
    defaultValue: email,
    placeholder: 'Email',
    name: 'email',
    onChange: onChange
  }
}

export const companyFormInput = (company, onChange) => {
  return {
    className: 'pr-md-1',
    md: '6',
    type: 'text',
    label: 'Company',
    defaultValue: company,
    placeholder: 'Company',
    name: 'company',
    onChange: onChange
  }
}

export const billingFormInput = (amount, onChange) => {
  return {
    className: 'pl-md-1',
    md: '6',
    type: 'text',
    label: 'Invoice Amount',
    defaultValue: amount,
    placeholder: 'Invoice Amount',
    name: 'amount',
    onChange: onChange
  }
}

export const devicesFormInput = (options, onChange) => {
  return {
    label: 'Devices',
    name: 'deviceAccess',
    onChange: onChange,
    options: options
  }
}

export const passwordFormInput = (password, onChange) => {
  return {
    autoComplete: 'new-password',
    className: 'pr-md-1',
    md: '6',
    type: 'password',
    label: 'Password',
    defaultValue: password,
    placeholder: 'Password',
    name: 'password',
    onChange: onChange
  }
}

export const passwordReEnterFormInput = (reEnterPassword, onChange) => {
  return {
    autoComplete: 'new-password',
    className: 'pl-md-1',
    md: '6',
    type: 'password',
    label: 'Re-enter Password',
    defaultValue: reEnterPassword,
    placeholder: 'Re-enter Password',
    name: 'reEnterPassword',
    onChange: onChange
  }
}
