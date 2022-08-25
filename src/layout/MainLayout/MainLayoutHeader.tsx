import { HomeIcon } from '@/common/icons';
import { FoodBrowsingRoutes } from '@/food-browsing/routes';
import { Link } from 'react-router-dom';
import './MainLayoutHeader.css';

export const MainLayoutHeader = () => {
  return (
    <div className='main-layout-header'>
      <Link to={FoodBrowsingRoutes.FoodBrowsing.path} className='main-layout-header--home'>
        <HomeIcon />
        <h3>Yummi</h3>
      </Link>
    </div>
  );
};
