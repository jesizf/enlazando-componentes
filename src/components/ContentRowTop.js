import React from 'react';
import GenresInDb from './GenresInDb';
import ContentRowMovies from './ContentRowMovies';
import Chart from './Chart';
import LastMovieInDb from './LastMovieInDb'


import { Route, Routes } from 'react-router-dom';


function ContentRowTop() {
	return (
		<div className="container-fluid">
			<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
				<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
			</div>
			
			<ContentRowMovies />
				<Routes>
					<Route exact path="/" element={<ContentRowMovies />} />
					
					<Route exact path="/lastmovies" element={<LastMovieInDb />} />
					<Route exact path="/genres" element={<GenresInDb />} />
					<Route exact path="/movies" element={<Chart />} />
									
				</Routes>


		</div>
	)

}
export default ContentRowTop;