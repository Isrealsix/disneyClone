import React from 'react';
import styled from 'styled-components';

const Movies = () => {
	return (
		<Container>
			<h4>Recommended for You</h4>
			<Content>
				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>

				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>

				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>

				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>

				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>

				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>

				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>

				<Wrap>
					<img
						src="https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6A7F6C940FBD19A243E207069D16077FF0E53A519ED7D4892E7B8762834B74A6/scale?width=400&aspectRatio=1.78&format=jpeg"
						alt=""
					/>
				</Wrap>
			</Content>
		</Container>
	);
};

export default Movies;

const Container = styled.div``;

const Content = styled.div`
	display: grid;
	grid-gap: 25px;
	grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
	border-radius: 10px;
	overflow: hidden;
	border: 3px solid rgba(249, 249, 249, 0.1);
	box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
		rgb(0 0 0 / 73%) 0 16px 10px -10px;
	transition: all 0.3s;
	cursor: pointer;

	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	&:hover {
		transform: scale(1.05);
		border-color: rgba(248, 248, 248, 0.7);
		box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
			rgb(0 0 0 / 72%) 0 30px 22px -10px;
	}
`;
