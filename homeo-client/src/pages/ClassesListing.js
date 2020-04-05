import React from 'react'
import styled from 'styled-components'
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
const CardsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	margin-left: -0.5rem;
	> div {
		flex: 0 1 30%;
		margin: 1rem 1.65%;
	}
`

const ClassesListing = ({ match }) => {
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
				<CardsWrapper>{_map(classes, (cls) => <ClassCard key={_get(cls, 'id')} {...cls} />)}</CardsWrapper>
			</Wrapper>
		</Container>
	)
}

export default ClassesListing
