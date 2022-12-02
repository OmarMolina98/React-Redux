import { useSelector, useDispatch } from "react-redux";
import { setUser, unsetUser} from "./reducers/user/userSlice";

export const App = () => {
  const dispatch=useDispatch();
  const {email, fullName} = useSelector(state => state.user);
  return(
    <div className="container">
      <h1>Hello World</h1>
      <h2>{fullName}</h2>
      <p>El email es: {email} </p>
      <button 
        className="btn btn-primary"
        onClick={()=>{
            dispatch(setUser({
              email: "omar@gmail.com",
              fullName:"Omar Molina",
              token: "12345"
            }))
        }}
      >Cambiar User</button>

    <button className="btn btn-primary"
        onClick={() => dispatch(unsetUser())}
      >
        Unset User
      </button>
    </div>
  )
}