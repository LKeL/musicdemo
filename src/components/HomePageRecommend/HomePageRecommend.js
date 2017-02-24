'use strict'

import React from 'react';
import { Row, Col, message } from 'antd';
import style from './HomePageRecommend.less';

const HomePageRecommend = ({data, className}) => {
    let renderBody = [];
    function * entries(obj) {
        for (let key of Object.keys(obj)) {
            yield[key,obj[key]];
        }
    }
    message.config({
        top: '20%',
        duration: 2,
    });
    const error = function () {
        message.error('服务器错误');
    };
    function renderRecommend() {
        let renderBody = [];
        let array = [];
        for (let [key,value] of entries(data)) {
            array = [];
            for (let [key,value]of entries(value)) {
                array.push(value)
            }
            renderBody.push(
                <Col span={12} key={key} className={style.col}>
                    <div className={style.cardField} onClick={error}>
                        {array[0]}<br />
                        {array[1]}<br />
                        {array[2]}<br />
                    </div>
                </Col>
            );
        }
        return renderBody;
    }
    renderBody = renderRecommend();
    return(
        <div onClick={renderRecommend}
            className={className+ ' ' + style.container}>
            <Row className={style.row}>
                {renderBody}
            </Row>
        </div>
    );
}

HomePageRecommend.propTypes = {

};

HomePageRecommend.defaultProps = {
    data: {
        '1': {
            'img': 'img src',
            'index': 1,
            'info': 'some words'
        },
        '2': {
            'img': 'img src',
            'index': 2,
            'info': 'some words'
        },
        '3': {
            'img': 'img src',
            'index': 3,
            'info': 'some words'
        },
        '4': {
            'img': 'img src',
            'index': 4,
            'info': 'some words'
        },
        '5': {
            'img': 'img src',
            'index': 5,
            'info': 'some words'
        },
        '6': {
            'img': 'img src',
            'index': 6,
            'info': 'some words'
        }
    }
};

export default HomePageRecommend;
