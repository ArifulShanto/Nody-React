import './footer.scss';

const Footer = () => {
    return (
		<div className="footer">
			<div className="container">
				<div className="footer-content">
					<div className="top">
						<div className="left">
							<img src="./footer.png" alt="" />
							<p>
								Cras ultricies mi eu turpis sit hendrerit
								fringilla vestibulum ante ipsum primis in
								faucibus ultrices posuere cubilia.
							</p>
							<a href="#">
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
									className="feather feather-instagram"
								>
									<rect
										x="2"
										y="2"
										width="20"
										height="20"
										rx="5"
										ry="5"
									></rect>
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
									<line
										x1="17.5"
										y1="6.5"
										x2="17.51"
										y2="6.5"
									></line>
								</svg>
								Join Us In Instagram
							</a>
                        </div>
                        <div className="right">
                            <div className="menu">
                                <h3>Customer</h3>
                                <ul>
                                    <li><a href="">Works</a></li>
                                    <li><a href="">Strategy</a></li>
                                    <li><a href="">Releases</a></li>
                                    <li><a href="">Press</a></li>
                                    <li><a href="">Mission</a></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <h3>Product</h3>
                                <ul>
                                    <li><a href="">Trending</a></li>
                                    <li><a href="">Popular</a></li>
                                    <li><a href="">Customers</a></li>
                                    <li><a href="">Features</a></li>
                                </ul>
                            </div>
                            <div className="menu">
                                <h3>Learn More</h3>
                                <ul>
                                    <li><a href="">Developers</a></li>
                                    <li><a href="">Support</a></li>
                                    <li><a href="">Customer Service</a></li>
                                    <li><a href="">Get Started</a></li>
                                    <li><a href="">Guide</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="bottom">
                        <p>2023 &copy; Nody. Develop By AIS </p>
                    </div>
				</div>
			</div>
		</div>
	);
};

export default Footer;