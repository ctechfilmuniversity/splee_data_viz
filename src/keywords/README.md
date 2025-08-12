# Extraction and analysis of geo-related keywords from news coverage

This folder contains the scripts to extract and analyze geo-related keywords included in The New York Times and Zeit Online coverage. In the `data` subfolder thre results of this analysis can be found. The `input-data` folder contains in-between and utility datasets that are used as part of the data analysis pipeline.

## Scripts

- `1.places.ipynb`: main script, it takes the original news coverage data and extracts geo-related keywords. Removes granularity by aggregating localities into countries and converting all country names to English. By joining the datasets on the country name, the script outputs a `.csv` file with coverage by country.
- `2.places-analysis.ipynb`: additional cleaning for `coveraga_by_country.csv`. This script allows for the creation of a nested dataset where countries are assigned to a specific outlet based on the frequency of their coverage.
- `3.keywords-structure.ipynb`: small experiment, finds common combination of keywords for NYT data.
- `4.topics_by_location.ipynb`: experiment, finds geographic correlation for specific clusters of keywords (topics)
- `5.find_kws_overlap.ipynb`: experiment, finds overlapping keywords across two geographical location. It can be used to generate a json file for creating Venn diagrams.

## Datasets

### Input Data (`input-data/`)

- `nyt_articles.csv`: Raw New York Times articles data
- `zeit_articles.csv`: Raw Zeit Online articles data
- utilities: `countries_de.csv`, list of countries' names in German.
- utilities: `[region].txt`, each file contains a list of countries belonging to a region/continent.

### Data (`data/`)

#### `coverage_by_country.csv`

List of countries with the count of related articles in each news outlet, keywords, and articles' ids.

| country | iso_alpha3 | Latitude | Longitude | count_of_articles_nyt | count_of_articles_zeit | ids_of_articles_nyt      | ids_of_articles_zeit      | keywords_nyt                               | keywords_zeit  |
| ------- | ---------- | -------- | --------- | --------------------- | ---------------------- | ------------------------ | ------------------------- | ------------------------------------------ | -------------- |
| Germany | DEU        | 51.1657  | 10.4515   | 120                   | 85                     | 'nyt:...','nyt:...', ... | '8735373', '8756373', ... | '{Presidential Election of 2024: {7}, ...' | '{SWR: 2, ...' |

#### `coverage_by_region.json`

Nested `.json` where each news outlet is assigned a certain number of countries. Entries about individual countries follow the structure of `coverage_by_country.csv`.

```
└── news outlet
    └── region
        ├── country

```

## Folder Structure

```
└── 📁keywords
    └── 📁data
        ├── coverage_by_country.csv
        ├── coverage_by_region.json
    └── 📁input-data
        └── 📁utilities
            ├── [region].txt
            ├── countries_de.csv
        ├── nyt_retrived_countries.csv
        ├── nyt-locations.csv
    ├── 1.places.ipynb
    ├── 2.places-analysis.ipynb
    ├── 3.keywords-structure.ipynb
    ├── 4.topics_by_location.ipynb
    ├── 5.find_kws_overlap.ipynb
    ├── geopy_cache.sqlite
    └── README.md
```

## Contributors

Francesca Morini (Film University Babelsberg KONRAD WOLF, MetaLab Harvard & Berlin)
