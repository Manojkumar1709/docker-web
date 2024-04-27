import React from 'react'

const GoLang = () => {
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div>
                        <p className='text-lg text-center'>Dockerizing the GoLang Application</p>
                    </div>
                    <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                        <div>
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm text-red-400">
                                    <p className='text-white text-sm'># Use the official golang image to create a build artifact.</p>
                                    FROM golang:1.21.5 AS builder {"\n"}
                                    <p className='text-white text-sm'># Copy local code to the container image.</p>
                                    WORKDIR /app {"\n"}
                                    COPY . . {"\n"}
                                    <p className='text-white text-sm'># Build the Go app</p>
                                    RUN CGO_ENABLED=0 GOOS=linux go build -o app . {"\n"}
                                    <p className='text-white text-sm'># Use a minimal alpine image to run the app.</p>
                                    FROM alpine:latest {"\n"}
                                    <p className='text-white text-sm'># Copy the binary to the production image from the builder stage.</p>
                                    WORKDIR /root/ {"\n"}
                                    COPY --from=builder /app/app . {"\n"}
                                    <p className='text-white text-sm'># Copy the HTML file to the production image.</p>
                                    COPY --from=builder /app/index.html . {"\n"}
                                    <p className='text-white text-sm'># Command to run the executable</p>
                                    CMD ["./app"] {"\n"}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className='mt-4 px-5'>
                        <ol>

                            <li className='list-decimal'>Base Image:
                                <ul className='px-5'>
                                    <li className='list-disc'>
                                        The official  <strong className='text-md font-medium text-red-400 cursor-pointer'>` golang:1.21.5 `</strong> image is
                                        used as the base image for building the GoLang application. This image includes the GoLang runtime and tools necessary
                                        for compiling and running GoLang code.
                                    </li>
                                </ul>
                            </li>

                            <li className='list-decimal'>
                                Building the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The working directory within the container is set to  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` /app `</strong> .This directory serves as the primary location for the application source code and build artifacts.
                                    </li>
                                    <li className='list-disc'>
                                        The GoLang application code is copied into the container with <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` COPY . . `</strong>.
                                    </li>
                                    <li className='list-disc'>
                                        The Go application is built within the container using the command <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` RUN CGO_ENABLED=0 GOOS=linux go build -o app `</strong> .This command compiles the Go code into a binary named <strong className='text-md font-medium text-red-400 cursor-pointer'>` app `</strong> , disabling
                                        CGO and targeting the Linux OS.

                                    </li>
                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Starting the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` CMD ["./app"]  `</strong> instruction specifies the command to start the GoLang Application and
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
                            <li>Navigate to the directory containing your Dockerfile and the GoLang project files.</li>
                            <li>Open a terminal or command prompt in that directory.</li>
                            <li>Run the following command to build the Docker image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker build -t golang-app-image .
                            </div>
                            <li>Once the image is built successfully, you can run a container based on that image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker run -d -p 5000:5000 golang-app-image
                            </div>
                            <li>Access your GoLang application by opening a web browser and navigating to <strong className='text-md font-medium text-red-400 cursor-pointer'> http://localhost:5000 </strong>.</li>
                            <li>Refer the Github Project</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                <a
                                    href='https://github.com/Manojkumar1709/GoLang-Application.git'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    https://github.com/Manojkumar1709/GoLang-Application.git
                                </a>
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GoLang
