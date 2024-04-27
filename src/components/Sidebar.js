import React from 'react'
import { NavLink } from 'react-router-dom'
import {
    SpringOriginal, FlaskOriginal, ReactOriginal, AngularjsOriginal,
    VuejsOriginal, NodejsOriginal, GoOriginal, NextjsOriginal, DjangoPlain
} from 'devicons-react'
import { FcHome } from "react-icons/fc";


const Sidebar = () => {
    return (
        <>
            <div className="h-full px-3 py-4 overflow-y-auto bg-gray-50 dark:bg-gray-800">
                <ul className="space-y-2 text-sm">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        > 
                            <FcHome/>
                            <span className="ms-3">Home</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-spring-boot"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <SpringOriginal />
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing Spring Boot Application</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-flask"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <FlaskOriginal />
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing Python Flask Application</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-react"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <ReactOriginal />
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing React Application</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-angular"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <AngularjsOriginal />
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing Angular Application</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-vue"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <VuejsOriginal />
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing Vue Application</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-node"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <NodejsOriginal />
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing NodeJS Application</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-golang"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <GoOriginal />
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing GoLang Application</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-next"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <NextjsOriginal/>
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing NextJS Application</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/docker-django"
                            className={({ isActive }) =>
                                isActive ? "flex items-center p-2 text-blue-500 rounded-lg dark:text-blue-400 hover:bg-blue-100 dark:hover:bg-gray-600 group" :
                                    "flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"}
                        >
                            <DjangoPlain/>
                            <span className="flex-1 ms-3 whitespace-wrap">Dockerizing Django Application</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidebar
