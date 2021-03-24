require("dotenv").config();

exports.buildPath = function ( route )
{
    const app_name = 'cop4331-10';
    if (process.env.NODE_ENV === 'production') 
    {
        return 'https://' + app_name +  '.herokuapp.com/' + route;
    }
    else
    {        
        return 'http://localhost:5000/' + route;
    }
}