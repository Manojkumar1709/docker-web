import React from 'react'
import {data} from '../data/Data.js'
import image from '../images/docker-architecture.png'

const Home = () => {
    return (
        <div> 
            <div className="p-4 sm:ml-64">
                <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <div className="mb-6">
                        <div>
                            <h3 className='text-md text-gray-800 font-bold mt-4'>Container</h3>
                            <p>A Container is a runnable instance of an image.
                                A Container is defined by its image as well as any
                                configuration options you provide to it when you create or start it.
                            </p>
                        </div>
                        <div>
                            <h3 className='text-md text-gray-800 font-bold mt-4'>Dockerfile</h3>
                            <p>
                                A Dockerfile is a text document that contains all the commands a
                                user could call on the command line to assemble an image
                            </p>
                        </div>
                        <div>
                            <div className='content-center'>
                                <h3 className='text-md text-gray-800 font-bold mt-4'>Docker Architecture</h3>
                            </div>
                            <img src={image} alt='docker_image'/>
                            <div>
                                <ul>
                                    <li>Docker Engine</li>
                                    <li>Docker Hub</li>
                                    <li>Docker Container</li>
                                    <li>Docker Client</li>
                                </ul>
                            </div>
                        </div>
                        <div className='border-b-2 mt-4'>
                        </div>
                        <div>
                            <h3 className='text-md text-gray-800 font-bold mt-4'>Important Docker Commands</h3>
                            <table className="w-full border-collapse border border-blue-500 max-w-full mt-4">
                                <thead>
                                    <tr className="bg-blue-500 text-white">
                                        <th className="py-2 px-4 text-left">Command</th>
                                        <th className="py-2 px-4 text-left">Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map((user) => (
                                            <tr className="bg-white border-b border-blue-500">
                                                <td className="py-2 px-4 text-red-400">{user.cmd}</td>
                                                <td className="py-2 px-4">{user.desc}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
