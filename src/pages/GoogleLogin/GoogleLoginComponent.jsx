import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

export const GoogleLoginComponent = () => {
function handleCallbackResponse(response) {
  console.log('Encoded JWT ID token: ' + response.credential)
}

useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id:"502312599391-8s7c35o35jdrmvsmgrr7hramkjaktqja.apps.googleusercontent.com",
      callback: handleCallbackResponse
    });
  
  google.accounts.id.renderButton(
    document.getElementById("signInDiv"),
    {theme: "outline", size: "large"}
  );
}, []);
  return (
    <>
    <div className="google-login">
      <div id="signInDiv"></div>
    </div>
  
    </>
 
);
  
}
