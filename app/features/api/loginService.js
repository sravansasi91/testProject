'use strict';

export default async function loginService(success, failure) {
    //alert("api call")
    try {
        
        const response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Dubai');    //'https://reactnative.dev/movies.json');
        const json = await response.json();
        //alert("Login Success, Api Response = " + JSON.stringify(json))
        success(json)
    } catch (error) {
        console.log(error);
        failure(error)
    } finally {
    }
}