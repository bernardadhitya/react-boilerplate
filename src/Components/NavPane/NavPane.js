import React from 'react';
import AntTabs from './AntTabs';
import AntTab from './AntTab';
import { useWindowSize } from "../../Hooks/UseWindowSize";
import { useHistory } from 'react-router-dom';
import { ROUTE_DIRECTORY } from '../../Constants/RouteDirectory';
import './NavPane.css';

const NavPane = () => {
  let history = useHistory();
  const { width } = useWindowSize();
  const [value, setValue] = React.useState(0);
  console.log(history);

  const handleChange = (event, newValue) => {
    history.push({
      pathname: ROUTE_DIRECTORY[newValue].pathname
    });
    setValue(newValue);
  };

  const renderDesktopNav = () => (
    <div className='nav-desktop'>
      <AntTabs
        value={value}
        onChange={handleChange}
        aria-label='ant example'
      >
        {
          ROUTE_DIRECTORY.map((route) => (
            <AntTab label={route.title} />
          ))
        }
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
        {
          ROUTE_DIRECTORY.map((route) => (
            <AntTab icon={route.icon} label={route.title} />
          ))
        }
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
