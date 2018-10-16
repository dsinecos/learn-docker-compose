## Setup

### For Development Environment

1. Build Image
   `docker build -f Dockerfile.dev -t dsinecos/node-project-boilerplate .`

2. Run container
   `docker run -it -v /usr/app/node_modules -v $(pwd):/usr/app --name=node-project-boilerplate dsinecos/node-project-boilerplate`

3. Run a shell process inside the container
   - Open another terminal
   - `docker exec -it node-project-boilerplate sh`