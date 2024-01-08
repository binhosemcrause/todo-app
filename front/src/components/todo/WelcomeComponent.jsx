import {useParams, Link} from 'react-router-dom'
import { useState } from 'react';
import { retriveHelloWorldPathVariable } from './api/HelloWorldRestApiService';
import { useAuth } from './security/AuthContext';

function WelcomeComponent(){

    const {username} = useParams();

    const authContext = useAuth()

    const [message, seMessage] = useState(null)

    function callHelloWorldRestApi(){
        console.log("called")

        retriveHelloWorldPathVariable('moby1', authContext.token)
            .then((response) => successfulResponse(response))
            .catch( (error) => errorResponse(error))
            .finally( () => console.log("cleanup"))
    }

    function successfulResponse(response){
        console.log(response)
        seMessage(response.data.message)
    }

    function errorResponse(error){
        console.log(error)
    }

    return (
        <div className="Welcome">
            <h1>Welcome {username}</h1>
            <div>
                Manage your todos - <Link to='/todos'>Go here</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>
                    Call Hello World REST API</button>
            </div>
            <div className="text-info">{message}</div>
        </div>
    )
}

export default WelcomeComponent