import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Container = styled.section`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: row;
	color: ${({ theme, isTransparent }) => (isTransparent ? theme.primary : theme.secondary)};
	background-color: ${({ theme, isTransparent }) => (isTransparent ? theme.secondary : theme.primary)};
`
const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: row;
	width: 100%;
	padding: 2rem 0;
	margin: 0 8rem;
	max-width: none;
	border-bottom: 3px solid ${({ theme, isTransparent }) => (isTransparent ? theme.primary : 'transparent')};
`

const Logo = styled(Link)`
	position: absolute;
	bottom: 10px;
	right: 0;
	> img { width: 150px; }
`

const Text = styled.div`
	font-size: 1rem;
	color: ${({ theme }) => theme.secondary};
	position: absolute;
	bottom: 10px;
	left: 0;
`

const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<Logo to="/">
					<img src={`${process.env.PUBLIC_URL}/logo_white.png`} alt="logo" />
				</Logo>
				<Text>Copyright ©2020 Homeo</Text>
			</Wrapper>
		</Container>
	)
}

export default Footer
