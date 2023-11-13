

const MenuItem = ({item}) => {

    const {name, recipe, image, price} = item;
    
    return (
        <div className="flex gap-5">
            <img className="w-[60px] h-[50px] rounded-r-full rounded-b-full" src={image} alt="" />
            <div>
                <h3 className="uppercase font-cinzel-font text-xl">{name} ------------</h3>
                <p className="font-inter-font text-sm">{recipe}</p>
            </div>
            <p className="text-[#BB8506] font-inter-font">${price}</p>
        </div>
    );
};

export default MenuItem;