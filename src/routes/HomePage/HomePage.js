import React from 'react';
import { connect } from 'dva';
import { Table, Popconfirm, Button } from 'antd';
import HomePlayControlBar from '../../components/HomePlayControlBar/HomePlayControlBar';
import HomePageToolBar from '../../components/HomePageToolBar/HomePageToolBar';
import HomePageSliderMenu from '../../components/HomePageSliderMenu/HomePageSliderMenu';
import HomePageRecommend from '../../components/HomePageRecommend/HomePageRecommend';
import style from './HomePage.less';

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            openSliderMenu: false,
        }
    }
    handleListButtonClick() {
        this.setState({
            openSliderMenu: true
        });
    }
    closeSliderMenu() {
        this.setState({
            openSliderMenu: false
        });
    }
    render() {
        return(
            <div className={style.container}>
                <HomePageSliderMenu  open={this.state.openSliderMenu} closeSliderMenu={()=>this.closeSliderMenu()}/>
                <HomePageToolBar className={style.homePageToolBar} open={this.state.openSliderMenu} handleListButtonClick={()=>this.handleListButtonClick()}/>
                <HomePageRecommend className={style.homePageRecommend}/>
                <HomePlayControlBar className={style.homePlayControlBar}/>
            </div>
        )
    }
}
HomePage.propTypes = {
};

export default connect()(HomePage);
