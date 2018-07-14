import React, { Component } from "react"
import InformationManager from "./managers/InformationManager";

/*
    This new function in React - createContext() - is what will
    allow you to create a central store of data, and have any
    component become a Consumer of the data that it cares about.
*/
export const Context = React.createContext()

export class Provider extends Component {


    /*
    The initial state of the data provider should include
    default values for any top-level component that will
    need the data. In this case, PoliticianList is my only
    top-level component. It is not a child of any other
    component.
    */
    state = {
        projects: [
            {
                "id": 1,
                "name": "gameStone",
                "description": "GameStone helps you in discovering new video games based on games you have saved to a dynamic and managable collection of games. GameStone was built using the react framework.",
                "github_url": "https://github.com/RileyMathews/capstone",
                "live_url": "http://gamestone.rileymathews.com"
            }
        ],
        technologies: [
            {
                "id": 1,
                "name": "JavaScript",
                "img_url": "https://cdn.wikitude.com/static-website/2017/09/26171742/javascript-logo.png",
                "description": "Javascript is the driving force behind all modern web applications. This was our introduction to programming at NSS, and we used it in every group project for front end development."
            },
            {
                "id": 2,
                "name": "Git",
                "img_url": "https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png",
                "description": "Our instructors pounded into us every day about how we should always be 'adding, committing, and pushing'. Git seemed like a minor annoyance at first, but I quickly realized what a powerful tool it can be. It helps serving as a valuable history, and workflow aid for any development team"
            },
            {
                "id": 3,
                "name": "VS Code",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Visual_Studio_Code_1.18_icon.svg/1200px-Visual_Studio_Code_1.18_icon.svg.png",
                "description": "VS code is something I never used until my time at NSS. But I can't imagine coding without it now. With its powerful community plugins that help with everything from linting, formatting, syntax highlighting, to line by line git information, it has quickly become my go to text editor."
            },
            {
                "id": 4,
                "name": "Github",
                "img_url": "https://image.flaticon.com/icons/svg/25/25231.svg",
                "description": "Of course if your using git you would be crazy not to use github. This easy tool provides so much from great community tools, to project management, or maybe even just one more backup in case your hard drive fails."
            },
            {
                "id": 5,
                "name": "HTML",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
                "description": "As a web developer you have to write html somewhere. Weather its in the append method of your jquery app, or compiled from the jsx of your react app, everything on the web must eventually boil down to this."
            },
            {
                "id": 6,
                "name": "CSS",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/2000px-CSS3_logo_and_wordmark.svg.png",
                "description": "The companion to HTML, CSS is what keeps web apps from looking like they were built in the 90's (unless your going for that hipster look). CSS is what keeps your web application looking sharp."
            },
            {
                "id": 7,
                "name": "Heroku",
                "img_url": "https://cdn.worldvectorlogo.com/logos/heroku.svg",
                "description": "Heroku is maybe the unsung hero of my midstone front end project. While I didn't end up using it to deploy the final project, it served as a quick and easy way for me to deploy my json REST server so I could push up live test builds of my app. Allowing me to send live builds out to people to test my app and provide valuable feedback."
            },
            {
                "id": 8,
                "name": "AWS",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/2000px-Amazon_Web_Services_Logo.svg.png",
                "description": "I've learned so much about computers in general by poking around the AWS EC2 instances I created for my projects. AWS S3 and EC2 is how I deployed each of my capstone projects as well as some of our group projects for our presentations."
            },
            {
                "id": 9,
                "name": "Node",
                "img_url": "https://nodejs.org/static/images/logos/nodejs-new-pantone-black.png",
                "description": "While we never used node too much as an actual server side framework. Its command line utilities and packages helped a ton in setting up many of the other tools and technologies I used while building my projects."
            },
            {
                "id": 10,
                "name": "NPM",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/2000px-Npm-logo.svg.png",
                "description": "One of my favorite things about the coding community is how open it is with sharing ideas, and NPM is the launchpad for this in the world of javascript. This was a valuable tool in helping to just make development more streamlined."
            },
            {
                "id": 11,
                "name": "Grunt",
                "img_url": "http://www.stickpng.com/assets/images/5847fb60cef1014c0b5e48dc.png",
                "description": "My first foray into the world of modular coding and task automation. Grunt served as our tool for minifying code, building javascript modules, and other forms of automation."
            },
            {
                "id": 12,
                "name": "React",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2000px-React-icon.svg.png",
                "description": "React is the framework we used at NSS to bulid our most powerful front end applications. This framework provides so much functionality already and i've only scratched the surface of what can be done with it. Learning this framework was perhapse the most exciting thing for me as I truly saw the versatility of what javascript can do."
            },
            {
                "id": 13,
                "name": "Bulma",
                "img_url": "https://bulma.io/images/bulma-logo.png",
                "description": "My midstone project, and many of the group projects I worked on were styled using bulma. I prefer bulma in the long term over bootstrap because it is purly a css framework and requires no javascript plugins, allowing you to determine the functionality of components like modals and navbar menus."
            },
            {
                "id": 14,
                "name": "Bootstrap",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/e/ea/Boostrap_logo.svg",
                "description": "While I ended up settling on bulma for my default framework on larger projects. I used bootstrap on many projects to quickly prototype some styling. I prefer bulma's way of allowing you to write your own javascript logic for its components, but for quickly building a profressional and functional app without worrying about programming your own modals, you can't beat bootstrap."
            },
            {
                "id": 15,
                "name": "SASS",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2000px-Sass_Logo_Color.svg.png",
                "description": "All I had to hear to sell me on SASS was 'it is CSS but with variables and nesting'. But even further than that SASS has so many powerful things that make styling large websites even easier. When using Bootstrap and Bulma I woudl also often need to write my own SASS files on top of theirs to modify a few of their color variables or default assumptions to fit the current project."
            },
            {
                "id": 16,
                "name": "Python",
                "img_url": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2000px-Python-logo-notext.svg.png",
                "description": ""
            },
            {
                "id": 17,
                "name": "Django",
                "img_url": "https://www.djangoproject.com/m/img/logos/django-logo-negative.png",
                "description": ""
            },
            {
                "id": 18,
                "name": "Bloomer",
                "img_url": "https://bloomer.js.org/dist/07990594.png",
                "description": "Bloomer is a set of react components prebuilt using bulma's CSS styles. Its ability to create styled components with nothing more than a tag name made putting my app together in a visually pleasing way was easy right from the start."
            },
            {
                "id": 19,
                "name": "SQL",
                "img_url": "https://uploads.toptal.io/blog/category/logo/60/sql.png",
                "description": ""
            },
            {
                "id": 20,
                "name": "jQuery",
                "img_url": "http://pluspng.com/img-png/jquery-logo-png--800.gif",
                "description": "After learning about jQuery its hard to go back to the vanilla javascript way. I use jQuery mostly for its very helpful AJAX methods to interact with the APIs for my projects. But on top of that it has many other super helpful methods that make the simple yet verbose code blocks of plain javascript even simpler to write."
            }
        ],
        currentView: "home",
        loadAnimationPlayed: false,
        subtitlePrinted: false
    }

    // import functions
    // information manager
    loadTechnologies = InformationManager.loadTechnologies.bind(this)
    loadProjects = InformationManager.loadProjects.bind(this)




    /*
        Since this is just an ordinary component that extends
        React.Component, you can use `componentDidMount` to
        hit your API and then update state.
    */
    componentDidMount() {
        // this.loadTechnologies()
        // this.loadProjects()
    }

    // function to handle setting the load animation boolean
    animationHasPlayed = bool => {
        this.setState({ loadAnimationPlayed: bool })
    }

    subtitleHasPrinted = bool => {
        this.setState({ subtitlePrinted: bool})
    }


    /*
        This component will not render any DOM element itself.
        Rather it becomes a virtual wrapper around any component
        that wants to serve as the data provider for its children.
    */
    render() {
        return (
            <Context.Provider value={{
                state: this.state,
                setView: this.setView,
                showView: this.showView,
                animationHasPlayed: this.animationHasPlayed,
                subtitleHasPrinted: this.subtitleHasPrinted

            }}>
                {this.props.children}
            </Context.Provider>
        )
    }
}