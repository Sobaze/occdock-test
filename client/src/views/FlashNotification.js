import React, {useImperativeHandle} from 'react'
import NotificationAlert from 'react-notification-alert'


function FlashNotification (props, ref) {
    const notificationAlertRef = React.useRef(null)

    useImperativeHandle(
        ref,
        () => ({ createFlashNotification}), [ ])

        const createFlashNotification = (message, success) => {
            const options = {
              place: 'tr',
              message: message,
              type: success ? 'success' : 'danger',
              icon: "tim-icons icon-bell-55",
              autoDismiss: 7,
            }
            notificationAlertRef.current.notificationAlert(options)
          }

    return (
        <div className="react-notification-alert-container">
            <NotificationAlert ref={notificationAlertRef} />
        </div>
    )
}

export const userCreateSuccess = 'Successfully created new user'
export const enterAllFields = 'Enter all fields'
export const passwordNotMatching = 'Passwords do not match'
export const incorrectCredentials = 'Incorrect credentials'
export const notResponding = 'The application is not responding'
export const deviceCreateSuccess = 'Successfully created new device'

export default React.forwardRef(FlashNotification)