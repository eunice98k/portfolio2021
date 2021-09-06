import React from 'react';
import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import Resume from '../downloads/resume2021.pdf';
import AboutImg from '../images/about.png';
import Project0 from '../images/geomap.png';
import Project1 from '../images/odfe.png';
import Project2 from '../images/HLI.png';
import Project3 from '../images/scara.png';

export const nav = {
    logo:"Eunice Kim"
}

export const about = {
    image: AboutImg,
    aboutme: [
        "Hello! My name is Eunice Kim.",
        "I am a senior Electrical Engineering student at the University of British Columbia. I am intrigued by complex design problems and solving real customer prolems with business justification. The thought of positively impacting people's lives through technology is what motivates me to become the engineer who does so in my community.",
        "In my spare time, I enjoy spending time with my pets 🐶🐱, going on hikes ⛰, and doing pilates 🧘🏻‍♀️."
    ],
    resume: Resume
}

export const projects = [
    {
        id: 'Project0',
        image: Project0,
        title: "Grafana Geomap Panel Plugin",
        technologies: "TypeScript, Golang, OpenSearch",
        live:"https://aws.amazon.com/blogs/opensource/building-the-geomap-plugin-for-grafana-8-1/",
        source: "https://github.com/grafana/grafana/tree/main/public/app/plugins/panel/geomap",
        description:"Geomap is a new core plugin introduced in Grafana 8.1, allowing users to visualize geospatial data. Users can customize the world map, configure various overlays, and refine map settings to focus on the important location-based characteristics of data. During my internship at AWS, I collaborated with Grafana Labs to design and build this Geomap plugin and contribute the plugin to the open source Grafana project."
        },
    {
        id: 'Project1',
        image: Project1,
        title: "Grafana PPL Support in OpenSearch Plugin",
        technologies: "TypeScript, Golang, Elasticsearch, PPL",
        live:"https://grafana.com/grafana/plugins/grafana-opensearch-datasource/",
        source: "https://github.com/grafana/open-distro-for-elasticsearch-grafana-datasource",
        description:"During my internship at AWS, I was able to take part in finding a solution to provide users with a new Grafana Open Distro for Elasticsearch (ODFE) data source plugin which provides the core Elasticsearch plugin functionalities along with additional Pipe Processing Language (PPL) support as an alternative query syntax option to improve the user experience of querying data in Grafana."
    },
    {
        id: 'Project2',
        image: Project2,
        title: "Freezer Monitoring Server",
        technologies: "CSS, Grafana, InfluxDB, Nagios",
        live:"",
        source: "",
        description:"In a hospital settings, it is critical that there is a reliable monitoring system for all systems. In my time at St. Paul's Hospital, I was given the chance to design and develop a new freezer monitoring server. The key idea behind this project was to implement an easy monitoring and quick, reliable alerting system for the freezers containing organs, blood, etc. The temperature setting is critical in this setting and the slightest drop in the temperature can lead to a big aftermath. I main focus was to design something that people could check on a daily basis, quickly, without having to search for anything. This led me to choosing Nagios to act as the main server showing all system's state, InfluxDB to collect temperatures at all times, and Grafana to allow easy visualization of the freezers."
    },
    {
        id: 'Project3',
        image: Project3,
        title: "Control System of a SCARA Robot",
        technologies: "C++, MATLAB, Simulink, SimulationX",
        live:"https://www.youtube.com/watch?v=1d6YJmkJxzE",
        source: "",
        description:"A 3.5 DOF Virtual Quality Control Robot was developed. The Controls System utilizes Simulink to develop and simulate the overall system, MATLAB to tune the PID controller, C++ to implement the path plan and encoder logic. "
    }
]

export const contacts = {
    email:"eunice98k@gmail.com",
    socialMedia:[
        {
            icon: 'github',
            url: "https://github.com/eunice98k",
            hover:"#000"
        },
        {
            icon: 'linkedin',
            url: "https://www.linkedin.com/in/eunicekim98",
            hover:"#0077B5"
        },
        {
            icon: 'instagram',
            url: "https://www.instagram.com/eunicee.k/",
            hover:"#af1d97"
        },
    ]
}