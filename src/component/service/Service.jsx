import "./service.scss";

const Service = () => {
	return (
		<div className="service">
			<div className="container">
				<div className="service-header">
					<h1>Our Services</h1>
					<p>
						Ut enim ad minima veniam quis nostrum exercitationem
						ullam corporis suscipit laboriosam nisi commodi
						consequatur.
					</p>
				</div>
				<div className="service-content">
					<div className="cart">
						<div className="cart-img">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#676767"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-headphones"
							>
								<path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
								<path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
							</svg>
						</div>
						<h4>Awesome Support</h4>
						<p>
							Omnicos directe al desirabilite de une nov lingua
							franca a refusa continuar payar custosi traductores.
						</p>
						<a href="#">
							More <span>→</span>
						</a>
					</div>
					<div className="cart">
						<div className="cart-img">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#676767"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-check-circle"
							>
								<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
								<polyline points="22 4 12 14.01 9 11.01"></polyline>
							</svg>
						</div>
						<h4>Analytics Security</h4>
						<p>
							Omnicos directe al desirabilite de une nov lingua
							franca a refusa continuar payar custosi traductores.
						</p>
						<a href="#">
							More <span>→</span>
						</a>
					</div>
					<div className="cart">
						<div className="cart-img">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="48"
								height="48"
								viewBox="0 0 24 24"
								fill="none"
								stroke="#676767"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
								className="feather feather-lock"
							>
								<rect
									x="3"
									y="11"
									width="18"
									height="11"
									rx="2"
									ry="2"
								></rect>
								<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
							</svg>
						</div>
						<h4>Data Privacy</h4>
						<p>
							Omnicos directe al desirabilite de une nov lingua
							franca a refusa continuar payar custosi traductores.
						</p>
						<a href="#">
							More <span>→</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Service;
