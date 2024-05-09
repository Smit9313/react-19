import { useState, useTransition } from "react";

const ActionExample2 = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const updateName = async (name) => {
    console.log("name2", name);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return null;
  };

  const handleSubmit = async () => {
    startTransition(async () => {
      const error = await updateName(name);
      if (error) {
        setError(error);
        return;
      }
    });
  };
  console.log("isPending2", isPending);

  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={handleSubmit}>Update</button>
      {error && <p>{error}</p>}
    </div>
  );
};

export default ActionExample2;
