// app/components/ContentDetails.jsx
const ContentDetails = ({ data }) => {
  return (
    <div className="content-details">
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default ContentDetails;
