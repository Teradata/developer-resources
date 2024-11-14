---
id: in-db-functions
title: In-database functions
description: Learn about the analytic functions you can use in the AI Unlimited Fabric Workload.
sidebar_label: In-database functions reference
sidebar_position: 6
pagination_prev: null
pagination_next: null
displayed_sidebar: fabricSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# In-database functions reference

To further explore the AI Unlimited Workload, feel free to go through the rest of the data prep notebook or try one of the other sample notebooks.  You can also create a new notebook item and select “Create a new” to do any of your own analysis and try our in-database functions. 

Follow the link in the function name to find usage notes.

:::note
Usage instructions often reference “CREATE TABLE.” To write to OneLake, you must use “CREATE OTF TABLE.”
:::

## Data cleaning functions

TD_GetFutileColumns<br/>
Returns the futile column names.

TD_OutlierFilterFit<br/>
Calculates the lower_percentile, upper_percentile, count of rows, and median for the specified input table columns.

TD_OutlierFilterTransform<br/>
Filters outliers from the input table.

TD_GetRowsWithoutMissingValues<br/>
Displays the rows that have non-NULL values in the specified input table columns.

TD_SimpleImputeFit<br/>
Outputs a table of values to substitute for missing values in the input table.

TD_SimpleImputeTransform<br/>
Substitutes specified values for missing values in the input table.

TD_ConvertTo<br/>
Converts the specified input table columns to specified data types.

Pack<br/>
Compresses data in multiple columns into a single packed data column.

Unpack<br/>
Expands data from a single packed column to multiple unpacked columns.

StringSimilarity<br/>
Calculates the similarity between two strings, using the specified comparison method.


## Data exploration functions

MovingAverage
Computes average values in a series.

TD_CategoricalSummary
Displays the distinct values and their counts for each specified input table column.

TD_ColumnSummary
Displays a summary of each specified input table column.

TD_GetRowsWithMissingValues
Displays the rows that have NULL values in the specified input table columns.

TD_Histogram
Calculates the frequency distribution of a data set.

TD_QQNorm
Checks whether the values in the specified input table columns are normally distributed.

TD_UnivariateStatistics
Displays descriptive statistics for each specified numeric input table column.

TD_WhichMax
Displays all rows that have the maximum value in a specified input table column.

TD_WhichMin
Displays all rows that have the minimum value in specified input table column.


## Feature engineering transform functions

Antiselect
AntiSelect returns all columns except those specified.

TD_BinCodeFit
Converts numeric data to categorical data by binning the numeric data into multiple 
numeric bins (intervals).

TD_BinCodeTransform
Transforms input table columns from the BinCodeFit function output.

TD_ColumnTransformer
Transforms the input table columns in a single operation.

TD_FunctionFit
Determines whether specified numeric transformations can be applied to specified input 
columns.

TD_FunctionTransform
Applies numeric transformations to input columns.

TD_NonLinearCombineFit
Returns the target columns and a specified formula which uses the non-linear combination of existing features.

TD_NonLinearCombineTransform
Generates the values of the new feature using the specified formula from the TD_NonLinearCombineFit function output.

TD_OneHotEncodingFit
Outputs a table of attributes and categorical values to the TD_OneHotEncodingTransform function.

TD_OneHotEncodingTransform
Encodes specified attributes and categorical values as one-hot numeric vectors using the output from the TD_OneHotEncodingFit function.

TD_OrdinalEncodingFit
Encodes specified attributes and categorical values as one-hot numeric vectors using the output from the TD_OneHotEncodingFit function.

TD_OrdinalEncodingTransform
Maps the categorical value to a specified ordinal value using the TD_OrdinalEncodingFit output.

TD_Pivoting
Pivots the data, that is, changes the data from sparse to dense format.

TD_PolynomialFeaturesFit
Stores all the specified values in the argument in a tabular format.

TD_PolynomialFeaturesTransform
Extracts values of arguments from the output of the TD_PolynomialFeaturesFit function and generates a feature matrix of all polynomial combinations of the features.

TD_RandomProjectionFit
Returns a random projection matrix based on the specified arguments.

TD_RandomProjectionMinComponents
Calculates the minimum number of components required for applying RandomProjection on the given dataset for the specified epsilon(distortion) parameter value.

TD_RandomProjectionTransform
Converts the high-dimensional input data to a lower-dimensional space using the TD_RandomProjectionFit function output.

TD_RowNormalizeFit
Outputs a table of parameters and specified input columns to TD_RowNormalizeTransform which normalizes the input columns row-wise.

TD_RowNormalizeTransform
Normalizes the input columns row-wise using the output of the TD_RowNormalizeFit function.

TD_ScaleFit
Outputs a table of statistics to the TD_ScaleTransform function.

TD_ScaleTransform
Scales the specified input table columns using the output of the TD_ScaleFit function.

TD_SMOTE
Implements SMOTE and three variations (ADASYN, Borderline, and SMOTE-NC) to sample from datasets, border groups, or mixed datasets.

TD_TargetEncodingFit
Takes the InputTable and a CategoricalTable as input and generates the required hyperparameters to be used by the TD_TargetEncodingTransform function for encoding the categorical values.

TD_TargetEncodingTransform
Takes the InputTable and a FitTable generated by TD_TargetEncodingFit for encoding the categorical values.

TD_Unpivoting
Unpivots the data, that is, changes the data from dense format to sparse format.



## Feature engineering utility functions

TD_FillRowID
Adds a column of unique row identifiers to the input table.

TD_NumApply
Applies a specified numeric operator to the specified input table columns.

TD_RoundColumns
Rounds the values of each specified input table column to a specified number of decimal places.

TD_StrApply
Applies a specified string operator to the specified input table columns.


## Model scoring functions

TD_DecisionForestPredict
Uses the model output by TD_DecisionForest function to analyze the input data and make 
predictions.

TD_GLMPredict
Predicts target values (regression) and class labels (classification) for test data using a GLM model of the TD_GLM function.

TD_KMeansPredict
Uses the cluster centroids in the TD_KMeans function output to assign the input data points to the cluster centroids.

TD_NaiveBayesPredict
Uses the model generated by TD_NaiveBayes function to predict the outcomes for a test set of data.

TD_OneClassSVMPredict
Predicts target class labels (classification) for test data using a one-class SVM model trained by TD_OneClassSVM.

TD_SVMPredict
Predicts target values (regression) and class labels (classification) for test data using an SVM model trained by TD_SVM.

TD_XGBoostPredict
Runs the predictive algorithm based on the model generated by TD_XGBoost.


## Model evaluation functions

TD_SHAP
Computes the contribution of each feature in a prediction as as average marginal contribution of the feature value across all possible coalitions.

TD_Silhouette
Determines how well the data is clustered among clusters.

TD_ClassificationEvaluator
Computes the Confusion matrix, precision, recall, and F1-score based on the observed labels (true labels) and the predicted labels.

TD_RegressionEvaluator
Computes metrics to evaluate and compare multiple models and summarizes how close predictions are to their expected values.

TD_ROC
Accepts a set of prediction-actual pairs for a binary classification model and calculates the True-positive rate (TPR), False-positive rate (FPR), The area under the ROC curve (AUC), and Gini coefficient values for a range of discrimination thresholds.

TD_TrainTestSplit
Simulates model performance on new data.


## Text analytic functions

TD_Ngramsplitter
Tokenizes (splits) an input stream and emits n multigrams, based on specified delimiter and reset parameters. Useful for sentiment analysis, topic identification, and document classification.

TD_NaiveBayesTextClassifierPredict
Uses the model output by TD_NaiveBayesTextClassifierTrainer function to analyze the input data and make predictions.

TD_NaiveBayesTextClassifierTrainer
Calculates the conditional probabilities for token-category pairs, the prior probabilities, and the missing token probabilities for all categories.

TD_SentimentExtractor
Uses a dictionary model to extract the sentiment (positive, negative, or neutral) of each input document or sentence.

TD_TextParser
Tokenizes an input stream of words and creates a row for each word in the output table.

TD_TFIDF
Takes any document set and outputs the Term Frequency, Inverse Document Frequency, and Term Frequency - Inverse Document Frequency scores for each term.

TD_WordEmbeddings
Uses training and prediction to determine the similarity between words and phrases.


## Hypothesis testing functions

TD_ANOVA
Performs analysis of variance (ANOVA) test to analyze the difference between the means.

TD_ChiSq
Performs Pearson's chi-squared test for independence.

TD_FTest
Performs an F-test, for which the test statistic has an F-distribution under the null 
hypothesis.

TD_ZTest
Performs a Z-test, for which the distribution of the test statistic under the null hypothesis can be approximated by normal distribution.


## Path and pattern analysis functions

Attribution
Calculates attributions with a wide range of distribution models. Often used in web-page analysis.

nPath
Performs regular pattern matching over a sequence of rows from one or more inputs.

nPath
Maps each click in a clickstream to a unique session identifier.

