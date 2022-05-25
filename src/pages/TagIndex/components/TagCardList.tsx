import { Row, Col, List, Card } from 'antd';
import React from 'react';

export type TagCardListProps = {
  dataSource: API.CardResponseBody[] | undefined;
};

const TagCardList: React.FC<TagCardListProps> = (props: TagCardListProps) => {
  return (
    <>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          {props.dataSource && (
            <List
              dataSource={props.dataSource}
              itemLayout="horizontal"
              renderItem={(item) => (
                <List.Item key={item.id}>
                  <Card title={item.cardName}>
                    {item.content.map((value, index) => (
                      <p key={`card_content_${index}`}>{value.content}</p>
                    ))}
                  </Card>
                </List.Item>
              )}
            ></List>
          )}
          {!props.dataSource && <div>点击右下角添加卡片</div>}
        </Col>
        <Col span={6}></Col>
      </Row>
    </>
  );
};

export default TagCardList;
