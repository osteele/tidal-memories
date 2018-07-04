export const withBackground = color => WrappedComponent => props => {
    props.setBackground(color);
    return <WrappedComponent {...props} />;
};

export const withImages = WrappedComponent => props =>
    props.images ? (
        <WrappedComponent {...props} />
    ) : (
        <div className="ui large active loader">
            <p />
        </div>
    );