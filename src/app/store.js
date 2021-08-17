import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/movie/movieSlice';

// import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
	reducer: {
		movie: movieReducer,
	},
});
