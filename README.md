# BeKindlyTodayFrontend

The BeKindly.Today kindness challenge app.

## Developers

### Getting set up

### Environment Variables

Development environment variables should be stored in a file in the root directory named `.env.dev`.\
This file will not be tracked by git and is unique to your local directory.\
The Kinde Stuff will not work without setting up an accout, but if you make the VITE_ENVIRONMENT = dev all the kinde stuff should be turned off

#### Environment Variables

- DATABASE_URL
  - <span style="color:yellow;">**Required**</span>
  - Contains the url of the postgres docker container
- VITE_PORT
  - <span style="color:yellow;">**Required For Development**</span>
  - Contains the port used for the backend
- POSTGRES_PASSWORD
  - <span style="color:yellow;">**Required**</span>
  - Contains the password used for the postgres database
- FRONTEND_PORT
  - <span style="color:yellow;">**Required**</span>
  - Contains the port used for the frontend
- VITE_BACKEND_URL
  - <span style="color:yellow;">**Required**</span>
  - Contains the url of the backend
- VITE_ENVIRONMENT
  - <span style="color:yellow;">**Required**</span>
  - Sets the enviroment to know whether to use authentication or not
- VITE_BACKEND_URL
  - Contains the url of the backend (accessable in code)
- VITE_KINDE_FRONTEND_CLIENT_ID
  - The ID of the client on Kinde
- VITE_KINDE_DOMAIN
  - The URL of the website on Kinde's subdomain
- VITE_KINDE_REDIRECT_URL
  - The redirect URLs where the user can be sent after authenticating
- VITE_KINDE_LOGOUT_URL
  - The redirect URLs where the user can be sent after logging out

### Starting the server

- Configure env vars
  - an example env var file has been provided (.env.example)
  - if you rename .env.example to .env.dev, docker will run correctly
- Run compose
  - Run `npm run docker-dev`
  - This command will run the docker-compose file and run the frontend, backend, and database.
