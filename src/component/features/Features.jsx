import { useState } from "react";
import "./features.scss";

const Features = () => {
	const [image, setImage] = useState("./feature.png");

	
	const handleClick = (tab) => {
		if (tab == 1) {
			setImage("./feature.png");
			
		}
		else if(tab == 2) {
			setImage("./feature1.png");
		}
		else if(tab == 3) {
			setImage("./feature2.png");
		}
	}
	return (
		<div className="features">
			<div className="container">
				<div className="features-header">
					<h1>Our Features</h1>
					<p>
						Ut enim ad minima veniam quis nostrum exercitationem
						ullam corporis suscipit laboriosam nisi commodi
						consequatur.
					</p>
				</div>
				<div className="features-content">
					<div className="features-img">
						<img src={image} alt="" />
					</div>
					<div>
						<ul>
							<li
								className={
									image == "./feature.png" ? "clicked" : ""
								}
								onClick={() => handleClick(1)}
							>
								<h4>Works With Existing Apps</h4>
								<p>
									At solmen necessi a uniform grammatica
									pronunciation sommun plu paroles ma quande.
								</p>
								<a href="">
									More Information <span>→</span>
								</a>
							</li>
							<li
								className={
									image == "./feature1.png" ? "clicked" : ""
								}
								onClick={() => handleClick(2)}
							>
								<h4>Easy Email Marketing</h4>
								<p>
									At solmen necessi a uniform grammatica
									pronunciation sommun plu paroles ma quande.
								</p>
								<a href="">
									More Information <span>→</span>
								</a>
							</li>
							<li
								className={
									image == "./feature2.png" ? "clicked" : ""
								}
								onClick={() => handleClick(3)}
							>
								<h4>Get Private Customers Feedback</h4>
								<p>
									At solmen necessi a uniform grammatica
									pronunciation sommun plu paroles ma quande.
								</p>
								<a href="">
									More Information <span>→</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Features;
