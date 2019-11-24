const createPosts = require( './utils/createPosts' );

exports.createPages = async ( { actions, graphql } ) => {
	await createPosts( { actions, graphql } );
};
