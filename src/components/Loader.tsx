import React from 'react'
import { Spinner } from 'react-bootstrap'

export default function Loader() {
   return (
      <div style={{
         position: 'fixed',
         top: 0,
         right: 0,
         left: 0,
         bottom: 0,
         backgroundColor: '#ffffff95',
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center'
      }}>
         <Spinner animation="border" variant={"primary"}>
            <span className="sr-only">Loading...</span>
         </Spinner>
      </div>
   )
}
