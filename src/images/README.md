# Face recognition and analysis on images from online newspapers

The folder contains two scripts:

## 01.extract_facial_features.ipynb

This script takes a folder of images located in the `data` folder and processes them to extract facial features. The script partially relies on pre-trained face recognition algorithms, the result is manually refined to improve quality and accuracy.

## 02.create-cutouts.ipynb

The script processes the results of `01.extract_facial_features.ipynb` and produces a 1:1 cut out of the face included in the picture.

## 03.preprocess_images_dataset.ipynb

This script preprocesses the datasets that contain the article information and reduces the dataset to the necessary columns.

## 04.analyze_appearance_patterns.ipynb

This script merges the resulting dataset of `02.create-cutouts.ipynb`, the data about which article contains which person, and the main article dataset to extract information about (1) the total and weekly appearances of a person and (2) their co-appearance with other persons from the top 15 represented persons dataset.

## Contributors

Nemuël Link (University of Applied Sciences Lucern), Philipp Proff (Filmuniversität Babelsberg KONRAD WOLF).
