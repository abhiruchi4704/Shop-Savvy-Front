import axios from "axios";


const URL = "http://localhost:9090/signup";

class SignUpService{
    saveUser(user){
        return axios.post(URL,user)
    }

}

export default new SignUpService()