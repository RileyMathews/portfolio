import APIManager from "./APIManager";

/*
    module: information manager
    purpose: to handle setting top level data for the app
    author: riley
*/

const InformationManager = Object.create(null, {
    loadTechnologies: {
        value: function () {
            APIManager.get("technologies")
                .then(r => r.json())
                .then(technologiesResponse => {
                    this.setState({technologies: technologiesResponse})
                })
        }
    },
    loadProjects: {
        value: function () {
            APIManager.get("projects")
                .then(r => r.json())
                .then(projectsResponse => {
                    this.setState({projects: projectsResponse})
                })
        }
    },
    loadBio: {
        value: function () {
            APIManager.get("about")
                .then(r => r.json())
                .then(biography => {
                    console.log(biography)
                    const bio = biography[0].bio
                    this.setState({biography: bio})
                })
        }
    }
})

export default InformationManager