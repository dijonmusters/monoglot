import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`

const Return = styled.p`
  margin-top: 1rem;
`

const FourOhFour = () => (
  <Container>
    <h2>Looks like that page does not exist</h2>
    <Return>
      <Link to="/">Return to article list</Link>
    </Return>
  </Container>
)

export default FourOhFour
