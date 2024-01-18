export const url = import.meta.env.VITE_APP_API_URL;

export const headers = { 
    'Content-Type' : 'application/json',
    'Host'         : 'api.devdicio.net',
    'xc-token'     : import.meta.env.VITE_APP_API_TOKEN
};