import React, { Fragment, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';
import { useParams } from 'react-router-dom';
import db from '../../firebase';

const Detail = () => {
	const { id } = useParams();
	const [movie, setMovie] = useState();

	useEffect(() => {
		db.collection('movies')
			.doc(id)
			.get()
			.then(doc => {
				if (doc.exists) {
					setMovie(doc.data());
				} else {
					// Go back home
					console.log('doesnt exist');
				}
			});
	}, [id]);

	return (
		<Container>
			{!movie ? (
				<Spinner>
					<CircularProgress />
				</Spinner>
			) : (
				<Fragment>
					<Background>
						<img src={movie.backgroundImg} alt="" />
					</Background>
					<ImageTitle>
						<img src={movie.titleImg} alt="" />
					</ImageTitle>

					<Controls>
						<PlayButton>
							<img src="/images/play-icon-black.png" alt="" />
							<span>PLAY</span>
						</PlayButton>

						<TrailerButton>
							<img src="/images/play-icon-white.png" alt="" />
							<span>TRAILER</span>
						</TrailerButton>

						<AddButton>
							<span>+</span>
						</AddButton>

						<GroupWatchButton>
							<img src="/images/group-icon.png" alt="" />
						</GroupWatchButton>
					</Controls>

					<SubTitle>{movie.subTitle}</SubTitle>

					<Description>{movie.description}</Description>
				</Fragment>
			)}
		</Container>
	);
};

export default Detail;

const Container = styled.div`
    min-height: calc(100vh - 70px);
    padding 0 calc(3.5vw + 5px);
    position: relative;
`;

const Background = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -1;
	opacity: 0.79;

	img {
		width: 100%;
		height: 100%;
		oobject-fit: cover;
	}
`;

const ImageTitle = styled.div`
	height: 30vh;
	width: 35vw;
	min-height: 170px;
	min-width: 200px;
	margin-top: 60px;

	img {
		width: 100%;
		height: 100%;
		object-fit: contain;
	}
`;

const Controls = styled.div`
	display: flex;
	align-items: center;
`;

const PlayButton = styled.button`
	border-radius: 4px;
	font-size: 15px;
	display: flex;
	align-items: center;
	height: 56px;
	border: 0;
	background: rgb(249, 249, 249);
	padding: 0 24px;
	margin-right: 22px;
	letter-spacing: 1.8px;
	cursor: pointer;

	&:hover {
		background: rgb(198, 198, 198);
	}
`;

const TrailerButton = styled(PlayButton)`
	background: rgba(0, 0, 0, 0.3);
	border: 1px solid rgb(249, 249, 249);
	color: rgb(249, 249, 249);
`;

const AddButton = styled.button`
	height: 44px;
	width: 44px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 50%;
	border: 2px solid #fff;
	background: rgba(0, 0, 0, 0.6);
	cursor: pointer;
	margin-right: 16px;

	span {
		font-size: 24px;
		color: #fff;
	}
`;
const GroupWatchButton = styled(AddButton)`
	background: rgb(0, 0, 0);
`;

const SubTitle = styled.div`
	color: rgb(249, 249, 249);
	font-size: 15px;
	margin-top: 26px;
	min-height: 20px;
`;

const Description = styled.div`
	line-height: 1.4;
	font-size: 20px;
	margin-top: 16px;
	color: rgb(249, 249, 249);
	max-width: 760px;
`;

const Spinner = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 200px;
`;
