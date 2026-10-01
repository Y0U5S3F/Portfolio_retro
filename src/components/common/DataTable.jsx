export function DataTable({ columns, children, className = '' }) {
  return (
    <div className={`table-wrap ${className}`.trim()}>
      <table className="grid">
        <thead>
          <tr>
            {columns.map((column) => (
              <th key={column.key} scope="col" className={column.numeric ? 'numeric' : ''}>
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}
