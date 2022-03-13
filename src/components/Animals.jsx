import React, { useState } from 'react';
import { Row, Col, Typography, Form, Button } from 'antd';
import { OptionJSX } from './index';

const Animals = () => {
  // const [form] = Form.useForm();
  const animalsData = ['Cat', 'Dog', 'Elephant', 'Fish', 'Horse'];
  const animalsBg = ['Land', 'Water', 'Greenery'];
  const [data, setData] = useState({
    background: '',
    image: '',
    text: '',
    voice: '',
  });
  const onFinish = (values) => {
    // console.log('success before state', values);
    setData({
      voice: values.voice,
      background: values.background,
      image: values.image,
      text: values.text,
    });
    console.log('success after state', data);
  };
  return (
    <div>
      <Row justify='center'>
        <Col span={24}>
          <Typography.Title level={4}>Animals Animation</Typography.Title>
        </Col>
        <Form
          // form={form}
          name='animations'
          layout='vertical'
          onFinish={onFinish}
          initialValues={{
            remember: true,
          }}
        >
          <Col span={24}>
            <Form.Item
              name='image'
              label='Select Image'
              rules={[
                { required: true, message: 'Please Select Option for Image' },
              ]}
            >
              <OptionJSX
                data={animalsData}
                placeholder='Image'
                onChange={(value) => console.log(value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name='voice'
              label='Select Voice'
              rules={[
                { required: true, message: 'Please Select Option for Voice' },
              ]}
            >
              <OptionJSX
                data={animalsData}
                placeholder='Voice'
                onChange={(value) => console.log(value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name='text'
              label='Select Text'
              rules={[
                { required: true, message: 'Please Select Option for Text' },
              ]}
            >
              <OptionJSX
                data={animalsData}
                placeholder='Text'
                onChange={(value) => console.log(value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item
              name='background'
              label='Select Background'
              rules={[
                {
                  required: true,
                  message: 'Please Select Option for Background',
                },
              ]}
            >
              <OptionJSX
                data={animalsBg}
                placeholder='Background'
                onChange={(value) => console.log(value)}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item>
              <Button type='primary' htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </Row>
    </div>
  );
};
export default Animals;
