import React from 'react'

const Django = () => {
    return (
        <div>
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div>
                        <p className='text-lg text-center'>Dockerizing the Django Application</p>
                    </div>
                    <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                        <div>
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm text-red-400">
                                    <p className='text-white text-sm'># Use an official Python runtime as a parent image</p>
                                    FROM python:3.11-slim-buster {"\n"}
                                    <p className='text-white text-sm'># Set the working directory in the container</p>
                                    WORKDIR /app
                                    <p className='text-white text-sm'># Copy the requirements file</p>
                                    COPY requirements.txt requirements.txt {"\n"}
                                    <p className='text-white text-sm'># Install any needed packages specified in requirements.txt</p>
                                    RUN pip3 install -r requirements.txt {"\n"}
                                    <p className='text-white text-sm'># Copy the current directory contents into the container</p>
                                    COPY . . {"\n"}
                                    <p className='text-white text-sm'># Define the command to run your server</p>
                                    CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000"] {"\n"}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className='mt-4 px-5'>
                        <ol>

                            <li className='list-decimal'>Base Image:
                                <ul className='px-5'>
                                    <li className='list-disc'>
                                        The  <strong className='text-md font-medium text-red-400 cursor-pointer'>` python:3.10-slim-buster `</strong> is used
                                        as the base image for building the Django application.
                                    </li>

                                </ul>
                            </li>

                            <li className='list-decimal'>
                                Building the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The working directory within the container is set to  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` /app  `</strong> using <strong className='text-md font-medium text-red-400 cursor-pointer'>` WORKDIR /app  `</strong> .
                                        This directory serves as the primary location for the application source code and build artifacts.
                                    </li>
                                    <li className='list-disc'>
                                        Copying the requirements.txt file to the container <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` COPY requirements.txt requirements.txt  `</strong> 
                                    </li>
                                    <li className='list-disc'>
                                        Dependencies are installed via  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` RUN pip3 install -r requirements.txt `</strong> , which installs the Python packages listed in <strong className='text-md font-medium text-red-400 cursor-pointer'>` requirements.txt `</strong> into the container.
                                    </li>
                                    <li className='list-disc'>
                                        The Django application code is copied into the container with  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` COPY . . `</strong>.
                                    </li>
                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Runtime Environment:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        Port 8000 is exposed using <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` EXPOSE 8000 `</strong> , enabling access to the Django application over the web.
                                    </li>
                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Starting the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The  <strong className='text-md font-medium text-red-400 cursor-pointer'>
                                            ` CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"] `</strong>  instruction specifies the command to start the Django development server and run the
                                        application when the container is launched.
                                    </li>
                                </ol>
                            </li>

                        </ol>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-center'>To build the Docker image using this Dockerfile, follow these steps:</p>
                        <ol className='list-decimal px-5 mt-3'>
                            <li>Ensure that you have Docker installed and running on your machine.</li>
                            <li>Navigate to the directory containing your Dockerfile and the Django project files.</li>
                            <li>Open a terminal or command prompt in that directory.</li>
                            <li>Run the following command to build the Docker image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker build -t django-app-image .
                            </div>
                            <li>Once the image is built successfully, you can run a container based on that image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker run -d -p 8000:8000 django-app-image
                            </div>
                            <li>Access your Django application by opening a web browser and navigating to <strong className='text-md font-medium text-red-400 cursor-pointer'> http://localhost:8000 </strong>.</li>
                            <li>Refer the Github Project</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                <a
                                    href='https://github.com/Manojkumar1709/Django-Web-App.git'
                                    target='_blank'
                                    rel="noreferrer"
                                >
                                    https://github.com/Manojkumar1709/Django-Web-App.git
                                </a>
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Django
