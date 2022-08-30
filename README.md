# Cosmos odyssey

## Implemented features

-   Graph creation based on the rules of the task
-   Graph traversal using Breadth first search to find paths between planets
-   User can choose starting point and ending point
-   Routes to whatever planets are displayed alongside price and additional data
-   User is able to choose the provider
-   Some unit tests (plan to add more)

## Missing features

-   Currently the code doesnt implement a form system, so user cannot make a reservation. I would implement this by using React Formik, and make the dropdowns and other user inputs using Formiks Field class,

-   Pricelist updates do not automatically reflect in the UI. I would implement this by setting up a listener that checks whether or not the time specified in the API has passed, then only display the travels which match that criteria.

-   User is not able to filter the result based on price distance or travel time. I would probably set up a small dropdown with "cheapest first", "expensive first" etc as the options. Then according to the user's input, make functions with Array.filter method, to match the elements which fit user's criteria.
