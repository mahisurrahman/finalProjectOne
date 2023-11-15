import { Helmet } from 'react-helmet-async';
import Covers from '../../components/covers/Covers';
import menuImage from '../../assets/menu/banner3.jpg';
import MenuLayer from './../../components/menuLayer/MenuLayer';

const OurMenu = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Menu</title>
            </Helmet>
            <div>
                <Covers img={menuImage} title={"Our Menu"} subTitle={"Would you like to try a dish?"}></Covers>
            </div>
            <div>
                <MenuLayer></MenuLayer>
            </div>
        </div>
    );
};

export default OurMenu;