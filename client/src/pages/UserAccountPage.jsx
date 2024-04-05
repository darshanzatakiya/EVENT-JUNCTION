import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Navigate } from "react-router-dom";

    //*********************************************************************************************************************************************************
    // it take info. from uscontext if user is login in so it redirect to tge account page
    //********************************************************************************************************************************************************* 

export default function UserAccountPage() {
  const {user} = useContext(UserContext);

  if(!user){
    return <Navigate to={'/login'} />
  }

  return (
    <div>
      Account page for {user.name}
    </div>
  );
}
