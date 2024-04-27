import React from 'react'

const ReactApp = () => {
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div>
                        <p className='text-lg text-center'>Dockerizing the React Application</p>
                    </div>
                    <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                        <div>
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm text-red-400">
                                    <p className='text-white text-sm'># Use the official Node.js image as a base image</p>
                                    FROM node:18-alpine as build {"\n"}
                                    <p className='text-white text-sm'># Set the working directory in the container</p>
                                    WORKDIR /app {"\n"}
                                    <p className='text-white text-sm'># Copy package.json and package-lock.json to the container</p>
                                    COPY package*.json ./
                                    <p className='text-white text-sm'># Install dependencies</p>
                                    RUN npm install {"\n"}
                                    <p className='text-white text-sm'># Copy the rest of the application code to the container</p>
                                    COPY . . {"\n"}
                                    <p className='text-white text-sm'># Build the React app for production</p>
                                    RUN npm run build {"\n"}
                                    <p className='text-white text-sm'># Use nginx as the production server</p>
                                    FROM nginx:alpine {"\n"}
                                    <p className='text-white text-sm'># Copy the built React app from the previous stage to the nginx server</p>
                                    COPY --from=build /app/build /usr/share/nginx/html {"\n"}
                                    <p className='text-white text-sm'># Expose port 80</p>
                                    EXPOSE 80 {"\n"}
                                    <p className='text-white text-sm'># Start nginx when the container starts</p>
                                    CMD ["nginx", "-g", "daemon off;"] {"\n"}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className='mt-4 px-5'>
                        <ol>

                            <li className='list-decimal'>Base Image:
                                <ul className='px-5'>
                                    <li className='list-disc'>
                                        The  <strong className='text-md font-medium text-red-400 cursor-pointer'>` node:18-alpine `</strong> is used
                                        as the base image for building the React application. This image contains Node.js with a smaller footprint since
                                        Alpine Linux is used as the base.
                                    </li>

                                </ul>
                            </li>

                            <li className='list-decimal'>
                                Building the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The working directory within the container is set to  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` /app `</strong> using <strong className='text-md font-medium text-red-400 cursor-pointer'>` WORKDIR /app `</strong> .
                                        This directory serves as the primary location for the application source code and build artifacts.
                                    </li>
                                    <li className='list-disc'>
                                        Dependencies are installed via  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` RUN npm install `</strong> , which looks for <strong className='text-md font-medium text-red-400 cursor-pointer'>` package.json `</strong> and <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` package-lock.json `</strong> files copied into the container.

                                    </li>
                                    <li className='list-disc'>
                                        The React application code is copied into the container with <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` COPY . . `</strong>. This includes all JavaScript, CSS, and static assets needed to build and run the application.

                                    </li>
                                    <li className='list-disc'>
                                        The application is built for production using  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` RUN npm run build `</strong> .

                                    </li>
                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Runtime Environment:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        Switching to a lightweight <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` nginx:alpine `</strong> image for serving the built React application.
                                    </li>
                                    <li className='list-disc'>
                                        The built React application files from the  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` /app/build `</strong> directory are copied to the Nginx serving directory <strong className='text-md font-medium text-red-400 cursor-pointer'>` package.json `</strong> and <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` /usr/share/nginx/html `</strong> . This allows Nginx to serve the React application as static files to users.

                                    </li>
                                    <li className='list-disc'>
                                        Port 80 is exposed using <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` EXPOSE 80 `</strong> , enabling access to the React application over the web.

                                    </li>
                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Starting the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The application is served using Nginx, initiated by the command  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` CMD ["nginx", "-g", "daemon off;"] `</strong> .
                                    </li>
                                </ol>
                            </li>

                        </ol>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-center'>To build the Docker image using this Dockerfile, follow these steps:</p>
                        <ol className='list-decimal px-5 mt-3'>
                            <li>Ensure that you have Docker installed and running on your machine.</li>
                            <li>Navigate to the directory containing your Dockerfile and the React project files.</li>
                            <li>Open a terminal or command prompt in that directory.</li>
                            <li>Run the following command to build the Docker image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker build -t react-app-image .
                            </div>
                            <li>Once the image is built successfully, you can run a container based on that image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker run -d -p 3000:80 react-app-image
                            </div>
                            <li>Access your React application by opening a web browser and navigating to <strong className='text-md font-medium text-red-400 cursor-pointer'> http://localhost:3000 </strong>.</li>
                            <li>Refer the Github Project</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                <a
                                    href='https://github.com/Manojkumar1709/React-App.git'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    https://github.com/Manojkumar1709/React-App.git
                                </a>
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReactApp
