export function Section({ id, title, children, className = '' }) {
  return (
    <section id={id} className={`panel ${className}`.trim()}>
      <h2>{title}</h2>
      <div className="body">{children}</div>
    </section>
  )
}
