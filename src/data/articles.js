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
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
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
