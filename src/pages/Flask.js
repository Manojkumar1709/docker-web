import React from 'react'

const Flask = () => {
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div>
                        <p className='text-lg text-center'>Dockerizing the Python Flask Application</p>
                    </div>
                    <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                        <div>
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm text-red-400">
                                    <p className='text-white text-sm'># Use a base image with Python 3.9 Slim installed</p>
                                    FROM python:3.9-slim {"\n"}
                                    <p className='text-white text-sm'># Set the working directory in the container</p>
                                    WORKDIR /app {"\n"}
                                    <p className='text-white text-sm'># Copy the current directory contents into the container at /app</p>
                                    COPY . /app
                                    <p className='text-white text-sm'># Install Flask and other dependencies</p>
                                    RUN pip install --no-cache-dir Flask {"\n"}
                                    <p className='text-white text-sm'># Expose the port Flask is running on</p>
                                    EXPOSE 5000 {"\n"}
                                    <p className='text-white text-sm'># Define the command to run your application</p>
                                    CMD ["python", "app.py"] {"\n"}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className='mt-4 px-5'>
                        <ol>

                            <li className='list-decimal'>Building the Application:
                                <ul className='px-5'>
                                    <li className='list-disc'>
                                        The  <strong className='text-md font-medium text-red-400 cursor-pointer'>` python:3.9-slim `</strong> image
                                        is used as the base image for building the application.
                                    </li>
                                    <li className='list-disc'>
                                        The current directory contents are copied into the container's working directory <strong className='text-md font-medium text-red-400 cursor-pointer'>` /app ` </strong>.
                                    </li>
                                    <li className='list-disc'>
                                        Flask and any other dependencies are installed using pip.
                                    </li>
                                    <li className='list-disc'>
                                        Port 5000 is exposed to allow outside access to the Flask server.
                                    </li>
                                    <li className='list-disc'>
                                        The command to run the application <strong className='text-md font-medium text-red-400 cursor-pointer'>` (python app.py) `</strong> is defined as the default command to execute when the container starts.
                                    </li>

                                </ul>
                            </li>

                            <li className='list-decimal'>
                                Runtime Environment:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The built Flask application runs directly in the same container without additional setup.
                                    </li>
                                    <li className='list-disc'>
                                        Exposing port <strong className='text-md font-medium text-red-400 cursor-pointer'> 5000 </strong> allows external clients to access the Flask application.
                                    </li>

                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Starting the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The <strong className='text-md font-medium text-red-400 cursor-pointer'>` CMD ["python", "app.py"] `</strong> instruction specifies the command to start the Flask server and run the application
                                        when the container is launched. This command runs the Python interpreter with the argument <strong className='text-md font-medium text-red-400 cursor-pointer'>` app.py `</strong>, which is the entry
                                        point of the Flask application.
                                    </li>
                                </ol>
                            </li>
                        </ol>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-center'>To build the Docker image using this Dockerfile, follow these steps:</p>
                        <ol className='list-decimal px-5 mt-3'>
                            <li>Ensure that you have Docker installed and running on your machine.</li>
                            <li>Navigate to the directory containing your Dockerfile and the Flask project files.</li>
                            <li>Open a terminal or command prompt in that directory.</li>
                            <li>Run the following command to build the Docker image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker build -t flask-app .
                            </div>
                            <li>Once the image is built successfully, you can run a container based on that image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker run -d -p 5000:5000 flask-app
                            </div>
                            <li>Access your Flask application by opening a web browser and navigating to <strong className='text-md font-medium text-red-400 cursor-pointer'> http://localhost:5000 </strong>.</li>
                            <li>Refer the Github Project</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                <a
                                    href='https://github.com/Manojkumar1709/Flask-Application.git'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    https://github.com/Manojkumar1709/Flask-Application.git
                                </a>
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flask
