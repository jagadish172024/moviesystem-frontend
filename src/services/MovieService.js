import axios from "axios";
class MovieService{

    createMovie(formData){
        return axios.post("https://moviesystem-backend.onrender.com/api/movie/createMovie", formData);
    }

    getAllMovies(){
        return axios.get("https://moviesystem-backend.onrender.com/api/movie/getAllMovies");
    }

    updateMovie(movie){
        return axios.put("https://moviesystem-backend.onrender.com/api/movie/updateMovie", movie);
    }

    deleteMovie(movieId){
        return axios.delete("https://moviesystem-backend.onrender.com/api/movie/deleteMovie/" + movieId)
    }
}


export default new MovieService();
