import React from 'react'
import { Header,  Button,Modal } from 'semantic-ui-react'

export default function ShowModal({modalMessage, handleClose, open}) {
  return (
    <Modal basic size='small' open={open}>
      <Header icon='browser' content='Please try again' />
      <Modal.Content>
        <h3>{modalMessage}</h3>
      </Modal.Content>
      <Modal.Actions>
        <Button color='red' onClick={()=>handleClose()}>
          Ok
        </Button>
      </Modal.Actions>
    </Modal>
  )
}