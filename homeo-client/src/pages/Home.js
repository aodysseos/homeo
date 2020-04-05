import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Typography } from '@material-ui/core'

import Header from '../components/Header'
import Hero from '../components/Hero'
import HomeoTeam from '../components/HomeoTeam'
import Footer from '../components/Footer'
import OurSupporters from '../components/OurSupporters'
import OurStory from '../components/OurStory'

const Container = styled.main`
	background-color: white;
	width: 100%;
`

const Home = () => {
	return (
		<Container>
			<Header />
			<Hero />
			<OurStory />
			<OurSupporters />
			<HomeoTeam />
			<Footer />
		</Container>
	)
}

export default Home
