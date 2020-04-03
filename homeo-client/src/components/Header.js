import React from 'react'
import styled from 'styled-components'

const Container = styled.section`
	width: 100%;
	min-height: 100px;
	display: flex;
	flex-direction: row;
	color: ${({ theme }) => theme.secondary};
	background-color: ${({ theme }) => theme.primary};
`
const Wrapper = styled.div`
	margin-left: 64px;
	margin-right: 64px;
	max-width: none;
	padding: 1.5rem .75rem;
`

const Logo = styled.div`
	font-size: 2rem;
	font-weight: 600;
	text-transform: uppercase;
`

const Header = () => {
	return (
		<Container>
			<Wrapper>
				<Logo>{`Homeo`}</Logo>
			</Wrapper>
		</Container>
	)
}

export default Header
