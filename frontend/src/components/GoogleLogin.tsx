/* eslint-disable @typescript-eslint/no-explicit-any */
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';

interface CredentialResponse {
    credential: string;
}

const GoogleLoginForm = () => {
    const handleSuccess = (credentialResponse: any) => {
        const decodedResponse = jwtDecode<CredentialResponse>(credentialResponse.credential);
        console.log(decodedResponse);
    }

    const handleError = () => {
        console.log('Login Failed');
    }

    return (
        <GoogleLogin
            onSuccess={handleSuccess}
            onError={handleError}
        />
    )
}

export default GoogleLoginForm;
