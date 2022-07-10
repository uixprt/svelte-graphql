import { ApolloServer, gql } from 'apollo-server';

const typeDefs = gql`
	type Article {
		slug: String
		title: String
		author: String
		content: String
	}

	type Query {
		articles: [Article]
		articleBySlug(slug: String!): Article
	}

	type Mutation {
		addArticle(title: String!, content: String!, author: String!): Article
	}
`;

const articles = [
	{
		slug: 'article-1',
		title: 'Article 1',
		content: 'Article 1 content',
		author: 'Author 1'
	},
	{
		slug: 'article-2',
		title: 'Article 2',
		content: 'Article 2 content',
		author: 'Author 2'
	}
];

const resolvers = {
	Query: {
		articles: () => articles,
		articleBySlug: (_: unknown, { slug }: { slug: string }) =>
			articles.find((article) => article.slug === slug)
	},
	Mutation: {
		addArticle: (
			_: unknown,
			{ title, content, author }: { title: string; content: string; author: string }
		) => {
			const newArticle = {
				slug: title.toLocaleLowerCase().replace(/\s/g, '-'),
				title,
				content,
				author
			};
			articles.push(newArticle);
			return newArticle;
		}
	}
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
	console.log(`Server ready at ${url}`);
});
