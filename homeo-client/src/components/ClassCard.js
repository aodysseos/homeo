import React from 'react'
import _get from 'lodash/get'
import clsx from 'clsx'
import moment from 'moment'
import styled from 'styled-components'
import { makeStyles } from '@material-ui/core/styles'
import {
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Collapse,
	Avatar,
	IconButton,
	Typography,
	Button
} from '@material-ui/core'

import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const useStyles = makeStyles((theme) => ({
	root: {
		textAlign: 'left'
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	expand: {
		transform: 'rotate(0deg)',
		marginLeft: 'auto',
		transition: theme.transitions.create('transform', {
			duration: theme.transitions.duration.shortest
		})
	},
	expandOpen: {
		transform: 'rotate(180deg)'
	},
	avatar: {
		backgroundColor: `${({ theme }) => theme.primary}`
	},
	bookButton: {
		marginLeft: 'auto'
	}
}))

const CardDetails = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin-bottom: 1rem;
	color: ${({ theme }) => theme.primary};
`

const Date = styled.div``

const Amount = styled.div`text-transform: uppercase;`

const ClassCard = ({
	id,
	title,
	sessionDate,
	currency,
	isFree,
	amount,
	shortDescription,
	longDescription,
	image,
	categoryId,
	link,
	instructor,
	instructorInitials
}) => {
	const classes = useStyles()
	const [ expanded, setExpanded ] = React.useState(false)

	const handleExpandClick = () => {
		setExpanded(!expanded)
	}

	const handleBookClick = (link) => {
		window.open(link, '_blank')
	}
	return (
		<Card className={classes.root}>
			<CardHeader
				avatar={
					<Avatar aria-label="recipe" className={classes.avatar}>
						{instructorInitials || 'OP'}
					</Avatar>
				}
				action={
					<IconButton aria-label="settings">
						<MoreVertIcon />
					</IconButton>
				}
				title={title}
				subheader={''}
			/>
			<CardMedia
				className={classes.media}
				image={`${process.env.REACT_APP_API_URL}${_get(image, 'url')}`}
				title={title}
			/>
			<CardContent>
				<CardDetails>
					<Date variant="body2" color="textSecondary" component="p">
						{moment(sessionDate).format('M	MMMM YYYY	 h:MM a')}
					</Date>
					<Amount variant="body2" color="textSecondary" component="p">
						{!amount || isFree ? 'free' : `${currency}${amount}`}
					</Amount>
				</CardDetails>
				<Typography variant="body2" color="textSecondary" component="p">
					{shortDescription}
				</Typography>
			</CardContent>
			<CardActions disableSpacing>
				<IconButton aria-label="add to favorites">
					<FavoriteIcon />
				</IconButton>
				<IconButton aria-label="share">
					<ShareIcon />
				</IconButton>
				{/* <IconButton
					className={clsx(classes.expand, {
						[classes.expandOpen]: expanded
					})}
					onClick={handleExpandClick}
					aria-expanded={expanded}
					aria-label="show more"
				>
					<ExpandMoreIcon />
				</IconButton> */}
				<Button
					className={classes.bookButton}
					color="secondary"
					onClick={() => handleBookClick(link)}
					aria-label="book"
				>
					Book
				</Button>
			</CardActions>
			{/* <Collapse in={expanded} timeout="auto" unmountOnExit>
				<CardContent>
					<Typography paragraph>{longDescription}</Typography>
				</CardContent>
			</Collapse> */}
		</Card>
	)
}

export default ClassCard
