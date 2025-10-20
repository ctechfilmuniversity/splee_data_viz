# Extraction and analysis of relevant words from bodies of text

This folder contains Jupyter notebooks for processing and analyzing text data from news articles. The scripts are organized in a sequential workflow:

### 01-cleaning.ipynb
This notebook handles the initial data preparation and cleaning:
- Processes raw article data from JSON format
- Extracts and structures headline information (main headlines and print headlines)
- Creates a refined dataset with article metadata and text content
- Filters articles based on political content using a predefined set of keywords
- Saves processed data in an efficient feather format for downstream analysis

### 02-webapp_data.ipynb
This notebook focuses on advanced text analysis and topic modeling:
- Performs topic modeling using multiple approaches:
  - Latent Dirichlet Allocation (LDA)
  - BERTopic with UMAP dimensionality reduction
- Creates topic visualizations
- Processes text data for sentiment analysis
- Generates structured data for web application visualization
- Includes parameter tuning for optimal topic clustering

The notebooks are designed to work sequentially, with the output of `01-cleaning.ipynb` serving as input for `02-webapp_data.ipynb`. The processed data is saved in `.json` formats for further use in visualization and web applications.

## Contributors

Jocelyn Shek (Harvard University)