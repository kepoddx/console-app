import axios from 'axios';
import { AxiosRequestConfig } from 'axios';
/**
 * response.data | .status | .statusText | .headers | .config
 * 
 */
export class HttpUtil {
     config: Object
    
    
     constructor(config){
        this.config = config || {};
    }


    get(url: string, config?: AxiosRequestConfig){

        if(!config) { return axios.get(url)}
        
        return axios.get(url, config);
    }
    
    post(url: string, config?: AxiosRequestConfig){

        if(!config) { return axios.post(url)}
        
        return axios.post(url, config);
    }

    put(url: string, config?: AxiosRequestConfig){

        if(!config) { return axios.put(url)}
        
        return axios.put(url, config);
    }

    delete(url: string, config?: AxiosRequestConfig){

        if(!config) { return axios.delete(url)}
        
        return axios.delete(url, config);
    }

    static sget(url: string, config?: AxiosRequestConfig){

        if(!config) { return axios.get(url)}
        
        return axios.get(url, config);
    }
    
    static spost(url: string, config?: AxiosRequestConfig){

        if(!config) { return axios.post(url)}
        
        return axios.post(url, config);
    }

    static sput(url: string, config?: AxiosRequestConfig){

        if(!config) { return axios.put(url)}
        
        return axios.put(url, config);
    }

    static sdelete(url: string, config?: AxiosRequestConfig){

        if(!config) { return axios.delete(url)}
        
        return axios.delete(url, config);
    }

    static create(config){
        return axios.create(config);
    }
}

