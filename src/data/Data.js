export const data = [
    {cmd:'docker --version', desc:'This command returns the latest version of Docker installed'},
    {cmd:'docker pull [image_name]', desc:'This command pulls a new Docker image from the Docker Hub'},
    {cmd:'docker ps', desc:'How many Containers are running'},
    {cmd:'docker run', desc:'This commands executes a Docker image on your local machine and creates a running container out of it'},
    {cmd:'docker ps -a', desc:'All Containers which are running and exicted containers'},
    {cmd:'docker exec', desc:'Access the running containers and perform the operations inside the container'},
    {cmd:'docker stop', desc:'Stop the running containers'},
    {cmd:'docker kill [image_id]', desc:'Kill the running containers'},
    {cmd:'docker commit', desc:'This Creates a new image of a edited Containers on the local machine'},
    {cmd:'docker login', desc:'Login to Docker Hub'},
    {cmd:'docker push [user_name] / [docker_image]', desc:'push the image to Docker Hub'},
    {cmd:'docker images', desc:'List all the created images'},
    {cmd:'docker rm', desc:'Remove the Docker Containers'},
    {cmd:'docker rmi', desc:'Remove the one or more Docker images'},
    {cmd:'docker build', desc:'This command is used to compile the Dockerfile for building custom Docker images'},
    {cmd:'docker --help', desc:'This command returns a list of commands available in Docker along with their description'},
    {cmd:'docker container [logs, kill, rm, run, start] [container_name]', desc:'Performs operations on containers'},
    {cmd:'docker export', desc:'This command is used to export a Docker image into a tar file'},
    {cmd:'docker import', desc:'Import the Docker image from a tar file'},
    {cmd:'docker-compose [up, down, build]', desc:'Power multi-container applications where services will be hosted inside different containers'},
]