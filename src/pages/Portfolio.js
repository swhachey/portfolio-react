import React, {useState} from 'react'
import Row from "../components/Row/row"
import Project from "../components/Project/project"

function Portfolio() {
 const [projects, setProjects] = useState([{
     title: "Cobras Calorie Counter",
     text: "A recipe finder and meal planner for the week based on calorie content. Simply insert an ingredient or meal to start.",
     image: "/assets/cobra_calorie_counter_img.png",
     appLink: "https://codingcobrascoding.github.io/CobrasCalorieCounter/",
     gitLink: "https://github.com/CodingCobrasCoding/CobrasCalorieCounter"
 },
{
     title: "Community Car Share",
     text: "An app with a shared database that allows users to upload their vehicle to be used as part of the car share or search for a car on the database using particular search criteria. This a full stack app in which I created both front and back end.",
     image: "/assets/community_car_share_cover.png",
     appLink: "https://thawing-reaches-91071.herokuapp.com/",
     gitLink: "https://thawing-reaches-91071.herokuapp.com/"
 },
{
     title: "EMPIRE: React Employee MGMT",
     text: "This app was build with React and draws from an API of workers to give you a table of employees and their info.",
     image: "/assets/empire_employee_manager.png",
     appLink: "https://swhachey.github.io/reactive_employee_manager/",
     gitLink: "https://github.com/swhachey/reactive_employee_manager"
 },
{
     title: "Password Generator",
     text: "This feature will generate a random password based on the parameters you give its prompts.",
     image: "/assets/password_generator_image.png",
     appLink: "https://github.com/swhachey/swhachey-password-generator",
     gitLink: "https://swhachey.github.io/swhachey-password-generator/"
 },
{
     title: "Weather Forecast App",
     text: "Enter the city for which you'd like to get the daily and weekly forcast. We'll save your search in the corner to reference later.",
     image: "/assets/weather_app_image.png",
     appLink: "https://swhachey.github.io/weather-planning-app-swh/",
     gitLink: "https://github.com/swhachey/weather-planning-app-swh"
 },
{
     title: "Coding Quiz Game",
     text: "A short little quiz game to test your knowledge of basic coding. Log your high score with your initials.",
     image: "/assets/quiz_game_iamge.png",
     appLink: "https://swhachey.github.io/quizbowl-coding-swhachey/",
     gitLink: "https://github.com/swhachey/quizbowl-coding-swhachey"
 },
]);
    return (
        <div className="container portfolio">
         <h1>PORTFOLIO OF WORK</h1>
        <Row>
        {projects.map(project => (<Project 
        title={project.title}
        text={project.text}
        image={project.image}
        appLink={project.appLink}
        gitLink={project.gitLink}
        />))}
            </Row>
            <br/>
        </div>
    )
}

export default Portfolio
