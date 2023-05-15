import EditModal from "./EditModal";
import { useState } from "react";

function TableRow({ id, name, rua, numero, bairro, cidade, estado }) {
  const row = { id, name, rua, numero, bairro, cidade, estado };
  const [open, setOpen] = useState(false);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {row.id}
      </th>
      <EditModal
        id={row.id}
        name={row.name}
        rua={row.rua}
        numero={row.numero}
        bairro={row.bairro}
        cidade={row.cidade}
        estado={row.estado}
        open={open}
        setOpen={setOpen}
      />
      <td className="px-6 py-4">{row.name}</td>
      <td className="px-6 py-4">{row.cidade}</td>
      <td className="px-6 py-4">{row.estado}</td>
      <td className="px-6 py-4">{"Info"}</td>
      <td className="px-6 py-4">{"editar"}</td>
      <td className="px-6 py-4"><p onClick={() => { setOpen(true) }}>{"excluir"}</p></td>
    </tr>
  );
}

export default TableRow;
