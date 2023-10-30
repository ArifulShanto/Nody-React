import "./contact.scss";

const Contact = () => {
	return (
		<div className="contact">
			<div className="container">
				<div className="contact-header">
					<h1>Contact Us</h1>
					<p>
						Ut enim ad minima veniam quis nostrum exercitationem
						ullam corporis suscipit laboriosam nisi commodi
						consequatur.
					</p>
				</div>
				<div className="contact-content">
					<div className="left">
						<img src="./contact.png" alt="" />
						<h2>Are You Facing Any Problem..?</h2>
						<p>
							It va esser tam simplic quam Occidental in fact it
							va esser Occidental angles quam un skeptic cambridge
							es.
						</p>
						<button>
							<a href="#">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									strokeWidth="2"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-message-circle"
								>
									<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
								</svg>
								Start Live Chat
							</a>
						</button>
						<p>Or you can contact at </p>
						<div className="contactAt">
							<a href="#">
								<p>Email: youremail@gmail.com</p>
							</a>
							<a href="#">
								<p>Phone: (000) 1234 567 890</p>
							</a>
						</div>
					</div>
					<div className="right">
						<h3>Get in Touch</h3>
						<form action="">
							<div className="name">
								<div className="fname">
									<label htmlFor="">First Name</label>
									<input type="text" placeholder="Enter..." />
								</div>
								<div className="lname">
									<label htmlFor="">Last Name</label>
									<input type="text" placeholder="Enter..." />
								</div>
							</div>
							<div className="email">
								<label htmlFor="">Your Email</label>
								<input type="email" placeholder="Email..." />
							</div>
							<div className="massage">
								<label htmlFor="">Type Massage</label>
								<textarea
									name=""
									id=""
									cols=""
									rows="4"
								></textarea>
							</div>
						</form>
						<button>
							<a href="#">Send Massage</a>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
