

const MenuItem = ({item}) => {

    const {name, recipe, image, price} = item;
    
    return (
        <div>
            <img className="w-[60px] rounded-r-2xl rounded-b-2xl" src={image} alt="" />
            <div>
                <h3 className="uppercase">{name}----------------</h3>
                <p>{recipe}</p>
            </div>
            <p>{price}</p>
        </div>
    );
};

export default MenuItem;