import React from 'react'
import { Container } from 'react-bootstrap'

export default function Footer() {
   return (
      <footer
         className={"alert alert-primary py-4 w-100 mb-0"}
         style={{ position: 'absolute', bottom: 0 }}
      >
         <Container>
            footer
         </Container>
      </footer>
   )
}
