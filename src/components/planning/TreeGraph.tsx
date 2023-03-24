import React from 'react';
import Tree from 'react-d3-tree';
import { FormContainer } from '../ui/used/FormContainer';
import { FormHead } from '../ui/used/FormHead';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'CEO',
  children: [
    {
      name: 'Manager',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Foreman',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
        {
          name: 'Foreman',
          attributes: {
            department: 'Assembly',
          },
          children: [
            {
              name: 'Worker',
            },
          ],
        },
      ],
    },
  ],
};

export const  TreeGraph = () =>  {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <FormContainer>
      <FormHead  text='break your project into small pieses 🐱'  />
    <div id="treeWrapper" className='mt-4 ' style={{ width: '100%', height: '100%' }}>

      <Tree
       data={orgChart} orientation='vertical'
      
        onNodeClick={(node) => console.log(node)}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
        />
    </div>
    </FormContainer>
  );
}