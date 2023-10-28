import './about.scss';

const About = () => {
    return (
		<div className="about">
			<div className="container">
				<div className="about-header">
					<h1>About Us</h1>
					<p>
						Ut enim ad minima veniam quis nostrum exercitationem
						ullam corporis suscipit laboriosam <br /> nisi commodi
						consequatur.
					</p>
				</div>
				<div className="about-content">
					<div className="cart">
						<div className="cart-img">
							<img src="./about1.png" alt="" />
						</div>
						<p>DEVELOPMENT</p>
						<h4>Product Development</h4>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit sed quia consequuntur
							magni.
						</p>
						<a href="#">
							Read More <span>→</span>
						</a>
					</div>
					<div className="cart">
						<div className="cart-img">
							<img src="./about1.png" alt="" />
						</div>
						<p>DEVELOPMENT</p>
						<h4>Product Development</h4>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit sed quia consequuntur
							magni.
						</p>
						<a href="#">
							Read More <span>→</span>
						</a>
					</div>
					<div className="cart">
						<div className="cart-img">
							<img src="./about1.png" alt="" />
						</div>
						<p>DEVELOPMENT</p>
						<h4>Product Development</h4>
						<p>
							Nemo enim ipsam voluptatem quia voluptas sit
							aspernatur aut odit aut fugit sed quia consequuntur
							magni.
						</p>
						<a href="#">
							Read More <span>→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;