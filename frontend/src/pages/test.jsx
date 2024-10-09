import { useLocation } from "react-router-dom"; // Import useLocation

const Test = () => {
  const location = useLocation();
  const { selectedFood } = location.state || {}; // Access the passed state (selectedFood)

  return (
    <div className="mt-4 p-4 bg-gray-100 rounded-md">
      <h2 className="text-lg font-semibold">Selected Food Details:</h2>
      {selectedFood ? (
        <>
          <p>
            <strong>Name:</strong> {selectedFood.name}
          </p>
          <p>
            <strong>Price:</strong> {selectedFood.price}
          </p>
          <p>
            <strong>Description:</strong> {selectedFood.description}
          </p>
          <p>
            <strong>Category:</strong> {selectedFood.category}
          </p>
        </>
      ) : (
        <p>No food selected.</p>
      )}
    </div>
  );
};

export default Test;
