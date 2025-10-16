import axios from 'axios';

class LoginService{

    login(loginParams){
        return axios.post("https://moviesystem-backend.onrender.com/api/login", loginParams);
    }

    logout(){
        return axios.get("https://moviesystem-backend.onrender.com/api/logout");
    }

}

export default new LoginService();
