import React from 'react';

const h1Style = {
  fontSize: 42,
  color: 'aliceblue'
};

export default () => (
  <div>
    <h1 style={h1Style}>Other examples: </h1>
    <ul>
      <li>
        <a href="http://localhost:9001/demo">Default</a>
      </li>
      <li>
        <a href="http://localhost:9001/demo/prism.html">Demo With Prism</a>
      </li>

      <li>
        <a href="http://localhost:9001/demo/diff.html">Diff</a>
      </li>
      <li>
        <a href="http://localhost:9001/demo/virtualized.html">Virtualized</a>
      </li>
      <li>
        <a href="http://localhost:9001/demo/prism-async-light.html">
          Prism async light
        </a>
      </li>
    </ul>
  </div>
);
