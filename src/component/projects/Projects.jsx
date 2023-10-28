import { projects } from "../../../data";
import Project from "../project/Project";
import  "./projects.scss";

const Projects = () => {
    return (
		<div className="projects">
			<div className="container">
				<div className="projects-header">
					<h1>Our Latest Project</h1>
					<p>
						Ut enim ad minima veniam quis nostrum exercitationem
						ullam corporis suscipit laboriosam nisi commodi
						consequatur.
					</p>
                </div>
                <div className="projects-content">
                    {
                        projects.map(project => (<Project project = {project} key = {project.id}></Project>))
                    }
                </div>
			</div>
		</div>
	);
};

export default Projects;