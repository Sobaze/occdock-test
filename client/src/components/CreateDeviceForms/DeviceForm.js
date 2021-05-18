import TextFieldInputCol from '../../components/FormInputs/TextFieldInputCol'
import { Form, Row } from 'reactstrap'
import {
  idFormInput,
  ownerFormInput,
  locationFormInput
} from './CreateDeviceFormInputValues'

function DeviceForm ({ props }) {
  return (
    <>
      <Form onSubmit={props.onSubmit}>
        <Row>
          <TextFieldInputCol props={idFormInput(props.newDevice.deviceID, props.onChange)} />
          <TextFieldInputCol props={ownerFormInput(props.newDevice.owner, props.onChange)} />
        </Row>
        <Row>
          <TextFieldInputCol props={locationFormInput(props.newDevice.location, props.onChange)} />
        </Row>
      </Form>
    </>
  )
}

export default DeviceForm
