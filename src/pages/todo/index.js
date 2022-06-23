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
          <TabItem value="Apple">This is an apple 🍎</TabItem>
          <TabItem value="Orange">This is an orange 🍊</TabItem>
          <TabItem value="Banana">This is a banana 🍌</TabItem>
        </Tabs>
      </div>
    </Layout>
  );
}
