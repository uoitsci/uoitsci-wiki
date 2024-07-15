import React from 'react';

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
};

export default MDXComponents;