import { Form, Row } from 'reactstrap'
import TextFieldInputCol from '../../components/FormInputs/TextFieldInputCol'
import MultipleSelectOptionInputCol from '../../components/FormInputs/MultipleSelectOptionInputCol'
import {
  companyFormInput,
  billingFormInput,
  firstNameFormInput,
  lastNameFormInput,
  phoneFormInput,
  emailFormInput,
  devicesFormInput,
  passwordFormInput,
  passwordReEnterFormInput
} from './CreateUserFormInputValues'

function CustomerForm ({ props }) {
  const generateDevices = () => {
    // TODO: fetch devices from server
    return [
      { id: '1', value: 'device 1' },
      { id: '2', value: 'device 2' },
      { id: '3', value: 'device 3' },
      { id: '4', value: 'device 4' }
    ]
  }

  return (
    <Form onSubmit={props.onSubmit}>
      <Row>
        <TextFieldInputCol props={companyFormInput(props.newUser.company, props.onChange)} />
        <TextFieldInputCol props={billingFormInput(props.newUser.billingAmount, props.onChange)} />
      </Row>
      <Row>
        <TextFieldInputCol props={firstNameFormInput(props.newUser.firstName, props.onChange)} />
        <TextFieldInputCol props={lastNameFormInput(props.newUser.lastName, props.onChange)} />
      </Row>
      <Row>
        <TextFieldInputCol props={phoneFormInput(props.newUser.phone, props.onChange)} />
        <TextFieldInputCol props={emailFormInput(props.newUser.email, props.onChange)} />
      </Row>
      <Row>
        <MultipleSelectOptionInputCol props={devicesFormInput(generateDevices(), props.onChange)} />
      </Row>
      <Row>
        <TextFieldInputCol props={passwordFormInput(props.newUser.password, props.onChange)} />
        <TextFieldInputCol props={passwordReEnterFormInput(props.newUser.reEnterPassword, props.onChange)} />
      </Row>
    </Form>
  )
}

export default CustomerForm
