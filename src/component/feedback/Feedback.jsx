import Slider from "react-slick";
import "./feedback.scss";

const Feedback = () => {
	const state = {
		display: true,
		maxWidth: 1140,
	};
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
	};
	return (
		<div className="feedback">
			<div className="container">
				<div className="feedback-header">
					<h1>What Our Customer Says</h1>
					<p>
						Ut enim ad minima veniam quis nostrum exercitationem
						ullam corporis suscipit laboriosam nisi commodi
						consequatur.
					</p>
				</div>
				<div className="feedback-content">
					<div
						style={{
							width: state.width + "px",
							display: state.display ? "block" : "none",
						}}
					>
						<Slider className="slider-content" {...settings}>
							<div className="slider-item">
								<div className="item-up">
									<img src="./customer.png" alt="" />
									<p>
										Et harum quidem rerum facilis expedita
										distinctio nam libero tempore soluta
										nobis optio cumque.
									</p>
								</div>
								<div className="item-down">
									<img src="./c1.jpg" alt="" />
									<h5>Joshua Vargas</h5>
									<p>Web Developer, USA</p>
								</div>
							</div>
							<div className="slider-item">
								<div className="item-up">
									<img src="./customer.png" alt="" />
									<p>
										Et harum quidem rerum facilis expedita
										distinctio nam libero tempore soluta
										nobis optio cumque.
									</p>
								</div>
								<div className="item-down">
									<img src="./c2.jpg" alt="" />
									<h5>Sammie Lewis</h5>
									<p>UI/UX Designer, USA</p>
								</div>
							</div>
							<div className="slider-item">
								<div className="item-up">
									<img src="./customer.png" alt="" />
									<p>
										Et harum quidem rerum facilis expedita
										distinctio nam libero tempore soluta
										nobis optio cumque.
									</p>
								</div>
								<div className="item-down">
									<img src="./c3.jpg" alt="" />
									<h5>Sarah Levine</h5>
									<p>PHP Developer, USA</p>
								</div>
							</div>
							<div className="slider-item">
								<div className="item-up">
									<img src="./customer.png" alt="" />
									<p>
										Et harum quidem rerum facilis expedita
										distinctio nam libero tempore soluta
										nobis optio cumque.
									</p>
								</div>
								<div className="item-down">
									<img src="./c1.jpg" alt="" />
									<h5>Bobby Kelly</h5>
									<p>Graphics Designer, USA</p>
								</div>
							</div>
						</Slider>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
