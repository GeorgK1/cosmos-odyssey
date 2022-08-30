import useRouteBetweenPlanets from '../../hooks/useRouteBetweenPlanets';
import useCosmosApi from '../../hooks/useCosmosApi';
import TravelProviderDropDown from '../TravelProviderDropdown/TravelProviderDropdown';
const ShowTravel = (props) => {
    const routeBetweenPlanets = useRouteBetweenPlanets(props.from, props.to);
    const cosmosData = useCosmosApi();
    return routeBetweenPlanets.map((route, index) => {
        const pairOfPlanets = routeBetweenPlanets.slice(index, index + 2);

        //Get the travel from api which "from" correlates to pairofplanets first item(from),
        //and "to" correlates to pairofplanets second item (to)

        const travel = cosmosData.legs?.filter((leg) => {
            return (
                leg.routeInfo.from.name === pairOfPlanets.at(0) &&
                leg.routeInfo.to.name === pairOfPlanets.at(1) &&
                pairOfPlanets.length !== 0
            );
        });
        if (travel && travel.length > 0) {
            return (
                <div
                    className='routes'
                    key={travel.at(0).id}
                    data-testid='routes'>
                    <h1
                        key={travel[0].routeInfo.from.id}
                        data-testid='routes-from-to'>
                        {travel[0].routeInfo.from.name}
                        {'->'}
                        {travel[0].routeInfo.to.name}
                        {'\n'}
                    </h1>
                    <TravelProviderDropDown
                        providers={travel.at(0).providers}
                    />
                    <h3
                        key={travel.at(0).routeInfo.id}
                        data-testid='routes-distance'>
                        Distance: {travel.at(0).routeInfo.distance}
                    </h3>
                </div>
            );
        }
    });
};

export default ShowTravel;
