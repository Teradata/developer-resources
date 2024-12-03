"use strict";(self.webpackChunkai_unlimited_docs=self.webpackChunkai_unlimited_docs||[]).push([[1860],{50186:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=n(74848),a=n(28453);n(56240),n(19365);const r={id:"in-db-functions",title:"In-database functions",description:"Learn about the analytic functions you can use in the AI Unlimited Fabric Workload.",sidebar_label:"Analytics functions",sidebar_position:3,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},i="Analytics functions",o={id:"fabric/in-db-functions",title:"In-database functions",description:"Learn about the analytic functions you can use in the AI Unlimited Fabric Workload.",source:"@site/docs/fabric/in-db-functions.md",sourceDirName:"fabric",slug:"/fabric/in-db-functions",permalink:"/pr-preview/pr-155/ai-unlimited/fabric/in-db-functions",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{id:"in-db-functions",title:"In-database functions",description:"Learn about the analytic functions you can use in the AI Unlimited Fabric Workload.",sidebar_label:"Analytics functions",sidebar_position:3,pagination_prev:null,pagination_next:null,displayed_sidebar:"fabricSidebar"},sidebar:"fabricSidebar"},c={},l=[{value:"Data exploration functions",id:"data-exploration-functions",level:2},{value:"Data cleaning functions",id:"data-cleaning-functions",level:2},{value:"Feature engineering transform functions",id:"feature-engineering-transform-functions",level:2},{value:"Feature engineering utility functions",id:"feature-engineering-utility-functions",level:2},{value:"Model scoring functions",id:"model-scoring-functions",level:2},{value:"Model evaluation functions",id:"model-evaluation-functions",level:2},{value:"Text analytic functions",id:"text-analytic-functions",level:2},{value:"Hypothesis testing functions",id:"hypothesis-testing-functions",level:2},{value:"Path and pattern analysis functions",id:"path-and-pattern-analysis-functions",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",p:"p",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"analytics-functions",children:"Analytics functions"}),"\n",(0,s.jsx)(t.p,{children:"To further explore the AI Unlimited Workload, feel free to go through the rest of the data prep notebook or try one of the other sample notebooks.  You can also create a new notebook item and select \u201cCreate a new\u201d to do any of your own analysis and try our in-database functions."}),"\n",(0,s.jsx)(t.p,{children:"Follow the link in the function name to find usage notes."}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsx)(t.p,{children:"Usage instructions often reference \u201cCREATE TABLE.\u201d To write to OneLake, you must use \u201cCREATE OTF TABLE.\u201d"})}),"\n",(0,s.jsx)(t.h2,{id:"data-exploration-functions",children:"Data exploration functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/b_Z5zq5my16EFYd__Mayaw",children:"TD_GetFutileColumns"}),(0,s.jsx)("br",{}),"\nReturns the futile column names. Futile columns are those columns that typically aren\u2019t useful for analytics or modeling. This can include columns that have all the same value, represent a unique identifier, or contain redundant data."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/GoJR2x7XPyNAO~OpMpnHiQ",children:"TD_GetRowsWithoutMissingValues"}),(0,s.jsx)("br",{}),"\nDisplays the rows that have non-NULL values in the specified input table columns."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/02_sA3cQLj4mcJHnyifpEA",children:"MovingAverage"}),(0,s.jsx)("br",{}),"\nComputes average values in a series."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/8mBpvsyC2lTCCKSoxmn_Ew",children:"TD_CategoricalSummary"}),(0,s.jsx)("br",{}),"\nDisplays the distinct values and their counts for each specified input table column."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Wrz37Gl0CRb6OCxIysi_TA",children:"TD_ColumnSummary"}),(0,s.jsx)("br",{}),"\nDisplays a summary of each specified input table column."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/QWO2DLLwbEnCMTISHg3CEg",children:"TD_GetRowsWithMissingValues"}),(0,s.jsx)("br",{}),"\nDisplays the rows that have NULL values in the specified input table columns."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/kUoyVuP9X6YkdIS~co4VXQ",children:"TD_Histogram"}),(0,s.jsx)("br",{}),"\nCalculates the frequency distribution of a data set."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/zH_UkUTCmrRdA~4TScx_wg",children:"TD_QQNorm"}),(0,s.jsx)("br",{}),"\nChecks whether the values in the specified input table columns are normally distributed."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/rlKCmfbs65BiBD~8Uo0Esw",children:"TD_UnivariateStatistics"}),(0,s.jsx)("br",{}),"\nDisplays descriptive statistics for each specified numeric input table column."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/tYBQWBwLmI5kqxbfOWx67A",children:"TD_WhichMax"}),(0,s.jsx)("br",{}),"\nDisplays all rows that have the maximum value in a specified input table column."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/IAf_QQwQK0eE2bICuaLoNg",children:"TD_WhichMin"}),(0,s.jsx)("br",{}),"\nDisplays all rows that have the minimum value in specified input table column."]}),"\n",(0,s.jsx)(t.h2,{id:"data-cleaning-functions",children:"Data cleaning functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/lqQt2cDc0sIz0n09sqRhIw",children:"Antiselect"}),(0,s.jsx)("br",{}),"\nReturns all columns except those specified."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Me35Rpf4QecJVgPQOon5bw",children:"TD_OutlierFilterFit"}),(0,s.jsx)("br",{}),"\nCalculates the lower_percentile, upper_percentile, count of rows, and median for the specified input table columns. This calculation can then be used to filter out statistical outliers in the training data, and can be reused for new data that needs to be scored."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/JiI~9xlKZMt5d7R3U1P4OA",children:"TD_OutlierFilterTransform"}),(0,s.jsx)("br",{}),"\nFilters outliers from the input table. Performs the transformation based on the calculations performed in the Fit function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/8VbPxd8w8YvFtOxl9Dxmxg",children:"TD_SimpleImputeFit"}),(0,s.jsx)("br",{}),"\nOutputs a table of values to substitute for missing values in the input table. You can define how the values are to be filled, either statistically or with a literal value."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/V0j0YA~DeCfLhAcp6Dz1jA",children:"TD_SimpleImputeTransform"}),(0,s.jsx)("br",{}),"\nSubstitutes specified values for missing values in the input table."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/XjsuBA5Z8TjgwGDJu9dWqg",children:"TD_ConvertTo"}),(0,s.jsx)("br",{}),"\nConverts the specified input table columns to specified data types."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/uxfV8EfA9z1Y7acrFojeAg",children:"Pack"}),(0,s.jsx)("br",{}),"\nConcatenates data from multiple columns into a single column with a delimiter."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/UOs8cnN~KQW3cdaBIgCZOA",children:"Unpack"}),(0,s.jsx)("br",{}),"\nSplits the data based on a delimiter. This can be used with any column that can be split with a delimiter, not just packed columns."]}),"\n",(0,s.jsx)(t.h2,{id:"feature-engineering-transform-functions",children:"Feature engineering transform functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/0OM9MT3XHQiVLgjCSx3WoQ",children:"TD_BinCodeFit"}),(0,s.jsx)("br",{}),"\nAnalyzes columns that contain continuous numeric values in order to calculate how to create categoric values with either automatic or custom bin values."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/psM7B139os8IyiDoYXcPiA",children:"TD_BinCodeTransform"}),(0,s.jsx)("br",{}),"\nCreates a NEW column that contains the categoric values based on the output of the BinCodeFit function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/41nrc50qnYn0txn3dG9XMw",children:"TD_ColumnTransformer"}),(0,s.jsx)("br",{}),"\nPerforms multiple data transformations in parallel by passing multiple fit objects to the function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/uImNsecSd6NpsEMG1mQcWg",children:"TD_FunctionFit"}),(0,s.jsx)("br",{}),"\nDetermines whether specified numeric transformations can be applied to specified input\ncolumns."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/NpkHhyz~Gw2vIxjoFo0FdA",children:"TD_FunctionTransform"}),(0,s.jsx)("br",{}),"\nApplies numeric transformations to input columns, creating a new column with the function output."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/XIF8637UisNuzSCGZ2v6Tg",children:"TD_NonLinearCombineFit"}),(0,s.jsx)("br",{}),"\nReturns the target columns and a specified formula which uses the non-linear combination of existing features."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/KSqG7hgjWXuKlK8VdVZPMA",children:"TD_NonLinearCombineTransform"}),(0,s.jsx)("br",{}),"\nGenerates the values of the new feature using the specified formula from the TD_NonLinearCombineFit function output."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/P2SFhFE~x_yq3v4BpUkqSw",children:"TD_OneHotEncodingFit"}),(0,s.jsx)("br",{}),"\nConverts all possible categoric values to individual columns that contain a binary vector (0 or 1) representing whether that observation features that value (1 for True, 0 for False)."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/GnPtPgVTeoLOO4Tja1Y9Kg",children:"TD_OneHotEncodingTransform"}),(0,s.jsx)("br",{}),"\nEncodes specified attributes and categorical values as one-hot numeric vectors using the output from the TD_OneHotEncodingFit function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/ZfMXll0ZIYfso0_UCAr6GA",children:"TD_OrdinalEncodingFit"}),(0,s.jsx)("br",{}),"\nEncodes a specified or generated numeric value for each categoric value in a specified set of columns in the data set."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Lj_DoH6ARRYeN~kKLHfk7A",children:"TD_OrdinalEncodingTransform"}),(0,s.jsx)("br",{}),"\nMaps the categorical value to a specified ordinal value using the TD_OrdinalEncodingFit output."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/TxeqkuVslAZxidCC74QkYw",children:"TD_Pivoting"}),(0,s.jsx)("br",{}),"\nPivots the data, that is, changes the data from sparse to dense format."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/_K1ekns0IDbGDTM1HQxspA",children:"TD_PolynomialFeaturesFit"}),(0,s.jsx)("br",{}),"\nStores all the specified values in the argument in a tabular format. These arguments include the target columns and the degree of polynomial combinations to generate in the transformation function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/1OQ4eudbSSDT1erG0Y_s0g",children:"TD_PolynomialFeaturesTransform"}),(0,s.jsx)("br",{}),"\nExtracts values of arguments from the output of the TD_PolynomialFeaturesFit function and generates a feature matrix of all polynomial combinations of the features."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/0AXI82g0cy6L0rznmznOAg",children:"TD_RandomProjectionFit"}),(0,s.jsx)("br",{}),"\nReduces the dimensionality of the dataset while maintaining a maximum distortion value. Returns a random projection matrix based on the specified arguments."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/xbK4DmHKMiWOnzl6dsdVYw",children:"TD_RandomProjectionMinComponents"}),(0,s.jsx)("br",{}),"\nCalculates the minimum number of components required for applying RandomProjection on the given dataset for the specified epsilon(distortion) parameter value."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/eaNGj6~T5vPmHUmw6OwOYA",children:"TD_RandomProjectionTransform"}),(0,s.jsx)("br",{}),"\nConverts the high-dimensional input data to a lower-dimensional space using the TD_RandomProjectionFit function output."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/IxqL8wQdqRhpZEezy2Q5xQ",children:"TD_RowNormalizeFit"}),(0,s.jsx)("br",{}),"\nOutputs a table of parameters and specified input columns to TD_RowNormalizeTransform which normalizes the input columns row-wise."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/bMKFA_GzNGhT8pp_GfWepQ",children:"TD_RowNormalizeTransform"}),(0,s.jsx)("br",{}),"\nNormalizes the input columns row-wise using the output of the TD_RowNormalizeFit function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/6h44ArcP94PM6IqxzUDZSg",children:"TD_ScaleFit"}),(0,s.jsx)("br",{}),"\nOutputs a table of statistics to the TD_ScaleTransform function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/eIDj_vjwMJGCy39UL6bf7w",children:"TD_ScaleTransform"}),(0,s.jsx)("br",{}),"\nScales the specified input table columns using the output of the TD_ScaleFit function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/54E9La6Sm7YUY4csxkmPHg",children:"TD_SMOTE"}),(0,s.jsx)("br",{}),"\nImplements SMOTE and three variations (ADASYN, Borderline, and SMOTE-NC) to sample from datasets, border groups, or mixed datasets."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/47NXz1JZpW~3BDiKZn~ILA",children:"TD_TargetEncodingFit"}),(0,s.jsx)("br",{}),"\nAssigns the likelihood or expected value (classification or regression) for each categoric value, and encodes the category with that value. Calculates these values based on selected encoding methods and input parameters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/lzO3HO3qILxP1vuIqAcFHw",children:"TD_TargetEncodingTransform"}),(0,s.jsx)("br",{}),"\nTakes the InputTable and a FitTable generated by TD_TargetEncodingFit for encoding the categorical values."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/XAFMpUtRTOapUKDUYiSKOg",children:"TD_Unpivoting"}),(0,s.jsx)("br",{}),"\nUnpivots the data, that is, changes the data from dense format to sparse format."]}),"\n",(0,s.jsx)(t.h2,{id:"feature-engineering-utility-functions",children:"Feature engineering utility functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/9xJU5q~gESaEwFEDw~cvFQ",children:"TD_FillRowID"}),(0,s.jsx)("br",{}),"\nAdds a column of unique row identifiers to the input table."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/nEpFGmTCAf7oWVAaVeMq6Q",children:"TD_NumApply"}),(0,s.jsx)("br",{}),"\nApplies a specified numeric operator to the specified input table columns."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/TDiQfjeKM5FOng2OYGpzBw",children:"TD_RoundColumns"}),(0,s.jsx)("br",{}),"\nRounds the values of each specified input table column to a specified number of decimal places."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/081Nftw_y2nN9gqG5C80Yg",children:"TD_StrApply"}),(0,s.jsx)("br",{}),"\nApplies a specified string operator to the specified input table columns."]}),"\n",(0,s.jsx)(t.h2,{id:"model-scoring-functions",children:"Model scoring functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/MvXnOyfnUPEiqStSYKyLBw",children:"TD_DecisionForestPredict"}),(0,s.jsx)("br",{}),"\nUses the model output by TD_DecisionForest function to analyze the input data and make\npredictions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/oAjgxlwMuwrnlrjtBfWoCQ",children:"TD_GLMPredict"}),(0,s.jsx)("br",{}),"\nPredicts target values (regression) and class labels (classification) for test data using a GLM model of the TD_GLM function."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/1e7tkfaSWWRYIW6nUdnPnQ",children:"TD_KMeansPredict"}),(0,s.jsx)("br",{}),"\nUses the cluster centroids in the TD_KMeans function output to assign the input data points to the cluster centroids."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/igDNJBkLGqMCO7Z2SonHuw",children:"TD_NaiveBayesPredict"}),(0,s.jsx)("br",{}),"\nUses the model generated by TD_NaiveBayes function to predict the outcomes for a test set of data."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/8EDhhtzWecmor0A4Xrf0Sg",children:"TD_OneClassSVMPredict"}),(0,s.jsx)("br",{}),"\nPredicts target class labels (classification) for test data using a one-class SVM model trained by TD_OneClassSVM."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/IfVj9ZO6xe_5gNl_5E32OQ",children:"TD_SVMPredict"}),(0,s.jsx)("br",{}),"\nPredicts target values (regression) and class labels (classification) for test data using an SVM model trained by TD_SVM."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/QnEK0Bl9TzDjFsq2iRL3VQ",children:"TD_XGBoostPredict"}),(0,s.jsx)("br",{}),"\nRuns the predictive algorithm based on the model generated by TD_XGBoost."]}),"\n",(0,s.jsx)(t.h2,{id:"model-evaluation-functions",children:"Model evaluation functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/f8~YOTqcMoF2ioMgCPjWXQ",children:"TD_SHAP"}),(0,s.jsx)("br",{}),"\nComputes the contribution of each feature in a prediction as as average marginal contribution of the feature value across all possible coalitions."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/YPTk8aenMiwfegEUa_nKvA",children:"TD_Silhouette"}),(0,s.jsx)("br",{}),"\nDetermines how well the data is clustered among clusters, meaning how similar the data is to its assigned cluster as compared to other clusters."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Bq0ih5D1m9Xpbf1Ov2FAVw",children:"TD_ClassificationEvaluator"}),(0,s.jsx)("br",{}),"\nComputes the Confusion matrix, precision, recall, and F1-score based on the observed labels (true labels) and the predicted labels."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/WIp1Cz1kfDWpNRL6NLYI4A",children:"TD_RegressionEvaluator"}),(0,s.jsx)("br",{}),"\nComputes metrics to evaluate and compare multiple models and summarizes how close predictions are to their expected values."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/T4Zyh~463ovMUve7feUxDA",children:"TD_ROC"}),(0,s.jsx)("br",{}),"\nAccepts a set of prediction-actual pairs for a binary classification model and calculates the True-positive rate (TPR), False-positive rate (FPR), the area under the ROC curve (AUC), and Gini coefficient values for a range of discrimination thresholds."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/eOjc7zSRjbOhrFdTkQocKw",children:"TD_TrainTestSplit"}),(0,s.jsx)("br",{}),"\nSimulates model performance on new data. Randomly splits the data based on defined percentages with optional column stratification and random seeding."]}),"\n",(0,s.jsx)(t.h2,{id:"text-analytic-functions",children:"Text analytic functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/mwjPJSrMzfFbWFDI6VNvLw",children:"StringSimilarity"}),(0,s.jsx)("br",{}),"\nCalculates the similarity between two strings, using the specified comparison method."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/FUqhrm_wiF9qTGOTT1ZmAg",children:"TD_Ngramsplitter"}),(0,s.jsx)("br",{}),"\nTokenizes (splits) an input stream and emits n multigrams, based on specified delimiter and reset parameters. Useful for sentiment analysis, topic identification, and document classification."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/SsWEjUjuSklxyWBkbLydiQ",children:"TD_NaiveBayesTextClassifierPredict"}),(0,s.jsx)("br",{}),"\nUses the model output by TD_NaiveBayesTextClassifierTrainer function to analyze the input data and make classification predictions on text."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/5HX2TpMrN8pb6PB~SKyIRw",children:"TD_NaiveBayesTextClassifierTrainer"}),(0,s.jsx)("br",{}),"\nCalculates the conditional probabilities for token-category pairs, the prior probabilities, and the missing token probabilities for all categories."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/NtXmtVk800jPVerB3NOHeA",children:"TD_SentimentExtractor"}),(0,s.jsx)("br",{}),"\nUses a dictionary model to extract the sentiment (positive, negative, or neutral) of each input document or sentence."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/kNMslBJeVbMvfmJNknBflQ",children:"TD_TextParser"}),(0,s.jsx)("br",{}),"\nTokenizes an input stream of words and creates a row for each token in the output table."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/RmYZugC7L2kfKG9VujTR9A",children:"TD_TFIDF"}),(0,s.jsx)("br",{}),"\nTakes any document set and outputs the Term Frequency, Inverse Document Frequency, and Term Frequency - Inverse Document Frequency scores for each term."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/UqTgITMWNTtcs2voWr5tRQ",children:"TD_WordEmbeddings"}),(0,s.jsx)("br",{}),"\nPerforms vector embeddings of tokens or documents, and can calculate document or token similarity based on an input model."]}),"\n",(0,s.jsx)(t.h2,{id:"hypothesis-testing-functions",children:"Hypothesis testing functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/vupVR98ySgmzCDbOzfaGTQ",children:"TD_ANOVA"}),(0,s.jsx)("br",{}),"\nPerforms analysis of variance (ANOVA) test to analyze the difference between the means."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/Uyq~obJd7475hkRreEgdiQ",children:"TD_ChiSq"}),(0,s.jsx)("br",{}),"\nPerforms Pearson's chi-squared test for independence."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/t0daZPucb6dmU27IZd5aBQ",children:"TD_FTest"}),(0,s.jsx)("br",{}),"\nPerforms an F-test, for which the test statistic has an F-distribution under the null\nhypothesis.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/7ReecLnuYtDsBwM5z4sQlg",children:"TD_ZTest"}),(0,s.jsx)("br",{}),"\nPerforms a Z-test, for which the distribution of the test statistic under the null hypothesis can be approximated by normal distribution."]}),"\n",(0,s.jsx)(t.h2,{id:"path-and-pattern-analysis-functions",children:"Path and pattern analysis functions"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/yAVP~Y8cbwWJBQCMkACDnQ",children:"Attribution"}),(0,s.jsx)("br",{}),"\nCalculates attributions with a wide range of distribution models. Often used in web-page analysis."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/MjnRKOtqrhz~R18YsbqM8Q/TKfX4k2uBD5vH1B~ROrV2w",children:"nPath"}),(0,s.jsx)("br",{}),"\nPerforms regular pattern matching over a sequence of rows from one or more inputs, and returns a single row per match. nPath is extremely powerful for user journeys or other time-ordered events such as manufacturing, sensor data, and the like."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://docs.teradata.com/r/Teradata-VantageCloud-Lake/Analyzing-Your-Data/Analytics-Database-Analytic-Functions/Path-and-Pattern-Analysis-Functions/Sessionize",children:"Sessionize"}),(0,s.jsx)("br",{}),"\nMaps events in a time series (such as clicks in a clickstream) into a unique session identifier. It can also filter events based on a minimum event separation threshold."]})]})}function h(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},19365:(e,t,n)=>{n.d(t,{A:()=>i});n(96540);var s=n(34164);const a={tabItem:"tabItem_Ymn6"};var r=n(74848);function i(e){var t=e.children,n=e.hidden,i=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,i),hidden:n,children:t})}},56240:(e,t,n)=>{n.d(t,{A:()=>v});var s=n(96540),a=n(34164),r=n(23104),i=n(56347),o=n(205),c=n(57485);var l=n(89466);function d(e){var t,n;return null!=(t=null==(n=s.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,s.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,s.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t,n,s=(void 0===(n=function(e,t){return e.value===t.value})&&(n=function(e,t){return e===t}),(t=e).filter((function(e,s){return t.findIndex((function(t){return n(t,e)}))!==s})));if(s.length>0)throw new Error('Docusaurus error: Duplicate values "'+s.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function u(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function f(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,r=(0,i.W6)(),o=function(e){var t=e.queryString,n=void 0!==t&&t,s=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=s?s:null}({queryString:n,groupId:a});return[(0,c.aZ)(o),(0,s.useCallback)((function(e){if(o){var t=new URLSearchParams(r.location.search);t.set(o,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[o,r])]}function p(e){var t,n,a,r,i=e.defaultValue,c=e.queryString,d=void 0!==c&&c,p=e.groupId,m=h(e),b=(0,s.useState)((function(){return function(e){var t,n=e.defaultValue,s=e.tabValues;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!u({value:n,tabValues:s}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+s.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=s.find((function(e){return e.default})))?t:s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),j=b[0],x=b[1],g=f({queryString:d,groupId:p}),M=g[0],v=g[1],R=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:p}.groupId),n=(0,l.Dv)(t),a=n[0],r=n[1],[a,(0,s.useCallback)((function(e){t&&r.set(e)}),[t,r])]),q=R[0],T=R[1],y=function(){var e=null!=M?M:q;return u({value:e,tabValues:m})?e:null}();return(0,o.A)((function(){y&&x(y)}),[y]),{selectedValue:j,selectValue:(0,s.useCallback)((function(e){if(!u({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),v(e),T(e)}),[v,T,m]),tabValues:m}}var m=n(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(74848);function x(e){var t=e.className,n=e.block,s=e.selectedValue,i=e.selectValue,o=e.tabValues,c=[],l=(0,r.a_)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),a=o[n].value;a!==s&&(l(t),i(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var s,a=c.indexOf(e.currentTarget)+1;n=null!=(s=c[a])?s:c[0];break;case"ArrowLeft":var r,i=c.indexOf(e.currentTarget)-1;n=null!=(r=c[i])?r:c[c.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:function(e){return c.push(e)},onKeyDown:h,onClick:d},r,{className:(0,a.A)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":s===t}),children:null!=n?n:t}),t)}))})}function g(e){var t=e.lazy,n=e.children,a=e.selectedValue,r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var i=r.find((function(e){return e.props.value===a}));return i?(0,s.cloneElement)(i,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:r.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function M(e){var t=p(e);return(0,j.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,j.jsx)(x,Object.assign({},e,t)),(0,j.jsx)(g,Object.assign({},e,t))]})}function v(e){var t=(0,m.A)();return(0,j.jsx)(M,Object.assign({},e,{children:d(e.children)}),String(t))}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>o});var s=n(96540);const a={},r=s.createContext(a);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);