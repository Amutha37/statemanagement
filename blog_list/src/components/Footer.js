import React from 'react'
import styled from 'styled-components'

let Footerr = styled.div`
  background: Chocolate;
  padding: 1em;
  margin-top: 160px;
`
const Footer = () => (
  <Footerr>
    <div>
      <i>Blogs List App, Department of Computer Science 2023</i>
    </div>
    Blogs List App for Part7f -{' '}
    <a className='alink' href='https://fullstackopen.com/'>
      Full Stack Open
    </a>
    .{' '}
    <div>
      See{' '}
      <a
        className='alink'
        href='https://github.com/fullstack-hy2020/routed-anecdotes/blob/master/src/App.js'
      >
        https://github.com/Amutha37/fullstackopen/statemanagement-bloglist/
      </a>{' '}
      for the source code.
    </div>
  </Footerr>
)

export default Footer
