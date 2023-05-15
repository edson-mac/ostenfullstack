import EditModal from "./EditModal";
import { useState } from "react";
import Swal from "sweetalert2";

function TableRow({ id, name, rua, numero, bairro, cidade, estado }) {
  const row = { id, name, rua, numero, bairro, cidade, estado };
  const [open, setOpen] = useState(false);

  const showInfos = () => {
    return Swal.fire({
     title: name,
     html:
     `ID: ${id}` +
     '<br/>' +
     `Rua: ${rua}` +
     '<br/>' +
     `Número: ${numero}` +
     '<br/>' +
     `Bairro: ${bairro}` +
     '<br/>' +
     `Cidade: ${cidade}` +
     '<br/>' +
     `Estado: ${estado}`,
    showCloseButton: true,
    showConfirmButton: false,
  })
  }


  return (
    <>
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
      <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
        <td className="px-6 py-4">{row.id}</td>
        <td className="px-6 py-4">{row.name}</td>
        <td className="px-6 py-4">{row.cidade}</td>
        <td className="px-6 py-4">{row.estado}</td>
        <td className="px-6 py-4"><p onClick={() => { showInfos() }}>{"Info"}</p></td>
        <td className="px-6 py-4"><p onClick={() => { setOpen(true) }}>{"editar"}</p></td>
        <td className="px-6 py-4"><p>{"excluir"}</p></td>
      </tr>
    </>
  );
}

export default TableRow;
