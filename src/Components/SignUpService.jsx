import axios from "axios";


const URL = "http://shopsavvy-env.eba-dg3qdgp9.ap-south-1.elasticbeanstalk.com/signup";

class SignUpService{
    saveUser(user){
        return axios.post(URL,user)
    }

}

export default new SignUpService()