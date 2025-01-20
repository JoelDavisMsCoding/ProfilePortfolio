let projects = document.querySelectorAll(".container4 img"); //grabbing all projects in container 4
//let projects = document.querySelector(".container4 img"); //grabbing all projects in container 4
console.log(projects);

for (let i = 0; i < projects.length; i++)
{
    projects[i].addEventListener("mouseover", () => //over glow
    {

        projects[i].classList.add("jump");
        projects[i].addEventListener("mouseout", () => 
        {
            setTimeout(() => 
            {
                projects[i].classList.remove("jump")
            }, 200);
        })
    })
}