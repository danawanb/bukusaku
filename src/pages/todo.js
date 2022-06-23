import React from 'react';
import Layout from '@theme/Layout';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

export default function Jadwal() {
  return (
    <Layout title="asd" description="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </p>

        <Tabs className="unique-tabs">
          <TabItem value="冬が来た">aaaaaaaaaaaa</TabItem>
          <TabItem value="白い樹樹の光を">aaaaaaaaaa</TabItem>
          <TabItem value="adfasf">aaaaa</TabItem>
        </Tabs>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <Tabs className="unique-tabs">
          <TabItem value="冬が来た">aaaaaaaaaaaa</TabItem>
          <TabItem value="白い樹樹の光を">aaaaaaaaaa</TabItem>
          <TabItem value="adfasf">aaaaa</TabItem>
        </Tabs>
      </div>
    </Layout>
  );
}
