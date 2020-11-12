import React from 'react'
import Page from '../../components/Page';
import Counter from '../../components/Counter';
import DynamicBlock from '../../components/DynamicBlock';
import Calculator from '../../components/Calculator';

const HooksPage = () => {
  
  return (
    <Page>
      <h2>Counter component</h2>
      <Counter />

      <h2>DynamicBlock component</h2>
      <DynamicBlock>
        <Calculator />
      </DynamicBlock>
      
    </Page>
  );
}

export default HooksPage
