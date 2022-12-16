import axios from 'axios';
import Base64 from './../utils/utils';
import {getCurrentUser} from './user';


const EasyMotorBackedURL ='';
const ClientName = '';
const ClientPassword = '';
const basicCreds = Base64.btoa(
  ClientName + ':' + ClientPassword,
);
const currentUser = async () => {
    let user = await getCurrentUser();
    if (user?.user) {
      return user?.user?.token;
    }
  };

const EasyMotor = () => {
 
    const responseHandler = response => {
      console.log('*********************** HTTP RESPONSE START ***********************');
      console.log('');
      console.log('');
      console.log('');
      console.log(' log request here', response);
      console.log('');
      console.log('');
      console.log('');
      console.log(
        '*********************** HTTP RESPONSE BODY ***********************',
      );
      console.log('');
      console.log('');
      console.log('');
      console.log(' log request here response.data', response.data);
      console.log('');
      console.log('');
      console.log('');
      console.log(
        '*********************** HTTP RESPONSE END ***********************',
      );
        if (response?.data?.status == 200) {
        console.log('Response Status', response.data.status);
        return response;
      }
      else {
        return response;
      }
    };
  
    const handleError = async error => {
      
      console.log('*********************** HTTP Response Error START ***********************');
      console.log('');
      console.log('');
      console.log('');
      console.log(' Response Error Here', error?.message);
      console.log('');
      console.log('');
      console.log('');
      console.log(
        '*********************** HTTP Response Error END ***********************',
      );
        if(error.response.status==401){
          
        }
       else if (!error?.response && error?.message == 'Network Error') {
        alert('Please Check Your Internet Connection.');
        throw error;
      } else if (error?.response?.status == 500) {
        alert('Internal Server Error.');
        throw error.response;
      } 
      else {
        console.log('error', error?.response);
        throw error.response;
      }
    };
  
    const instance = axios.create({
      baseURL: EasyMotorBackedURL
    });
    instance.interceptors.request.use(async config => {  
      console.log('*********************** SENDING HTTP REQUEST START ***********************');
      console.log('');
      console.log('');
      console.log('');
      console.log(' log request here', config);
      console.log('');
      console.log('');
      console.log('');
      console.log(
        '*********************** ENDING HTTP REQUEST END ***********************',
      );
      let token = null;
      switch (config.url) {
        case '/auth/signin':
        case '/auth/signup':
        case '/image':
          token = await currentUser();
          config.headers = {
            ...config.headers,
            Authorization: token ? 'Bearer ' + token : 'Basic ' + basicCreds,
          };
          break;
        default:
          token = await currentUser();
          config.headers = {
            ...config.headers,
            Authorization: 'Bearer ' + token,
          };
      }
      return config;
    });
  
    instance.interceptors.response.use(
      response => responseHandler(response),
      error => handleError(error),
    );
  
    return instance;
  };
  
  export {EasyMotor};