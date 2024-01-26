import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "The Evolution of Consumer Behavior in the Digital Age. ",
		description:
			"How digital platforms have transformed the way consumers interact with brands and make purchasing decisions.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Heshan",
			"Heshan C",
			"Heshan Costa",
		],
		style: `
				

				
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://medium.com/@heshan1401/the-evolution-of-consumer-behaviour-in-the-digital-age-a5b139ae0c3a"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "Social Media Marketing:Strategies for Engagement and Conversion",
		description:
			"Discussing effective techniques for engaging with audiences on social media platforms and converting this engagement into tangible business outcomes.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			"Heshan",
			"Heshan C",
			"Heshan Costa",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>

			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
