import React from 'react';
import { AutoSizer, List } from 'react-virtualized';
import { createElement } from 'react-syntax-highlighter';

function rowRenderer({ rows, stylesheet, useInlineStyles }, { index, key, style }) {
  return createElement({
      node: rows[index],
      stylesheet,
      style,
      useInlineStyles,
      key
  });
}

export default function virtualizedRenderer({ overscanRowCount = 10, rowHeight = 15 } = {}) {
  return ({ rows, stylesheet, useInlineStyles }) => (
    <div style={{height: "100%"}}>
      <AutoSizer>
        {({ height, width }) => (
          <List
            height={height}
            width={width}
            rowHeight={rowHeight}
            rowRenderer={rowRenderer.bind(null, { rows, stylesheet, useInlineStyles })}
            rowCount={rows.length}
            overscanRowCount={overscanRowCount}
          />
        )}
      </AutoSizer>
    </div>
  )
}