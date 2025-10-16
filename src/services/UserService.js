import axios from "axios";
class UserService{

    register(user){
        return axios.post("https://moviesystem-backend.onrender.com/api/user/registration", user);
    }

    getAllUsers(){
        return axios.get("https://moviesystem-backend.onrender.com/api/user/getAllUsers");
    }

}


export default new UserService();
