import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Typography } from '@material-ui/core'

import Hero from '../components/Hero'

const Container = styled.main`
	background-color: white;
	width: 100%;
`

const Home = () => {
	return (
		<Container>
			<Hero />
		</Container>
	)
}

export default Home
