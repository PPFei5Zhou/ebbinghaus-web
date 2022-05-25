import { Radio, PageHeader } from 'antd';
import React, { useState } from 'react';

export type TagPageHeaderProps = {
  tag: API.TagResponse | undefined;
};

const TagPageHeader: React.FC<TagPageHeaderProps> = (
  props: TagPageHeaderProps,
) => {
  const [radioValue, setRadioValue] = useState();

  const radioGroupOnChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  return (
    <PageHeader
      className="site-page-header"
      title={props.tag?.tagName}
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

export default TagPageHeader;
