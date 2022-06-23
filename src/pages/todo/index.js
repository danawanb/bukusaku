import React from 'react';
import Layout from '@theme/Layout';

export default function Hello() {
  return (
    <Layout title="asd" description="Hasde">
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '50vh',
          fontSize: '20px',
        }}>
        <p>
          asdasdadsdas
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
