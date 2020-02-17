import React from 'react'
import { Sun, Moon } from 'react-feather'
import styled from 'styled-components'
import useDarkMode from './hooks/useDarkMode'

const Container = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`

const Icon = styled.div`
  margin: 0 0.5rem;
  opacity: ${props => (props.isActive ? '0.75' : '0.25')};
`

const Switch = styled.label`
  display: inline-block;
  font-size: 20px;
  height: 1em;
  width: 2em;
  background: #bdb9a6;
  border-radius: 1em;
`

const Checkbox = styled.input`
  position: absolute;
  opacity: 0;
`

const Dot = styled.div`
  height: 1em;
  width: 1em;
  border-radius: 1em;
  background: #fff;
  box-shadow: 0 0.1em 0.3em rgba(0, 0, 0, 0.3);
  transition: all 300ms;
  ${props => props.isDarkMode && 'transform: translate3d(100%, 0, 0)'};
`

const DarkModeSwitcher = () => {
  const { toggle, theme } = useDarkMode()
  const isDark = theme === 'dark'
  return (
    <Container>
      <Icon isActive={!isDark} onClick={() => isDark && toggle()}>
        <Sun />
      </Icon>
      <Switch>
        <Checkbox type="checkbox" onChange={toggle} />
        <Dot isDarkMode={isDark} />
      </Switch>
      <Icon isActive={isDark} onClick={() => !isDark && toggle()}>
        <Moon />
      </Icon>
    </Container>
  )
}

export default DarkModeSwitcher
