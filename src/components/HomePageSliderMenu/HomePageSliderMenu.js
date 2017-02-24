import React from 'react';
import style from './HomePageSliderMenu.less';

import HomePageSlider from '../HomePageSlider/HomePageSlider.js';
let firstRender = true;
const HomePageSliderMenu = ({open, closeSliderMenu}) => {
    return (
        <div className={(()=>{
                if (firstRender) {
                    firstRender = false;
                    return style.container
                }
                return open ? style.container + ' ' + style.slideIn : style.container + ' ' + style.slideOut})()}>
            <div className={style.menu}>
                <HomePageSlider />
            </div>
            <div className={style.fill} onClick={()=>closeSliderMenu()}></div>
        </div>
    )
}
HomePageSliderMenu.propTypes = {

};
HomePageSliderMenu.defaultProps = {

};

export default HomePageSliderMenu;
