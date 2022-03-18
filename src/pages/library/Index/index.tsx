import { useRequest } from 'umi';
import React from 'react';
import { Row } from 'antd';
import { selectLibrary } from '@/services/ebbinghaus-web/library';
import LibraryItem from './components/LibraryItem';

const Index: React.FC = () => {
  const { data } = useRequest(() => selectLibrary({
    page: '1', size: '10',
    libraryParentId: '026a0e3c-dc45-444e-9ffd-424cb6fe48a5',
    libraryOwnerId: 'c5DfCAb8-bdF3-fBD1-2F4B-CCAECcec0ec0',
  }));

  if (data) {
    let page = data as API.Page;

    if (!page.empty) {
      return (<LibraryItem list={page.content as Array<API.Library>} />)
    }

    return (
      <Row>

      </Row>
    );
  }

  return <div>Fuck</div>;
};

export default Index;
