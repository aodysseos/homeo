import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'

import HomePage from './pages/Home'
import InstructorsPage from './pages/Instructors'
import CategoriesPage from './pages/Categories'
import ClassesListingPage from './pages/ClassesListing'

import 'typeface-roboto'

import './App.css'

const theme = {
	primary: '#ff5a5f',
	secondary: '#fff'
}

const App = () => {
	return (
		<Router>
			<ThemeProvider theme={theme}>
				<div className="App">
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route exact path="/instructors">
							<InstructorsPage />
						</Route>
						<Route exact path="/categories">
							<CategoriesPage />
						</Route>
						<Route path="/categories/:id">
							<ClassesListingPage />
						</Route>
					</Switch>
				</div>
			</ThemeProvider>
		</Router>
	)
}

export default App
