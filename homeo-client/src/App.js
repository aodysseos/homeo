import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'
import grey from '@material-ui/core/colors/grey'
import styled, { ThemeProvider } from 'styled-components'

import HomePage from './pages/Home'
import InstructorsPage from './pages/Instructors'
import CategoriesPage from './pages/Categories'
import ClassesListingPage from './pages/ClassesListing'

import 'typeface-roboto'

import './App.css'

const theme = createMuiTheme({
	primary: '#ff5a5f',
	secondary: '#ffffff',
	dark: '#494646',
	palette: {
		primary: red,
		secondary: grey
	},
	typography: {
		fontFamily: [
			'Averta',
			'-apple-system',
			'BlinkMacSystemFont',
			'"Segoe UI"',
			'Roboto',
			'"Helvetica Neue"',
			'Arial',
			'sans-serif',
			'"Apple Color Emoji"',
			'"Segoe UI Emoji"',
			'"Segoe UI Symbol"'
		].join(',')
	}
})

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Switch>
						<Route exact path="/" render={(props) => <HomePage {...props} isAuthed={false} />} />
						<Route exact path="/instructors" render={(props) => <InstructorsPage {...props} isAuthed={false} />} />
						<Route exact path="/categories" render={(props) => <CategoriesPage {...props} isAuthed={false} />} />
						<Route path="/categories/:id" render={(props) => <ClassesListingPage {...props} isAuthed={false} />} />
					</Switch>
				</div>
			</ThemeProvider>
		</Router>
	)
}

export default App
