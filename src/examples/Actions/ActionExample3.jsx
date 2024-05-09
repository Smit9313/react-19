import { useActionState } from "react";

const ActionExample3 = () => {
  const updateName = async (name) => {
    console.log("name3", name);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return null;
  };

  const [error, submitAction, isPending] = useActionState(
    async (previousState, formData) => {
      const error = await updateName(formData.get("name"));
      if (error) {
        return error;
      }
      return null;
    },
    null
  );

  console.log("isPending3", isPending);
  return (
    <form action={submitAction}>
      <input type="text" name="name" />
      <button type="submit" disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default ActionExample3;
