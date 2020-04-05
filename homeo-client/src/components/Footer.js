import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

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
const SubTitle = styled(Typography)`
	max-width: 650px;
`

const Footer = () => {
	return (
		<Container>
			<Wrapper>
				<SubTitle>
					Copyright ©2020 Homeo
				</SubTitle>
			</Wrapper>
		</Container>
	)
}

export default Footer
