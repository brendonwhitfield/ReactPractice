import PropTypes from 'prop-types';

function MoreAboutMe(props){
    return (
        <>
                <p>Name: {props.nameProp}</p>
                <p>Age: {props.ageProp}</p>
                <p>Hobby1: {props.hobby1Prop}</p>
                <p>FaveCereal: {props.faveCerealProp}</p>
        </>
    );
}

MoreAboutMe.propTypes = {
    nameProp : PropTypes.string.isRequired,
    ageProp: PropTypes.string.isRequired,
    hobby1Prop: PropTypes.string.isRequired,
    faveCerealProp: PropTypes.string.isRequired
}

export default MoreAboutMe;