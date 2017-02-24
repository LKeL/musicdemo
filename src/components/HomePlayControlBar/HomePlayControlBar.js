import React from 'react';
import { Row, Col, Button, Progress, Modal, Popover } from 'antd';
import style from './HomePlayControlBar.less'

const confirm = Modal.confirm;


const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
        <p>Content</p>
    </div>
);

const HomePlayControlBar = ({className, progress, musicTitile, musicArtist}) => {
    const playButton = require('../../assets/HomePage/play.svg');
    const StopButton = require('../../assets/HomePage/stop.svg');
    let playButtonState = true;
    return (
        <div className={className + ' ' + style.container}>
            <Row
                className={style.row}
                type="flex"
                align='middle'
                justify='center'>
                <Col span={3}><img className={style.musicImg} src={require('../../assets/testbackground.JPG')}/></Col>
                <Col span={12} className={style.musicTitle}>
                    <p className={style.title}>{musicTitile}</p>
                    <p className={style.artist}>{musicArtist}</p>
                </Col>
                <Col span={3}>
                    <Popover content={content} title="Title">
                        <img className={style.controlList} src={require('../../assets/HomePage/list.svg')}/>
                    </Popover>
                </Col>
                <Col span={3}>
                    <img
                        className={style.controlPlay}
                        src={playButton}
                        onClick={(event) => {
                            event.target.src = playButtonState ? StopButton : playButton
                            playButtonState = !playButtonState
                        }}/>
                    </Col>
                <Col span={3}><img className={style.controlButotn} src={require('../../assets/HomePage/next.svg')}/></Col>
            </Row>
            <div className={style.progressBar} style={{width: progress+'%'}}></div>
        </div>
    );
};

HomePlayControlBar.propTypes = {
    progress: React.PropTypes.number.isRequired,
    musicTitile: React.PropTypes.string.isRequired,
    musicArtist: React.PropTypes.string.isRequired,
};

HomePlayControlBar.defaultProps = {
    progress: 30,
    musicTitile: 'トレイル',
    musicArtist: 'mamenoi',
}

export default HomePlayControlBar;
