import './header.scss';

const Header = () => {
    return (
		<div className="header">
			<div className="container">
				<div className="left">
					<h1>Hello,</h1>
					<h1>
						We Help You To Boost <br />Your Business
					</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Eveniet commodi cum maxime quod quam reprehenderit
						expedita?<br /> Blanditiis debitis nesciunt ad  
					</p>
					<button>
						<a href="#" >
							Get Started <span>→</span>
						</a>
					</button>
                </div>
                <div className="right">
                    <img src="./header.png" alt="" />
                </div>
			</div>
		</div>
	);
};

export default Header;