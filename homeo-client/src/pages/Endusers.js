import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Typography } from '@material-ui/core'

import Header from '../components/Header'

const EndusersPage = () => {
	return (
		<>
		<Header isTransparent />
		<Typography variant="h2" component="h1">
			Users
		</Typography>
		</>
	)
}

export default EndusersPage
