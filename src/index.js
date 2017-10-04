import React from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Cell } from 'react-inline-grid';

const Layout = () => (
  <span>
    <Grid>
      <Row>
        <Cell is="desktop-4">
          <p>Test1</p>
        </Cell>
        <Cell is="desktop-4">
          <p>Test2</p>
        </Cell>
        <Cell is="desktop-4">
          <p>Test3</p>
        </Cell>
      </Row>
    </Grid>
  </span>
)

ReactDOM.render(
  <Layout />,
  document.getElementById('root')
);
