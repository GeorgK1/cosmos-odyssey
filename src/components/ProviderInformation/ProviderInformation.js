const ProviderInformation = (props) => {
    return (
        <div>
            <input
                type={'radio'}
                onChange={props.onChange}
                value={props.price}
                name={props.name}
                data-testid='provider-info-radio'
            />

            <label data-testid='provider-info-price'>
                Price: {props.price}
            </label>
            <p data-testid='provider-info-start'>
                Flight start: {props.flightStart}
            </p>
            <p data-testid='provider-info-end'>Flight end: {props.flightEnd}</p>
        </div>
    );
};

export default ProviderInformation;
