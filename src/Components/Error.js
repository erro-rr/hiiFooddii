import { useRouteError } from "react-router-dom";

const Error= ()=>{
    const err=useRouteError();
    console.log(err);
    return(
        <div>
            <h1>Oops!!</h1>
            <h3>Something Went worng</h3>
            <h3>{err.status +":"+ err.statustext}</h3>
        </div>
    )
}

export default Error;