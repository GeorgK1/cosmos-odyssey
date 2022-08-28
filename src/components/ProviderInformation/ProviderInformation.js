const ProviderInformation = (props) => {
    return (
        <div>
            <input
                type={'radio'}
                onChange={props.onChange}
                value={props.price}
                name='price'
            />

            <label> Price: {props.price}</label>

            <p>Flight start: {props.flightStart}</p>
            <p>Flight end: {props.flightEnd}</p>

        </div>
    );
};

export default ProviderInformation