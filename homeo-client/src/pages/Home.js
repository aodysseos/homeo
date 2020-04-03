import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Typography } from '@material-ui/core'

import Header from '../components/Header'
import Hero from '../components/Hero'

const Container = styled.main`
	background-color: white;
	width: 100%;
`

const Home = () => {
	return (
		<Container>
			<Header />
			<Hero />
		</Container>
	)
}

export default Home
