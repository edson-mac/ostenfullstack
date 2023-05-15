import AddModal from "./AddModal";
import { useState } from "react";

function CreateButton() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center mt-24">
      <AddModal open={open} setOpen={setOpen} />
      <button
        onClick={() => {
          setOpen(true);
        }}
        className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 border border-blue-400 rounded"
      >
        Cadastrar nova empresa
      </button>
    </div>
  );
}

export default CreateButton;
