import React from 'react'
import styled from 'styled-components'

let Footerr = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 1em;
`
const Footer = () => (
  <Footerr>
    <div>
      <i>Blogs List App, Department of Computer Science 2023</i>
    </div>
    Blogs List App for Part7f -{' '}
    <a href='https://fullstackopen.com/'>Full Stack Open</a>.
    {/* See{' '}
    <a href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'>
      https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js
    </a>{' '}
    for the source code. */}
  </Footerr>
)

export default Footer
