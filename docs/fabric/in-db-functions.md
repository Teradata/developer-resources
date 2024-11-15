---
id: in-db-functions
title: In-database functions
description: Learn about the analytic functions you can use in the AI Unlimited Fabric Workload.
sidebar_label: Analytics functions
sidebar_position: 3
pagination_prev: null
pagination_next: null
displayed_sidebar: fabricSidebar
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Analytics functions

To further explore the AI Unlimited Workload, feel free to go through the rest of the data prep notebook or try one of the other sample notebooks.  You can also create a new notebook item and select “Create a new” to do any of your own analysis and try our in-database functions. 

Follow the link in the function name to find usage notes.

:::note
Usage instructions often reference “CREATE TABLE.” To write to OneLake, you must use “CREATE OTF TABLE.”
:::

## Data cleaning functions

[TD_GetFutileColumns](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/b_Z5zq5my16EFYd__Mayaw)<br/>
Returns the futile column names.

[TD_OutlierFilterFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Me35Rpf4QecJVgPQOon5bw)<br/>
Calculates the lower_percentile, upper_percentile, count of rows, and median for the specified input table columns.

[TD_OutlierFilterTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/JiI~9xlKZMt5d7R3U1P4OA)<br/>
Filters outliers from the input table.

[TD_GetRowsWithoutMissingValues](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/GoJR2x7XPyNAO~OpMpnHiQ)<br/>
Displays the rows that have non-NULL values in the specified input table columns.

[TD_SimpleImputeFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/8VbPxd8w8YvFtOxl9Dxmxg)<br/>
Outputs a table of values to substitute for missing values in the input table.

[TD_SimpleImputeTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/V0j0YA~DeCfLhAcp6Dz1jA)<br/>
Substitutes specified values for missing values in the input table.

[TD_ConvertTo](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/XjsuBA5Z8TjgwGDJu9dWqg)<br/>
Converts the specified input table columns to specified data types.

[Pack](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/uxfV8EfA9z1Y7acrFojeAg)<br/>
Compresses data in multiple columns into a single packed data column.

[Unpack](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/UOs8cnN~KQW3cdaBIgCZOA)<br/>
Expands data from a single packed column to multiple unpacked columns.

[StringSimilarity](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/mwjPJSrMzfFbWFDI6VNvLw)<br/>
Calculates the similarity between two strings, using the specified comparison method.


## Data exploration functions

[MovingAverage](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/02_sA3cQLj4mcJHnyifpEA)<br/>
Computes average values in a series.

[TD_CategoricalSummary](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/8mBpvsyC2lTCCKSoxmn_Ew)<br/>
Displays the distinct values and their counts for each specified input table column.

[TD_ColumnSummary](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Wrz37Gl0CRb6OCxIysi_TA)<br/>
Displays a summary of each specified input table column.

[TD_GetRowsWithMissingValues](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/QWO2DLLwbEnCMTISHg3CEg)<br/>
Displays the rows that have NULL values in the specified input table columns.

[TD_Histogram](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/kUoyVuP9X6YkdIS~co4VXQ)<br/>
Calculates the frequency distribution of a data set.

[TD_QQNorm](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/zH_UkUTCmrRdA~4TScx_wg)<br/>
Checks whether the values in the specified input table columns are normally distributed.

[TD_UnivariateStatistics](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/rlKCmfbs65BiBD~8Uo0Esw)<br/>
Displays descriptive statistics for each specified numeric input table column.

[TD_WhichMax](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/tYBQWBwLmI5kqxbfOWx67A)<br/>
Displays all rows that have the maximum value in a specified input table column.

[TD_WhichMin](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/IAf_QQwQK0eE2bICuaLoNg)<br/>
Displays all rows that have the minimum value in specified input table column.


## Feature engineering transform functions

[Antiselect](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/lqQt2cDc0sIz0n09sqRhIw)<br/>
AntiSelect returns all columns except those specified.

[TD_BinCodeFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/0OM9MT3XHQiVLgjCSx3WoQ)<br/>
Converts numeric data to categorical data by binning the numeric data into multiple 
numeric bins (intervals).

[TD_BinCodeTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/psM7B139os8IyiDoYXcPiA)<br/>
Transforms input table columns from the BinCodeFit function output.

[TD_ColumnTransformer](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/41nrc50qnYn0txn3dG9XMw)<br/>
Transforms the input table columns in a single operation.

[TD_FunctionFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/uImNsecSd6NpsEMG1mQcWg)<br/>
Determines whether specified numeric transformations can be applied to specified input 
columns.

[TD_FunctionTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/NpkHhyz~Gw2vIxjoFo0FdA)<br/>
Applies numeric transformations to input columns.

[TD_NonLinearCombineFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/XIF8637UisNuzSCGZ2v6Tg)<br/>
Returns the target columns and a specified formula which uses the non-linear combination of existing features.

[TD_NonLinearCombineTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/KSqG7hgjWXuKlK8VdVZPMA)<br/>
Generates the values of the new feature using the specified formula from the TD_NonLinearCombineFit function output.

[TD_OneHotEncodingFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/P2SFhFE~x_yq3v4BpUkqSw)<br/>
Outputs a table of attributes and categorical values to the TD_OneHotEncodingTransform function.

[TD_OneHotEncodingTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/GnPtPgVTeoLOO4Tja1Y9Kg)<br/>
Encodes specified attributes and categorical values as one-hot numeric vectors using the output from the TD_OneHotEncodingFit function.

[TD_OrdinalEncodingFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/ZfMXll0ZIYfso0_UCAr6GA)<br/>
Encodes specified attributes and categorical values as one-hot numeric vectors using the output from the TD_OneHotEncodingFit function.

[TD_OrdinalEncodingTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Lj_DoH6ARRYeN~kKLHfk7A)<br/>
Maps the categorical value to a specified ordinal value using the TD_OrdinalEncodingFit output.

[TD_Pivoting](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/TxeqkuVslAZxidCC74QkYw)<br/>
Pivots the data, that is, changes the data from sparse to dense format.

[TD_PolynomialFeaturesFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/_K1ekns0IDbGDTM1HQxspA)<br/>
Stores all the specified values in the argument in a tabular format.

[TD_PolynomialFeaturesTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/1OQ4eudbSSDT1erG0Y_s0g)<br/>
Extracts values of arguments from the output of the TD_PolynomialFeaturesFit function and generates a feature matrix of all polynomial combinations of the features.

[TD_RandomProjectionFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/0AXI82g0cy6L0rznmznOAg)<br/>
Returns a random projection matrix based on the specified arguments.

[TD_RandomProjectionMinComponents](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/xbK4DmHKMiWOnzl6dsdVYw)<br/>
Calculates the minimum number of components required for applying RandomProjection on the given dataset for the specified epsilon(distortion) parameter value.

[TD_RandomProjectionTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/eaNGj6~T5vPmHUmw6OwOYA)<br/>
Converts the high-dimensional input data to a lower-dimensional space using the TD_RandomProjectionFit function output.

[TD_RowNormalizeFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/IxqL8wQdqRhpZEezy2Q5xQ)<br/>
Outputs a table of parameters and specified input columns to TD_RowNormalizeTransform which normalizes the input columns row-wise.

[TD_RowNormalizeTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/bMKFA_GzNGhT8pp_GfWepQ)<br/>
Normalizes the input columns row-wise using the output of the TD_RowNormalizeFit function.

[TD_ScaleFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/6h44ArcP94PM6IqxzUDZSg)<br/>
Outputs a table of statistics to the TD_ScaleTransform function.

[TD_ScaleTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/eIDj_vjwMJGCy39UL6bf7w)<br/>
Scales the specified input table columns using the output of the TD_ScaleFit function.

[TD_SMOTE](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/54E9La6Sm7YUY4csxkmPHg)<br/>
Implements SMOTE and three variations (ADASYN, Borderline, and SMOTE-NC) to sample from datasets, border groups, or mixed datasets.

[TD_TargetEncodingFit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/47NXz1JZpW~3BDiKZn~ILA)<br/>
Takes the InputTable and a CategoricalTable as input and generates the required hyperparameters to be used by the TD_TargetEncodingTransform function for encoding the categorical values.

[TD_TargetEncodingTransform](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/lzO3HO3qILxP1vuIqAcFHw)<br/>
Takes the InputTable and a FitTable generated by TD_TargetEncodingFit for encoding the categorical values.

[TD_Unpivoting](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/XAFMpUtRTOapUKDUYiSKOg)<br/>
Unpivots the data, that is, changes the data from dense format to sparse format.



## Feature engineering utility functions

[TD_FillRowID](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/9xJU5q~gESaEwFEDw~cvFQ)<br/>
Adds a column of unique row identifiers to the input table.

[TD_NumApply](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/nEpFGmTCAf7oWVAaVeMq6Q)<br/>
Applies a specified numeric operator to the specified input table columns.

[TD_RoundColumns](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/TDiQfjeKM5FOng2OYGpzBw)<br/>
Rounds the values of each specified input table column to a specified number of decimal places.

[TD_StrApply](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/081Nftw_y2nN9gqG5C80Yg)<br/>
Applies a specified string operator to the specified input table columns.


## Model scoring functions

[TD_DecisionForestPredict](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/MvXnOyfnUPEiqStSYKyLBw)<br/>
Uses the model output by TD_DecisionForest function to analyze the input data and make 
predictions.

[TD_GLMPredict](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/oAjgxlwMuwrnlrjtBfWoCQ)<br/>
Predicts target values (regression) and class labels (classification) for test data using a GLM model of the TD_GLM function.

[TD_KMeansPredict](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/1e7tkfaSWWRYIW6nUdnPnQ)<br/>
Uses the cluster centroids in the TD_KMeans function output to assign the input data points to the cluster centroids.

[TD_NaiveBayesPredict](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/igDNJBkLGqMCO7Z2SonHuw)<br/>
Uses the model generated by TD_NaiveBayes function to predict the outcomes for a test set of data.

[TD_OneClassSVMPredict](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/8EDhhtzWecmor0A4Xrf0Sg)<br/>
Predicts target class labels (classification) for test data using a one-class SVM model trained by TD_OneClassSVM.

[TD_SVMPredict](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/IfVj9ZO6xe_5gNl_5E32OQ)<br/>
Predicts target values (regression) and class labels (classification) for test data using an SVM model trained by TD_SVM.

[TD_XGBoostPredict](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/QnEK0Bl9TzDjFsq2iRL3VQ)<br/>
Runs the predictive algorithm based on the model generated by TD_XGBoost.


## Model evaluation functions

[TD_SHAP](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/f8~YOTqcMoF2ioMgCPjWXQ)<br/>
Computes the contribution of each feature in a prediction as as average marginal contribution of the feature value across all possible coalitions.

[TD_Silhouette](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/YPTk8aenMiwfegEUa_nKvA)<br/>
Determines how well the data is clustered among clusters.

[TD_ClassificationEvaluator](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Bq0ih5D1m9Xpbf1Ov2FAVw)<br/>
Computes the Confusion matrix, precision, recall, and F1-score based on the observed labels (true labels) and the predicted labels.

[TD_RegressionEvaluator](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/WIp1Cz1kfDWpNRL6NLYI4A)<br/>
Computes metrics to evaluate and compare multiple models and summarizes how close predictions are to their expected values.

[TD_ROC](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/T4Zyh~463ovMUve7feUxDA)<br/>
Accepts a set of prediction-actual pairs for a binary classification model and calculates the True-positive rate (TPR), False-positive rate (FPR), The area under the ROC curve (AUC), and Gini coefficient values for a range of discrimination thresholds.

[TD_TrainTestSplit](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/eOjc7zSRjbOhrFdTkQocKw)<br/>
Simulates model performance on new data.


## Text analytic functions

[TD_Ngramsplitter](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/FUqhrm_wiF9qTGOTT1ZmAg)<br/>
Tokenizes (splits) an input stream and emits n multigrams, based on specified delimiter and reset parameters. Useful for sentiment analysis, topic identification, and document classification.

[TD_NaiveBayesTextClassifierPredict](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/SsWEjUjuSklxyWBkbLydiQ)<br/>
Uses the model output by TD_NaiveBayesTextClassifierTrainer function to analyze the input data and make predictions.

[TD_NaiveBayesTextClassifierTrainer](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/5HX2TpMrN8pb6PB~SKyIRw)<br/>
Calculates the conditional probabilities for token-category pairs, the prior probabilities, and the missing token probabilities for all categories.

[TD_SentimentExtractor](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/NtXmtVk800jPVerB3NOHeA)<br/>
Uses a dictionary model to extract the sentiment (positive, negative, or neutral) of each input document or sentence.

[TD_TextParser](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/kNMslBJeVbMvfmJNknBflQ)<br/>
Tokenizes an input stream of words and creates a row for each word in the output table.

[TD_TFIDF](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/RmYZugC7L2kfKG9VujTR9A)<br/>
Takes any document set and outputs the Term Frequency, Inverse Document Frequency, and Term Frequency - Inverse Document Frequency scores for each term.

[TD_WordEmbeddings](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/UqTgITMWNTtcs2voWr5tRQ)<br/>
Uses training and prediction to determine the similarity between words and phrases.


## Hypothesis testing functions

[TD_ANOVA](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/vupVR98ySgmzCDbOzfaGTQ)<br/>
Performs analysis of variance (ANOVA) test to analyze the difference between the means.

[TD_ChiSq](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Uyq~obJd7475hkRreEgdiQ)<br/>
Performs Pearson's chi-squared test for independence.

[TD_FTest](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/t0daZPucb6dmU27IZd5aBQ)<br/>
Performs an F-test, for which the test statistic has an F-distribution under the null 
hypothesis.<br/>

[TD_ZTest](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/7ReecLnuYtDsBwM5z4sQlg)<br/>
Performs a Z-test, for which the distribution of the test statistic under the null hypothesis can be approximated by normal distribution.


## Path and pattern analysis functions

[Attribution](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/yAVP~Y8cbwWJBQCMkACDnQ)<br/>
Calculates attributions with a wide range of distribution models. Often used in web-page analysis.

[nPath](https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/TKfX4k2uBD5vH1B~ROrV2w)<br/>
Performs regular pattern matching over a sequence of rows from one or more inputs.

[Sessionize](https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Analyzing-Your-Data/Analytics-Database-Analytic-Functions/Path-and-Pattern-Analysis-Functions/Sessionize)<br/>
Maps each click in a clickstream to a unique session identifier.

