import React from 'react';
import { Card, Col, Descriptions, Row, Typography } from 'antd';

import './index.less';

const { Paragraph } = Typography;

export type LibraryItemProps = {
  list: Array<API.Library>
}

const LibraryItem: React.FC<LibraryItemProps> = ({...props}) => {
  return (
    <Row>
      {
        props.list.map(value => {
          let item = value as API.Library;
          return (
            <Col
              span={8}
              key={item.id}
            >
              <Card
                title={item.libraryName}
                hoverable={true} //鼠标移过时可浮起
                headStyle={{
                  fontWeight: 'bold'
                }}
                style={{
                  margin: '10px',
                }}
              >
                <Descriptions
                  layout={'vertical'}
                  column={2}
                >
                  <Descriptions.Item
                    label="描述"
                    span={2}
                  >
                    <Paragraph ellipsis={{
                      rows: 3,
                      tooltip: item.libraryDescription
                    }}>
                      {item.libraryDescription}
                    </Paragraph>
                  </Descriptions.Item>
                  <Descriptions.Item label="创建日期">
                    {item.createDate}
                  </Descriptions.Item>
                  <Descriptions.Item label="更新日期">
                    {item.updateDate}
                  </Descriptions.Item>
                </Descriptions>
              </Card>
            </Col>
          )
        })
      }
    </Row>

  );
};

export default LibraryItem;
