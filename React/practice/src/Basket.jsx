const Basket = ({items}) => {

    const Display = ({ itemName }) => <li>{itemName}</li>
    return ( 
        <ul className="previousSearch">
            {items.map((itemName, i) => (
                <Display
                    itemName={itemName}
                    key={i}
                />
            ))}
        </ul>
     );
}

export default Basket;