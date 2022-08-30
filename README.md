# Cosmos odyssey

## Implemented features

-   Graph creation based on the rules of the task
-   Graph traversal using Breadth first search to find paths between planets
-   User can choose starting point and ending point
-   Routes to whatever planets are displayed alongside price and additional data
-   User is able to choose the provider
-   Some unit tests (plan to add more)
-   Some unit tests (plan to add more)

## Missing features

-   Pricelist updates do not automatically reflect in the UI. I would implement this by setting up a listener that checks whether or not the time specified in the API has passed, then only display the travels which match that criteria.

-   User is not able to filter the result based on price distance or travel time. I would probably set up a small dropdown with "cheapest first", "expensive first" etc as the options. Then according to the user's input, make functions with Array.filter method, to match the elements which fit user's criteria.

## How to run the code

-   `npm start` - this starts both the proxy\* and the react app (NB! THIS ONLY WORKS ON UNIX SYSTEMS)
-   `npm run start-react` - this starts only the react app
-   `npm run start-proxy` - this starts the proxy\*

\*The proxy is needed due to CORS error which would otherwise happen if the API is called from the react app itself.

To run the code in a Windows machine, the user must run proxy in one terminal, and react app in other.
