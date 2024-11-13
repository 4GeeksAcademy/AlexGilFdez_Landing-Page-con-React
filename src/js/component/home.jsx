import React from "react";
import Jumbotron from "../Jumbotron";
import Navbar from "../Navbar";
import Card from "../Card";
import Footer from "../Footer";


//include images into your bundle


//create your first component
const Home = () => {
	let data = [
		{
			photo: "https://cdn.pixabay.com/photo/2023/03/09/15/56/monkeys-7840321_1280.jpg",
			title: "monitos",
			description: "Abrazo",
			buttonLabel: "boton pincha aqui!",
			buttonURL: "https://es.wikipedia.org/wiki/Mono"
		},
		{
			photo: "https://cdn.pixabay.com/photo/2024/02/19/13/50/monkeys-8583435_1280.jpg",
			photo: "https://cdn.pixabay.com/photo/2024/10/23/18/54/squirrel-monkeys-9143848_1280.jpg",
			title: "mono",
			description: "Vigilando",
			buttonLabel: "araña",
			buttonURL: "https://es.wikipedia.org/wiki/Mono"
		},
		{
			photo: "https://cdn.pixabay.com/photo/2024/02/19/13/50/monkeys-8583435_1280.jpg",
			title: "monitos",
			description: "Comiendo",
			buttonLabel: "araña",
			buttonURL: "https://es.wikipedia.org/wiki/Mono"
		},
		{
			photo: "https://cdn.pixabay.com/photo/2013/12/11/16/20/berber-monkey-226884_1280.jpg",
			title: "mono",
			description: "Jugando",
			buttonLabel: "araña",
			buttonURL: "https://es.wikipedia.org/wiki/Mono"
		},
	]
	return (
		<div className="text-center">
			<Navbar />
			<Jumbotron />
			<div className="container d-flex justify-content-between ">

				{data.map((value, index, array) => {
					return <Card key={index} photo={value.photo} title={value.title} description={value.description} buttonLabel={value.buttonLabel} buttonURL={value.buttonURL} />
				})}

			</div>
			<Footer />
		</div>
	);
};

export default Home;
