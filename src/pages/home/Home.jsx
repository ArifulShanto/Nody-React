// import { useEffect } from "react";
import About from "../../component/about/About";
import Features from "../../component/features/Features";
import Feedback from "../../component/feedback/Feedback";
import Header from "../../component/header/Header";
import Navbar from "../../component/navbar/Navbar";
import News from "../../component/news/News";
import Projects from "../../component/projects/Projects";
import Service from "../../component/service/Service";
import './home.scss';

const Home = () => {
	// useEffect(() => {
	// 	document.title = "Homepage";
	// },[])
    return (
		<div className="home">
			<div className="header-bg">
				<Navbar />
				<Header />
			</div>
			<About />
			<Service />
			<Features />
			<Projects />
			<Feedback />
			<News />
		</div>
	);
};

export default Home;