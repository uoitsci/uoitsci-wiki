import React from 'react';
import Link from 'next/link';

const MDXComponents = {
  table: (props: React.TableHTMLAttributes<HTMLTableElement>) => (
    <table className="min-w-full divide-y divide-gray-200" {...props} />
  ),
  thead: (props: React.HTMLAttributes<HTMLElement>) => (
    <thead className="bg-gray-50" {...props} />
  ),
  tbody: (props: React.HTMLAttributes<HTMLElement>) => (
    <tbody className="bg-white divide-y divide-gray-200" {...props} />
  ),
  th: (props: React.ThHTMLAttributes<HTMLTableCellElement>) => (
    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider" {...props} />
  ),
  td: (props: React.TdHTMLAttributes<HTMLTableCellElement>) => (
    <td className="px-6 py-4" {...props} />
  ),
  a: (props: React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>) => {
    let href = props.href;
  
    // Internal links
    if (href?.startsWith('/')) {
      return (
        <Link href={href} {...props}>
          {props.children}
        </Link>
      );
    }

    // Anchor links
    if (href?.startsWith('#')) {
      return <a {...props}></a>
    }
  
    return <a target="_blank" rel="noopener noreferrer" {...props} />;
  }
};

export default MDXComponents;