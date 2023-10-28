import './project.scss';

const Project = ({project}) => {
    return (
		<div className="project">
			<div className="project-image">
				<img src={project.img} alt="" />
				<div className="project-overlay">
					<div className="overlay-icon">
						<a href="#">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="24"
								height="24"
								viewBox="-.5 -.5 24 24"
								fill="none"
								stroke="#ffff"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-eye"
							>
								<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
								<circle cx="12" cy="12" r="3"></circle>
							</svg>
						</a>
					</div>
				</div>
			</div>
			<h4>{project.name}</h4>
			<p>{project.category}</p>
		</div>
	);
};

export default Project;