import "./itemProject.css";

// eslint-disable-next-line react/prop-types
export default function ItemProject({ project }) {
  const externLink =
    // eslint-disable-next-line react/prop-types
    project.source;
  return (
    <div className="projet">
      <a href={externLink}>
        <img
          className="item-image"
          src={`http://localhost:5000/data/uploads/${
            // eslint-disable-next-line react/prop-types
            project.name_image
          }`}
          // eslint-disable-next-line react/prop-types
          alt={project.name_image}
        />
      </a>
      <div className="project-content">
        {" "}
        <h1>
          {
            // eslint-disable-next-line react/prop-types
            project.name
          }
        </h1>
        <h2>
          {
            // eslint-disable-next-line react/prop-types
            project.client_name
          }
        </h2>
        <p>
          {
            // eslint-disable-next-line react/prop-types
            project.abstract
          }
        </p>
      </div>
    </div>
  );
}
