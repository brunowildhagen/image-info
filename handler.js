'use strict';
const aws = require('aws-sdk');

module.exports.GetMetadata = async (event, context) => {
	return { 
		statusCode: 200,
		headers: {
			"Content-Type": "application/json"
		},
        body: JSON.stringify({message: 'Go Serverless v1.0! Your function executed successfully!'})
	};
};

module.exports.ExtractMetadata = async (event, context) => {
	console.log(context);
}
