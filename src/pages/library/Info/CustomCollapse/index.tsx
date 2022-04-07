import { Collapse, Divider, Typography } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import React from 'react';
import { useParams, useRequest } from 'umi';
import { selectKnowledge } from '@/services/ebbinghaus-web/Knowledge';

const { Panel } = Collapse;
const { Title, Text } = Typography;

const CustomCollapse: React.FC = () => {
  const params = useParams();
  let library = params as unknown as API.Library;
  const { data } = useRequest(() =>
    selectKnowledge({
      page: '1',
      size: Number.MAX_SAFE_INTEGER.toString(),
      libraryId: library.id,
    }),
  );

  const genExtra = () => <PlusOutlined />;

  if (data) {
    return (
      <>
        <Collapse defaultActiveKey={0}>
          {data.list.map((value, index) => {
            return (
              <Panel key={index} header={value.title} extra={genExtra()}>
                <Typography>
                  <Title level={5}>{value.subtitle}</Title>
                  <Text>{value.content}</Text>
                </Typography>
              </Panel>
            );
          })}
        </Collapse>
      </>
    );
  }

  return <Divider plain>右上角新增</Divider>;
};

export default CustomCollapse;
