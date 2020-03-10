import React, { useState } from 'react'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'
import { Copy } from 'react-feather'
import { copyToClipboard } from '../utils/copyToClipboard'

const CopyCode = styled.button`
  display: flex;
  position: absolute;
  right: 0.25rem;
  top: 0.25rem;
  border: 0;
  border-radius: 3px;
  color: ${({ theme }) => theme.textLight};
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.backgroundColor};

  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text};
  }
`

const CopyIcon = styled(Copy)`
  height: 1rem;
  width: 1rem;
`

const CopyText = styled.div`
  pointer-events: none;
  position: absolute;
  right: 0.25rem;
  top: 1rem;
`

const CopyToClipboard = ({ code }) => {
  const [copied, setCopied] = useState(false)

  const spring = useSpring({
    opacity: copied ? 1 : 0,
    transform: copied ? 'translate3d(0, 20px, 0)' : 'translate3d(0, 10px, 0)',
  })

  const handleClick = () => {
    copyToClipboard(code)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000)
  }

  return (
    <>
      <CopyCode onClick={handleClick}>
        <CopyIcon />
      </CopyCode>
      <CopyText>
        <animated.div style={spring}>Copied</animated.div>
      </CopyText>
    </>
  )
}

export default CopyToClipboard
