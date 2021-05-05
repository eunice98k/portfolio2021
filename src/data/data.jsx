import React from 'react';
import {FaGithub,FaInstagram,FaLinkedin} from 'react-icons/fa'
import Resume from '../downloads/resume2021.pdf';
import AboutImg from '../images/about.png';
import Project1 from '../images/odfe.png';
import Project2 from '../images/HLI.png';
import Project3 from '../images/scara.gif';

export const nav = {
    logo:"Eunice Kim"
}

export const about = {
    image: AboutImg,
    aboutme: [`
        I am a senior Electrical Engineering student at the University of British Columbia. 
        My interest in the application of technology to the medical field drew me in to joining the Biomedical option of my faculty.
        The thought of impacting people's lives through technology interests me and motivates me to do so in my community.
        As an engineering student, I am intrigued by complex design problems and attracted to solving real customer prolems with business justification.
        I am passionate about building excellent software that improves the lives of those around me.`
    ],
    resume: Resume
}

export const projects = [
    {
        id: 'Project1',
        image: Project1,
        title: "Grafana PPL Support in Open Distro for Elasticsearch Plugin",
        technologies: "TypeScript, Golang, Elasticsearch, PPL",
        live:"https://grafana.com/grafana/plugins/grafana-es-open-distro-datasource/#:~:text=Open%20Distro%20for%20Elasticsearch%20Grafana,log%20events%20stored%20in%20Elasticsearch.",
        source: "https://github.com/grafana/open-distro-for-elasticsearch-grafana-datasource",
        description:"Grafana is one of the most popular open source monitoring platforms, allowing users to query, visualize, alert and analyze metrics from various data sources. You can create complex monitoring dashboards using interactive query builders, as well as personalize and extend the Grafana experience through the use of plugins. One of the core plugins included out of the box with Grafana is the Elasticsearch data source plugin, enabling users to visualize metrics and logs stored in an Elasticsearch instance. During my internship at AWS, I was able to take part in finding a solution to provide users with a new Grafana Open Distro for Elasticsearch (ODFE) data source plugin which provides the core Elasticsearch plugin functionalities along with additional Pipe Processing Language (PPL) support as an alternative query syntax option to improve the user experience of querying data in Grafana."
    },
    {
        id: 'Project2',
        image: Project2,
        title: "Freezer Monitoring Server",
        technologies: "Linux OS, InfluxDB, CSS, Nagios",
        live:"",
        source: "",
        description:"In any hospital settings, it is critical that there is a reliable monitoring system for all the freezers containing important...."
    },
    {
        id: 'Project3',
        image: Project3,
        title: "Control System of a SCARA Robot",
        technologies: "C++, MATLAB, Simulink, SimulationX",
        live:"https://www.youtube.com/watch?v=1d6YJmkJxzE",
        source: "https://github.com",
        description:"A 3.5 DOF Virtual Quality Control Robot was developed."
    }
]

export const contacts = {
    email:"eunice98k@gmail.com",
    socialMedia:[
        {
            icon: FaGithub,
            url: "https://github.com/eunice98k",
            hover:"#000"
        },
        {
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/eunicekim98",
            hover:"#0077B5"
        },
        {
            icon: FaInstagram,
            url: "https://www.instagram.com/eunicee.k/",
            hover:"#af1d97"
        },
    ]
}