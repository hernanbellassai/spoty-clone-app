
import spoty from "./spoty.jpg";
import "./Login.css";
import { loginUrl} from "./spotify";





function Login() {
 

  return (
    <div className="login">

     
          <img src={spoty} alt="" />
    
          <a href={loginUrl}>Login whith spoty</a>
    </div>
  );
}

export default Login;
