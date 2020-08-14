import React from 'react';

const ExamplesLinks = () => {
  const demos = [
    {
      label: 'Highlight.js (default)',
      path: ''
    },
    {
      label: 'Prism.js',
      path: './prism.html'
    },
    {
      label: 'Diff',
      path: './diff.html'
    },
    {
      label: 'Virtualized',
      path: './virtualized.html'
    },
    {
      label: 'Prism async light',
      path: './prism-async-light.html'
    }
  ];

  const baseLiClass = 'demo-nav__li';

  return (
    <nav className="demo-nav">
      <ul className="demo-nav__ul">
        {demos.map(demo => {
          const { label, path } = demo;

          const currentPath = new URL(window.location.href).pathname
            .split('/')
            .filter(Boolean)
            .pop();
          const isCurrent =
            path === `./${currentPath}` || (!path && currentPath === 'demo');
          const itemClass = isCurrent
            ? `${baseLiClass} ${baseLiClass}--current`
            : baseLiClass;

          return (
            <li className={itemClass}>
              <a className="demo-nav__a" href={path || './'}>
                {label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default ExamplesLinks;
