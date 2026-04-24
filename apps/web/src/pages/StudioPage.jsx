const timeline = [
  'Define business outcomes, risk limits, and launch metrics.',
  'Align design language and information architecture.',
  'Implement reusable UI modules and data contracts.',
  'Deploy with observability and release controls.'
]

function StudioPage() {
  return (
    <section className="surface">
      <h2>Studio and Process</h2>
      <p>This section will become the brand story and operating model narrative.</p>
      <ol className="timeline-list">
        {timeline.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ol>
    </section>
  )
}

export default StudioPage
