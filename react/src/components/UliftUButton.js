import React from 'react'

import { Button } from 'react-bootstrap'

const UliftUButton = ({
  buttonText
}) => {
  return (
    <Button block className='uliftCardButton' style={{ borderColor: 'white', backgroundColor: 'black', fontFamily: 'Roboto' }}>{buttonText}</Button>
  )
}

export default UliftUButton
