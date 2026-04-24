const placeholderProjects = [
  { name: 'Urban Residential Hub', status: 'Concept' },
  { name: 'Industrial Revamp Campus', status: 'Planning' },
  { name: 'Civic Atrium Retrofit', status: 'Pre-Design' }
]

function ProjectsPage() {
  return (
    <section className="surface">
      <h2>Projects Placeholder</h2>
      <p>This route will hold portfolio cards, category filters, and detailed project pages.</p>
      <div className="table-shell" role="region" aria-label="Project list">
        <table>
          <thead>
            <tr>
              <th>Project</th>
              <th>Lifecycle Stage</th>
            </tr>
          </thead>
          <tbody>
            {placeholderProjects.map((project) => (
              <tr key={project.name}>
                <td>{project.name}</td>
                <td>{project.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ProjectsPage
