import { useState } from "react";

const ActionExample1 = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const updateName = async (name) => {
    console.log("name1", name);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return null;
  };

  const handleSubmit = async () => {
    setIsPending(true);
    const error = await updateName(name);
    setIsPending(false);
    if (error) {
      setError(error);
      return;
    }
  };
  console.log("isPending1", isPending);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Update</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ActionExample1;
