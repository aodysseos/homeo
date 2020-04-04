import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.section`
	width: 100%;
	height: 100px;
	display: flex;
	flex-direction: row;
	color: ${({ theme, isTransparent }) => (isTransparent ? theme.primary : theme.secondary)};
	background-color: ${({ theme, isTransparent }) => (isTransparent ? theme.secondary : theme.primary)};
`
const Wrapper = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 2rem 0;
	margin: 0 8rem;
	max-width: none;
	border-bottom: 3px solid ${({ theme, isTransparent }) => (isTransparent ? theme.primary : 'transparent')};
`

const Logo = styled(Link)`
	font-size: 2rem;
	font-weight: 600;
	text-transform: uppercase;
	color: ${({ theme, isTransparent }) => (isTransparent ? theme.primary : theme.secondary)};
`

const Header = ({ isTransparent }) => {
	return (
		<Container isTransparent={isTransparent}>
			<Wrapper isTransparent={isTransparent}>
				<Logo to="/" isTransparent={isTransparent}>{`Homeo`}</Logo>
			</Wrapper>
		</Container>
	)
}

export default Header
