# BeKindlyTodayFrontend

The BeKindly.Today kindness challenge app.

## Developers

### Getting set up

### Environment Variables

Development environment variables should be stored in a file in the root directory named `.env.dev`.\
This file will not be tracked by git and is unique to your local directory.\

#### Environment Variables

- DATABASE_URL
  - <span style="color:yellow;">**Required**</span>
  - Contains the url of the postgres docker container
- PORT
  - <span style="color:yellow;">**Required For Development**</span>
  - Contains the port used for the backend
- POSTGRES_PASSWORD
  - <span style="color:yellow;">**Required**</span>
  - Contains the password used for the postgres database
- FRONTEND_PORT
  - <span style="color:yellow;">**Required**</span>
  - Contains the port used for the frontend
- BACKEND_URL
  - <span style="color:yellow;">**Required**</span>
  - Contains the url of the backend
- VITE_ENVIROMENT
  - <span style="color:yellow;">**Required**</span>
  - Sets the enviroment to know whether to use authentication or not

### Starting the server

- Configure env vars
  - an example env var file has been provided (.env.example)
  - if you rename .env.example to .env.dev, docker will run correctly
- Run compose
  - Run `npm run docker-dev`
  - This command will run the docker-compose file and run the frontend, backend, and database.
