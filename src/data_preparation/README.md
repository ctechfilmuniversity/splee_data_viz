# Data preparation

This folder contains scripts for preparing and formatting news data from different sources.

## NYT data

To download data from The New York Times you can use their official open API: https://developer.nytimes.com/apis

### NYT Data Format (NYTformatData.ipynb)

This notebook processes New York Times articles data by:

1. Loading JSON files containing NYT articles data from the `data/nyt/raw` folder
2. Cleaning and transforming the data:
   - Removing unnecessary columns
   - Flattening the keywords structure
   - Extracting image URLs from multimedia data
   - Simplifying headline structure
   - Standardizing column names
3. Adding source attribution
4. Saving the processed data as a JSON file

#### Data Transformations

- Extracts main headline text
- Converts complex multimedia objects to simple image URLs
- Flattens keyword arrays
- Standardizes column names (e.g., 'headline' → 'title')
- Adds source attribution
- Removes redundant metadata fields

### Zeit Articles Fetching (ZeitgetArticles.js)

This script fetches articles from Zeit.de using the NewsAPI.ai service:

1. Requires an API key from NewsAPI.ai stored in `.env` file
2. Fetches articles with the following parameters:
   - Source: zeit.de
   - Date range: 2024-01-01 to 2024-04-30
   - Skips duplicate articles
   - Retrieves full article content
3. Handles pagination automatically:
   - Fetches all available pages
   - Combines results into a single array
4. Saves the collected articles to a JSON file in the data directory

#### Configuration

- Uses environment variables for API authentication
- Configurable date range and source parameters
- Results are saved as `zeit-sample-[daterange].json`

## Zeit Data

Zeit Online does not have a public-facing API. To download archival data, a commercial news API has been used: NewsAPI.ai. The scripts below help downloading data.

```
IMPORTANT! ‼ The scripts use API credentials stored in an .env file to run.
```

### Zeit Article Details (ZeitgetArticlesDetails.js)

This script enriches Zeit articles with additional details from the NewsAPI.ai service:

1. Runs after `ZeitgetArticles.js` to process the initial article data
2. For each article in the dataset:
   - Uses the article URL to fetch additional metadata
   - Extracts keywords and related links
   - Preserves the original article data
3. Enriches the existing data with:
   - Article keywords
   - Related links and references
4. Saves the enhanced dataset to a new JSON file

### Configuration

- Uses the same NewsAPI.ai credentials
- Requires the output from ZeitgetArticles.js as input
- Rate limits may apply based on API tier
