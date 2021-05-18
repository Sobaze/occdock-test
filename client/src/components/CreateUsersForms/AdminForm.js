import TextFieldInputCol from '../../components/FormInputs/TextFieldInputCol'
import { Form, Row } from 'reactstrap'
import {
  firstNameFormInput,
  lastNameFormInput,
  phoneFormInput,
  emailFormInput,
  passwordFormInput,
  passwordReEnterFormInput
} from './CreateUserFormInputValues'

function AdminForm ({ props }) {
  return (
    <>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <TextFieldInputCol props={firstNameFormInput(props.newUser.firstName, props.onChange)} />
          <TextFieldInputCol props={lastNameFormInput(props.newUser.lastName, props.onChange)} />
        </Row>
        <Row>
          <TextFieldInputCol props={phoneFormInput(props.newUser.phone, props.onChange)} />
          <TextFieldInputCol props={emailFormInput(props.newUser.email, props.onChange)} />
        </Row>
        <Row>
          <TextFieldInputCol props={passwordFormInput(props.newUser.password, props.onChange)} />
          <TextFieldInputCol props={passwordReEnterFormInput(props.newUser.reEnterPassword, props.onChange)} />
        </Row>
      </Form>
    </>
  )
}

export default AdminForm
