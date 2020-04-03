import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import Layout from './components/Layout'
import Header from './components/Header'

import HomePage from './pages/Home'
import InstructorsPage from './pages/Instructors'
import EndusersPage from './pages/Endusers'

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
					<Header />
					<Switch>
						<Route exact path="/">
							<HomePage />
						</Route>
						<Route path="/instructors">
							<InstructorsPage />
						</Route>
						<Route path="/classes">
							<EndusersPage />
						</Route>
					</Switch>
				</div>
			</ThemeProvider>
		</Router>
	)
}

export default App
