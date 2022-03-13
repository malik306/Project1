import { Button, Typography, Row, Col } from 'antd';
import React, { useState } from 'react';
import { Drawing, Animation } from './components/index';
const { Title } = Typography;

function App() {
  const [toggle, setToggle] = useState({ animation: false, drawing: false });
  return (
    <div className='App'>
      <Row justify='center' align='middle' style={{ rowGap: '1em' }}>
        <Col span={24}>
          <Title level={4} style={{ textAlign: 'center' }}>
            Menu
          </Title>
        </Col>
        <Col span={24}>
          <Button
            style={{ margin: '0 auto', display: 'block' }}
            type='primary'
            onClick={() => setToggle((pre) => ({ animation: !pre.animation }))}
          >
            Animation
          </Button>
          <Row
            justify='center'
            style={
              toggle.animation === true
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <Col span={24}>
              <Animation />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Button
            style={{ margin: '0 auto', display: 'block' }}
            type='ghost'
            onClick={() => setToggle((pre) => ({ drawing: !pre.drawing }))}
          >
            Drawing
          </Button>
          <Row
            justify='center'
            style={
              toggle.drawing === true
                ? { display: 'block' }
                : { display: 'none' }
            }
          >
            <Col span={24}>
              <Drawing />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default App;
