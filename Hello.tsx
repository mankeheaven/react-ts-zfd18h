import React from 'react';
import styled from 'styled-components'

export default ({ name }) => <Container>Hello {name}!</Container>;


const Container = styled.div`
  color: blue;
`