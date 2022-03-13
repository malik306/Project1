import React, { useState } from 'react';
import { Button, Col, Row } from 'antd';
import { Animals, Birds, Characters, Scenery } from './index';

const Animation = () => {
  const [toggleAnimation, setToggleAnimation] = useState({
    Animals: false,
    Birds: false,
    Characters: false,
    Scenery: false,
  });
  return (
    <div>
      <Row justify='center' style={{ textAlign: 'center', rowGap: '1em' }}>
        <Col span={24}>
          <Button
            onClick={() =>
              setToggleAnimation((pre) => ({ Animals: !pre.Animals }))
            }
          >
            Animals
          </Button>
          <Row
            justify='center'
            style={
              toggleAnimation.Animals === true
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <Col span={24}>
              <Animals />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Button
            onClick={() => setToggleAnimation((pre) => ({ Birds: !pre.Birds }))}
          >
            Birds
          </Button>
          <Row
            justify='center'
            style={
              toggleAnimation.Birds === true
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <Col span={24}>
              <Birds />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Button
            onClick={() =>
              setToggleAnimation((pre) => ({ Characters: !pre.Characters }))
            }
          >
            Characters
          </Button>
          <Row
            justify='center'
            style={
              toggleAnimation.Characters === true
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <Col span={24}>
              <Characters />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Button
            onClick={() =>
              setToggleAnimation((pre) => ({ Scenery: !pre.Scenery }))
            }
          >
            Scenery
          </Button>
          <Row
            justify='center'
            style={
              toggleAnimation.Scenery === true
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <Col span={24}>
              <Scenery />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Animation;
