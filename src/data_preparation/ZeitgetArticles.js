// needs a .env file on root with ER_API_KEY from https://newsapi.ai/
require('dotenv').config();
const fs = require('fs');

// https://newsapi.ai/documentation/sandbox?tab=searchArticles
var params = {
    apiKey: process.env.ER_API_KEY,
    sourceUri: "zeit.de",
    dateStart: "2024-01-01",
    dateEnd:"2024-04-30",
    resultType: "articles",
    isDuplicateFilter: "skipDuplicates",
    articlesPage: 1
};

const articlesArray = []
let currentPage = 1

function stringifyParams(params, page) {
    params.articlesPage = page
    return new URLSearchParams(params).toString()
}

// This function calls the API and returns the JSON with articles
async function getArticles(params) {
    // stringfiedParams returns the params as a string to be used in the fetch URL
    // The currentPage variable is needed to get the right page of articles if results > 100
    const stringifiedParams = stringifyParams(params, currentPage)
    const response = await fetch("https://newsapi.ai/api/v1/article/getArticles?" + stringifiedParams);
    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`)
    }

    const json = await response.json()
    console.log(`page: ${json.articles.page} of ${json.articles.pages}`)
    return json
}

async function fetchAllArticles(params) {
    try {
        let hasMoreArticles = true;
        while (hasMoreArticles) {
            const json = await getArticles(params);
            articlesArray.push(...json.articles.results);
            // If the current page is less than the total pages, increment currentPage
            if (json.articles.page < json.articles.pages) {
                currentPage++;
            } else {
                // If no more pages, then set hasMoreArticles to false and stop the while loop
                hasMoreArticles = false;
                // Write the articles to a file
                fs.writeFileSync('./data/zeit-sample-2024-01-01--2024-04-30.json', JSON.stringify(articlesArray, null, 2), 'utf8');
            }
        }
    } catch (error) {
        console.error('Error fetching articles:', error);
    }
}

fetchAllArticles(params);
