// Script that runs the results again through the API to get details on each article
require('dotenv').config();
const fs = require('fs');
const API_URL = 'http://analytics.eventregistry.org/api/v1/extractArticleInfo?';


// const zeitSampleNoDuplicates = ZeitSample.filter((article) => !article.isDuplicate)

const paramsForArticleExtractionQuery = {
    "apiKey": process.env.ER_API_FREE_KEY,
    "includeArticleKeywords": true
}

function stringifyParamsWithArticleUrl(params, url) {
    params.url = url
    return new URLSearchParams(params).toString()
}

async function fetchData(url, file) {
    const newsSample = JSON.parse(fs.readFileSync(file));
    const exportData = []
    for (let index = 0; index < newsSample.length; index++) {
        const article = newsSample[index];

        const stringifiedParams = stringifyParamsWithArticleUrl(paramsForArticleExtractionQuery, article.url)
        console.log(index, article.url)
        exportData.push(article)
        try {
            const response = await fetch(url + stringifiedParams);

            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`)
            }
            const json = await response.json()
            exportData[index].keywords = json.keywords
            exportData[index].links = json.links
        } catch (error) {
            console.error(error.message);
        }

    }

    fs.writeFileSync(`./data/2025/zeit-3-2025-details.json`, JSON.stringify(exportData, null, 2), 'utf8');
}

fetchData(API_URL, './data/2025/zeit-3-2025.json');