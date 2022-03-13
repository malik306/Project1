import { Button, Col, Row, Typography } from 'antd';
import React from 'react';

const Drawing = () => {
  return (
    <div>
      <Row gutter={10}>
        <Col>
          <Typography.Text>Text</Typography.Text>
        </Col>
        <Col>
          <Typography.Text>Pencil</Typography.Text>
        </Col>
        <Col>
          <Typography.Text>Rectangle</Typography.Text>
        </Col>
        <Col>
          <Typography.Text>Line</Typography.Text>
        </Col>
        <Col>
          <Typography.Text></Typography.Text>
        </Col>
      </Row>
      <div>You Can do anything</div>
      <Row gutter={10}>
        <Col>
          <Button type='primary' htmlType='button'>
            Undo
          </Button>
        </Col>
        <Col>
          <Button htmlType='button'>Redo</Button>
        </Col>
      </Row>
    </div>
  );
};

export default Drawing;
