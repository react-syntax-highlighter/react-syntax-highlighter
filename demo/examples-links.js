import React from 'react';

const ExamplesLinks = () => {
  const demos = [
    {
      label: 'Highlight.js (default)',
      path: '/demo/'
    },
    {
      label: 'Diff',
      path: '/demo/diff.html'
    },
    {
      label: 'Virtualized',
      path: '/demo/virtualized.html'
    },
    {
      label: 'Prism async light',
      path: '/demo/prism-async-light.html'
    }
  ];

  const baseLiClass = 'demo-nav__li';
  const demoHost = 'http://localhost:9001';

  return (
    <nav className="demo-nav">
      <ul className="demo-nav__ul">
        {demos.map(demo => {
          const { label, path } = demo;
          const isCurrent = window.location.pathname === path;
          const itemClass = isCurrent
            ? `${baseLiClass} ${baseLiClass}--current`
            : baseLiClass;

          return (
            <li className={itemClass}>
              <a className="demo-nav__a" href={`${demoHost}${path}`}>
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
