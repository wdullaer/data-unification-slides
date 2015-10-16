## Overview

1. How did we get here?
2. Data Integration
3. Data Unification

[//]: # (Slide)
## How did we get here?

[//]: # (Slide)
### Organic growth


1 Retailer


![1 retailer](./img/europe-1-dealer.png)


A few retailers


![n retailers](./img/europe-n-dealers.png)


A lot retailers and 1 distributor


![1 nmsc](./img/europe-1-nmsc.png)


A lot of retailers and a few distributors


![n nmscs](./img/europe-n-nmscs.png)


TME to centralise operations accros Europe


![tme](./img/europe-tme.png)

[//]: # (Slide)
### Result


All of customer data lives close to the customer


![dealer-and-nmsc-customer-data](./img/dealer-and-nmsc-customer-data.png)


But relevant data is increasingly incoming centrally


![tme data](./img/tme-dealer-and-nmsc-customer-data.png)


How do we link all this data together and feed it back?


![link tme data](./img/tme-data-link.png)

[//]: # (Slide)
## Data Integration - Ingestion


Mapping 2 sources


![2 sources mapping](./img/two-sources-mapping.png)


Linking 2 sources


![2 sources rules](./img/two-sources-rules.png)


Mapping 3 sources


![3 sources mapping](./img/three-sources-mapping.png)


Linking 3 sources


![3 sources rules](./img/three-sources-rules.png)


After some more time and sources


![more rules](./img/more-sources-rules.png)


### Y U NO WORK!!1!11
![Y U NO](./img/Y-U-NO.jpg)

[//]: # (Slide)
## Data Integration - Consumption


Which values do you retain?


![retain values](./img/source-data-original.png)


What is the origin of the data?


![origin of data](./img/entity-merge-origin.png)


What if multiple consumers of the data have different requirements for the merged entity?


![entity merge](./img/entity-merge.png)


How do you handle data updates in source systems?


![source data changed](./img/entity-merge-source-change.png)


How do you handle data updates in consuming systems?


![consume data changed](./img/entity-merge-consume-change.png)

[//]: # (Slide)
## Data Integration


### Slow

* Write a ton of scripts
* Manually profile, clean and map the data


![Data Cleaning](./img/data-cleaning-script.png)


### Costly

* Only scales with people
* Very often outsourced


### Opaque

* No documentation
* No audit trail


### Inefficient
* Low quality results
* Hard to keep up to date

[//]: # (Slide)
## Data Unification


1. Forward flow
2. Feedback flow

[//]: # (Slide)
## Forward flow


![forward flow diagram](./img/data-integration-process.png)

[//]: # (Slide)
### Ingest the data


Ingest in schema of source system
(Removes friction)

[//]: # (Slide)
### Map the data


Map fields from source systems into the target schema.


![2 sources mapping](./img/two-sources-mapping.png)


Machine learning assisted


![Matt Learning](./img/machine-learning.png)


Based on your mappings and the statistical profile of the attributes Tamr will offer mapping recommendations


![ML assisted mapping](./img/machine-learning-mapping.png)


Effort of mapping the data goes down as more sources are integrated

[//]: # (Slide)
### Link the data


Use ML model to link entities across all the records


![Matt Learning](./img/machine-learning.png)


Train model by evaluating record pairs


![training 1](./img/training-1.png)


![training 2](./img/training-2.png)


![training 3](./img/training-3.png)


![training 4](./img/training-4.png)


A business user can do this!


Regularly train new pairs to keep the model in sync with changes in the sources

[//]: # (Slide)
### Consume/Merge the data


Multiple views that essentially describe how individual fields are merged


![merge with views](./img/entity-merge-views.png)


Views are functions over the data -> flexibility

[//]: # (Slide)
## Feedback Flow


Save all updates as immutable events


![customer event list](./img/customer-event-list.png)


Create "pseudo" sources by providence


![pseudo sources](./img/pseudo-sources.png)


ML model will group events into clusters

[//]: # (Slide)
1. Integrates legacy sources
2. Scales well as a function of sources
3. Obtains knowledge where it resides
4. Supports multiple views/uses of the same base data
5. Avoids the creation of additional sources
6. Allows creation of new processes on top of consolidated data

[//]: # (Slide)
# Questions?
