import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { Typography } from '@material-ui/core'
import _get from 'lodash/get'
import _map from 'lodash/map'

import Header from '../components/Header'
import SearchBar from '../components/SearchBar'
import ClassCard from '../components/ClassCard'

const Container = styled.div``

const Wrapper = styled.div`
	padding: 2rem 0;
	margin: 0 8rem;
`
const CardsWrapper = styled.nav`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	> div {
		margin-top: 2rem;
		flex: 0 1 calc(32% - 1em);
	}
`

const ClassesListing = ({ history, location, match }) => {
	const { params } = match
	const [ classes, setClasses ] = React.useState([])

	React.useEffect(() => {
		const fetchClasses = async () => {
			await fetch(`${process.env.REACT_APP_API_URL}/classes?categoryId=${_get(params, 'id')}`, {
				methods: 'GET',
				header: {
					'Content-Type': 'application/json'
				}
			})
				.then((response) => response.json())
				.then((results) => {
					setClasses(results)
				})
		}
		fetchClasses()
	}, [])

	return (
		<Container>
			<Header isTransparent />
			<Wrapper>
				<SearchBar />
				<CardsWrapper>{_map(classes, (c) => <ClassCard {...c} />)}</CardsWrapper>
			</Wrapper>
		</Container>
	)
}

export default ClassesListing
