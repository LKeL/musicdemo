import React from 'react';
import { Row, Col, Button, Progress } from 'antd';
import style from './HomePageToolBar.less'

const HomePageToolBar = ({className, handleListButtonClick, open}) => {
    return (
        <div className={className + ' ' + style.container}>
            <Row
                onClick={()=>{console.log('Row');}}
                className={style.row}
                type="flex"
                align='middle'
                justify='center'>
                <Col
                    onClick={()=>{console.log('Col');}}
                    span={4}>
                    <img
                        className={(()=>{
                            return open?style.listButton + ' ' + style.buttonRotateIn
                            : style.listButton + ' ' + style.buttonRotateOut;
                        })()}
                        onClick={
                            (event) => {
                                console.log('img');
                                handleListButtonClick();
                            }
                        }
                        src={require('../../assets/HomePage/list.svg')}/>
                </Col>
                <Col span={16}></Col>
                <Col span={4}><img className={style.searchButton} src={require('../../assets/HomePage/search.svg')}/></Col>
            </Row>
        </div>
    );
};

HomePageToolBar.propTypes = {

};

HomePageToolBar.defaultProps = {

};

export default HomePageToolBar;
