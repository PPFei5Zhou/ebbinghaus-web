import { Radio, PageHeader } from 'antd';
import { useRequest, useParams } from 'umi';
import React, { useState } from 'react';
import { findTagById } from '@/services/ebbinghaus-web/tag';

import './index.less';

const TagIndex: React.FC = () => {
  const params = useParams();
  const param = params as unknown as { id: string };
  const { data } = useRequest(() => findTagById({ id: param.id }));
  const [radioValue, setRadioValue] = useState();

  const radioGroupOnChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  return (
    <PageHeader
      className="site-page-header"
      title={data?.tagName}
      extra={[
        <Radio.Group
          key={'button_group'}
          optionType="button"
          buttonStyle="solid"
          defaultValue={'all'}
          value={radioValue}
          onChange={radioGroupOnChange}
        >
          <Radio.Button key={'all'} value="all">
            全部
          </Radio.Button>
          <Radio.Button key={'today'} value="today">
            今日
          </Radio.Button>
          <Radio.Button key={'plan'} value="plan">
            计划
          </Radio.Button>
        </Radio.Group>,
      ]}
    />
  );
};

export default TagIndex;
