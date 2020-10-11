import React from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import AntTabs from './AntTabs';
import AntTab from './AntTab';
import {useWindowSize} from "../../Hooks/UseWindowSize";
import './NavPane.css';

const NavPane = () => {
  const { width } = useWindowSize();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const renderDesktopNav = () => (
    <div className='nav-desktop'>
      <AntTabs
        value={value}
        onChange={handleChange}
        aria-label='ant example'
      >
        <AntTab label="Menu 1" />
        <AntTab label="Menu 2" />
        <AntTab label="Menu 3" />
      </AntTabs>
    </div>
  );

  const renderMobileNav = () => (
    <div className='nav-mobile'>
      <AntTabs
        value={value}
        onChange={handleChange}
        variant='fullWidth'
        indicatorColor='secondary'
        textColor='secondary'
        aria-label='icon label tabs example'
      >
        <AntTab icon={<PhoneIcon />} label="Menu 1" />
        <AntTab icon={<FavoriteIcon />} label="Menu 2" />
        <AntTab icon={<PersonPinIcon />} label="Menu 3" />
      </AntTabs>
    </div>
  );

  const renderNavPane = () => {
    return (
      width > 768 ? renderDesktopNav() : renderMobileNav()
    )
  }

  return (
    <>
      { renderNavPane() }
    </>
  );
}

export default NavPane;
