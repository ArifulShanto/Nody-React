import "./news.scss";

const News = () => {
	return (
		<div className="news">
			<div className="container">
				<div className="news-header">
					<h1>Latest News</h1>
					<p>
						Ut enim ad minima veniam quis nostrum exercitationem
						ullam corporis suscipit laboriosam nisi commodi
						consequatur.
					</p>
				</div>
				<div className="news-content">
					<div className="left">
						<img src="./ln1.jpg" alt="" />
					</div>
					<div className="right">
						<div className="card-item">
							<div className="item-left">
								<img src="./ln2.jpg" alt="" />
							</div>
							<div className="item-right">
								<h4>The Big Event Conference</h4>
								<p>
									At vero eos et accusamus et iusto
									dignissimos
								</p>
								<ul>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#9b9bae"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-calendar"
										>
											<rect
												x="3"
												y="4"
												width="18"
												height="18"
												rx="2"
												ry="2"
											></rect>
											<line
												x1="16"
												y1="2"
												x2="16"
												y2="6"
											></line>
											<line
												x1="8"
												y1="2"
												x2="8"
												y2="6"
											></line>
											<line
												x1="3"
												y1="10"
												x2="21"
												y2="10"
											></line>
										</svg>
										15 Sept 2023
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#9b9bae"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-clock"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<polyline points="12 6 12 12 16 14"></polyline>
										</svg>
										15 min ago
									</li>
								</ul>
							</div>
						</div>
						<div className="card-item">
							<div className="item-left">
								<img src="./ln3.jpg" alt="" />
							</div>
							<div className="item-right">
								<h4>The Big Event Conference</h4>
								<p>
									At vero eos et accusamus et iusto
									dignissimos
								</p>
								<ul>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#9b9bae"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-calendar"
										>
											<rect
												x="3"
												y="4"
												width="18"
												height="18"
												rx="2"
												ry="2"
											></rect>
											<line
												x1="16"
												y1="2"
												x2="16"
												y2="6"
											></line>
											<line
												x1="8"
												y1="2"
												x2="8"
												y2="6"
											></line>
											<line
												x1="3"
												y1="10"
												x2="21"
												y2="10"
											></line>
										</svg>
										15 Sept 2023
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#9b9bae"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-clock"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<polyline points="12 6 12 12 16 14"></polyline>
										</svg>
										15 min ago
									</li>
								</ul>
							</div>
						</div>
						<div className="card-item">
							<div className="item-left">
								<img src="./ln4.jpg" alt="" />
							</div>
							<div className="item-right">
								<h4>The Big Event Conference</h4>
								<p>
									At vero eos et accusamus et iusto
									dignissimos
								</p>
								<ul>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#9b9bae"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-calendar"
										>
											<rect
												x="3"
												y="4"
												width="18"
												height="18"
												rx="2"
												ry="2"
											></rect>
											<line
												x1="16"
												y1="2"
												x2="16"
												y2="6"
											></line>
											<line
												x1="8"
												y1="2"
												x2="8"
												y2="6"
											></line>
											<line
												x1="3"
												y1="10"
												x2="21"
												y2="10"
											></line>
										</svg>
										15 Sept 2023
									</li>
									<li>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="24"
											height="24"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#9b9bae"
											strokeWidth="2"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="feather feather-clock"
										>
											<circle
												cx="12"
												cy="12"
												r="10"
											></circle>
											<polyline points="12 6 12 12 16 14"></polyline>
										</svg>
										15 min ago
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default News;
