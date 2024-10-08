import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage/MainPage';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AuthPage from './pages/AuthPage/AuthPage';
import App from './App';
import MoviePage from './pages/MoviePage/MoviePage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App/>,
		children: [{
			path: '/',
			element: <MainPage/>
		},
		{
			path: '/favorites',
			element: <FavoritesPage/>
		},
		{
			path: '/login',
			element: <AuthPage/>
		},
		{
			path: '/movie/:id',
			element: <MoviePage/>
		},
		{
			path: '*',
			element: <ErrorPage/>
		}]
	}
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router}/>
	</StrictMode>
);
