import React from 'react'

const Node = () => {
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div>
                        <p className='text-lg text-center'>Dockerizing the NodeJS Application</p>
                    </div>
                    <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                        <div>
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm text-red-400">
                                    <p className='text-white text-sm'># Use the official Node.js image as a base image</p>
                                    FROM node:18-alpine as build {"\n"}
                                    <p className='text-white text-sm'># Set the working directory in the container</p>
                                    WORKDIR /usr/src/app {"\n"}
                                    <p className='text-white text-sm'># Copy package.json and package-lock.json to the container</p>
                                    COPY package*.json ./
                                    <p className='text-white text-sm'># Install dependencies</p>
                                    RUN npm install {"\n"}
                                    <p className='text-white text-sm'># Copy the rest of the application code to the container</p>
                                    COPY . . {"\n"}
                                    <p className='text-white text-sm'># Expose port 5000</p>
                                    EXPOSE 5000 {"\n"}
                                    <p className='text-white text-sm'># Start the NodeJS development server</p>
                                    CMD ["node", "index.js"] {"\n"}

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
                                        as the base image for building the NodeJS application.
                                    </li>

                                </ul>
                            </li>

                            <li className='list-decimal'>
                                Building the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The working directory within the container is set to  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` /usr/src/app  `</strong> using <strong className='text-md font-medium text-red-400 cursor-pointer'>` WORKDIR /usr/src/app  `</strong> .
                                        This directory serves as the primary location for the application source code and build artifacts.
                                    </li>
                                    <li className='list-disc'>
                                        Dependencies are installed via  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` RUN npm install `</strong> , which looks for <strong className='text-md font-medium text-red-400 cursor-pointer'>` package.json `</strong> and <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` package-lock.json `</strong> files copied into the container.

                                    </li>
                                    <li className='list-disc'>
                                        The Angular application code is copied into the container with <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` COPY . . `</strong>.

                                    </li>
                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Runtime Environment:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        Port 5000 is exposed using <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` EXPOSE 5000 `</strong> , enabling access to the NodeJS application over the web.
                                    </li>
                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Starting the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` CMD ["node", "index.js"]   `</strong> instruction specifies the command to start the NodeJS Application and
                                        run the application when the container is launched.
                                    </li>
                                </ol>
                            </li>

                        </ol>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-center'>To build the Docker image using this Dockerfile, follow these steps:</p>
                        <ol className='list-decimal px-5 mt-3'>
                            <li>Ensure that you have Docker installed and running on your machine.</li>
                            <li>Navigate to the directory containing your Dockerfile and the NodeJS project files.</li>
                            <li>Open a terminal or command prompt in that directory.</li>
                            <li>Run the following command to build the Docker image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker build -t node-app-image .
                            </div>
                            <li>Once the image is built successfully, you can run a container based on that image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker run -d -p 5000:5000 node-app-image
                            </div>
                            <li>Access your NodeJS application by opening a web browser and navigating to <strong className='text-md font-medium text-red-400 cursor-pointer'> http://localhost:5000 </strong>.</li>
                            <li>Refer the Github Project</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                <a
                                    href='https://github.com/Manojkumar1709/Node-Application.git'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    https://github.com/Manojkumar1709/Node-Application.git
                                </a>
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Node
