import React from 'react'

const Docker = () => {
    return (
        <div>
            <div class="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div>
                        <p className='text-lg text-center'>Dockerizing the Spring Boot Application</p>
                    </div>
                    <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                        <div>
                            <pre className="whitespace-pre-wrap">
                                <code className="text-sm text-red-400">
                                    <p className='text-white text-sm'># Use a base image with OpenJDK 17 installed</p>
                                    FROM openjdk:17-jdk-slim AS build {"\n"}
                                    <p className='text-white text-sm'># Set the working directory in the container</p>
                                    WORKDIR /app {"\n"}
                                    <p className='text-white text-sm'># Copy the Maven Wrapper script and the Maven configuration files</p>
                                    COPY mvnw . {"\n"}
                                    COPY mvnw.cmd . {"\n"}
                                    COPY .mvn .mvn {"\n"}
                                    COPY pom.xml . {"\n"}
                                    <p className='text-white text-sm'># Copy the source code</p>
                                    COPY src src {"\n"}
                                    <p className='text-white text-sm'># Ensure Maven Wrapper script is executable</p>
                                    RUN chmod +x mvnw {"\n"}
                                    <p className='text-white text-sm'># Build the application using Maven (skipping tests)</p>
                                    RUN ./mvnw package -DskipTests {"\n"}
                                    <p className='text-white text-sm'># Create a lightweight Docker image with Tomcat</p>
                                    FROM tomcat:9.0-jdk17-openjdk-slim {"\n"}
                                    <p className='text-white text-sm'># Copy the WAR file from the build stage to the Tomcat webapps directory</p>
                                    COPY --from=build /app/target/*.war /usr/local/tomcat/webapps/ {"\n"}
                                    <p className='text-white text-sm'># Expose port 8080</p>
                                    EXPOSE 8080 {"\n"}
                                    <p className='text-white text-sm'># Start Tomcat</p>
                                    CMD ["catalina.sh", "run"] {"\n"}
                                </code>
                            </pre>
                        </div>
                    </div>
                    <div className='mt-4 px-5'>
                        <ol>
                            <li className='list-decimal'>Multi-stage Build:
                                <ul className='px-5'>
                                    <li className='list-disc'>The Dockerfile uses multi-stage builds to separate the
                                        build environment <strong className='text-md font-medium text-red-400 cursor-pointer'>` (AS build) `</strong> from the runtime environment.</li>
                                    <li className='list-disc'>This approach reduces the final image size
                                        by discarding unnecessary build dependencies.</li>
                                </ul>
                            </li>

                            <li className='list-decimal'>Building the Application:
                                <ul className='px-5'>
                                    <li className='list-disc'>
                                        The  <strong className='text-md font-medium text-red-400 cursor-pointer'>` openjdk:17-jdk-slim `</strong> image
                                        is used as the base image for building the application.
                                    </li>
                                    <li className='list-disc'>
                                        Maven wrapper files <strong className='text-md font-medium text-red-400 cursor-pointer'>` (mvnw and mvnw.cmd) `</strong> along with Maven configuration files
                                        <strong className='text-md font-medium text-red-400 cursor-pointer'> ` (.mvn) `</strong> are copied into the container to enable building with Maven.
                                    </li>
                                    <li className='list-disc'>
                                        The project's metadata <strong className='text-md font-medium text-red-400 cursor-pointer'>` (pom.xml) `</strong> and
                                        source code <strong className='text-md font-medium text-red-400 cursor-pointer'>` (src)` </strong> are copied into the container.
                                    </li>
                                    <li className='list-disc'>
                                        Maven wrapper <strong className='text-md font-medium text-red-400 cursor-pointer'>` (mvnw) `</strong> is made executable.
                                    </li>
                                    <li className='list-disc'>
                                        The Spring Boot application is built using Maven with the <strong className='text-md font-medium text-red-400 cursor-pointer'>` package `</strong> goal,
                                        skipping tests <strong className='text-md font-medium text-red-400 cursor-pointer'>` (-DskipTests) `</strong>.
                                    </li>

                                </ul>
                            </li>

                            <li className='list-decimal'>
                                Runtime Environment:
                                <ol className='px-5'>
                                    <li className='list-disc'>
                                        The <strong className='text-md font-medium text-red-400 cursor-pointer'>` tomcat:9.0-jdk17-openjdk-slim `</strong> image
                                        is used as the base image for the runtime environment.
                                    </li>
                                    <li className='list-disc'>
                                        The built <strong className='text-md font-medium text-red-400 cursor-pointer'> WAR </strong> file from the previous stage is copied into the Tomcat's
                                        webapps directory <strong className='text-md font-medium text-red-400 cursor-pointer'>` (/usr/local/tomcat/webapps/) `</strong>.
                                    </li>
                                    <li className='list-disc'>
                                        Port <strong className='text-md font-medium text-red-400 cursor-pointer'> 8080 </strong> is
                                        exposed to allow outside access to the Tomcat server.
                                    </li>
                                </ol>
                            </li>

                            <li className='list-decimal'>
                                Starting the Application:
                                <ol className='px-5'>
                                    <li className='list-disc'>The <strong className='text-md font-medium text-red-400 cursor-pointer'>CMD </strong> instruction specifies the command to start the Tomcat
                                        server and run the Spring Boot application using <strong className='text-md font-medium text-red-400 cursor-pointer'> catalina.sh </strong>.</li>
                                </ol>
                            </li>
                        </ol>
                    </div>

                    <div className='mt-8'>
                        <p className='text-lg text-center'>To build the Docker image using this Dockerfile, follow these steps:</p>
                        <ol className='list-decimal px-5 mt-3'>
                            <li>Ensure that you have Docker installed and running on your machine.</li>
                            <li>Navigate to the directory containing your Dockerfile and the Spring Boot project files.</li>
                            <li>Open a terminal or command prompt in that directory.</li>
                            <li>Run the following command to build the Docker image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker build -t spring-boot-app .
                            </div>
                            <li>Once the image is built successfully, you can run a container based on that image:</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                docker run -d -p 8080:8080 spring-boot-app
                            </div>
                            <li>Access your Spring Boot application by opening a web browser and navigating to <strong className='text-md font-medium text-red-400 cursor-pointer'> http://localhost:8080 </strong>.</li>
                            <li>Refer the Github Project</li>
                            <div className="max-w-xl bg-gray-800 m-4 text-white italic p-4 rounded-lg">
                                <a
                                    href='https://github.com/Manojkumar1709/spring-boot-application.git'
                                    target='_blank'
                                >
                                    https://github.com/Manojkumar1709/spring-boot-application.git
                                </a>
                            </div>
                        </ol>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Docker
