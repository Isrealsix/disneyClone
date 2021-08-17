import React from 'react';
import styled from 'styled-components';

const Header = () => {
	return (
		<Nav>
			<Logo src="/images/logo.svg" />
			<NavMenu>
				<a>
					<img src="/images/home-icon.svg" alt="" />
					<span>HOME</span>
				</a>

				<a>
					<img src="/images/search-icon.svg" alt="" />
					<span>SEARCH</span>
				</a>

				<a>
					<img src="/images/watchlist-icon.svg" alt="" />
					<span>WATCHLIST</span>
				</a>

				<a>
					<img src="/images/original-icon.svg" alt="" />
					<span>ORIGINALS</span>
				</a>

				<a>
					<img src="/images/movie-icon.svg" alt="" />
					<span>MOVIES</span>
				</a>

				<a>
					<img src="/images/series-icon.svg" alt="" />
					<span>SERIES</span>
				</a>
			</NavMenu>

			<UserImg src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80" />
		</Nav>
	);
};

export default Header;

const Nav = styled.nav`
	height: 70px;
	background-color: #090b13;
	display: flex;
	align-items: center;
	padding: 0 36px;
`;

const Logo = styled.img`
	width: 80px;
`;

const NavMenu = styled.div`
	display: flex;
	flex: 1;
	margin-left: 25px;
	align-items: center;

	a {
		display: flex;
		align-items: center;
		padding: 0 12px;
		cursor: pointer;

		img {
			height: 20px;
		}

		span {
			font-size: 13px;
			letter-spacing: 1.42px;
			position: relative;

			&:after {
				content: '';
				height: 2px;
				background-color: #fff;
				position: absolute;
				bottom: -6px;
				left: 0;
				right: 0;
				opacity: 0;
				transform: scaleX(0);
				transform-origin: left center;
				transition: all 0.3s;
			}
		}

		&:hover span:after {
			opacity: 1;
			transform: scaleX(1);
		}
	}
`;

const UserImg = styled.img`
	width: 48px;
	height: 48px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;
`;
