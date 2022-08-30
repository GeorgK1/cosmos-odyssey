const PlanetsDropdown = (props) => {
    return (
        <select
            as='select'
            name='planets'
            id='planets'
            onChange={props.handleSelect}
            placeholder='Select a planet'>
            <option value='Mercury'>Mercury</option>
            <option value='Venus'>Venus</option>

            <option value='Earth'>Earth</option>

            <option value='Mars'>Mars</option>

            <option value='Jupiter'>Jupiter</option>
            <option value='Saturn'>Saturn</option>

            <option value='Uranus'>Uranus</option>
            <option value='Neptune'>Neptune</option>
        </select>
    );
};
export default PlanetsDropdown;
