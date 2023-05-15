import EditModal from "./EditModal";
import { useState } from "react";
import Swal from "sweetalert2";
import { Info, Edit, X } from 'lucide-react';
import axios from "axios";
import { useProvider } from '../context/provider';

function TableRow({ id, name, rua, numero, bairro, cidade, estado }) {
  const row = { id, name, rua, numero, bairro, cidade, estado };
  const [open, setOpen] = useState(false);
  const { getCompanies } = useProvider();
  

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

  const handleDelete = () => {
    Swal.fire({
        title: 'Deseja deletar essa empresa?',
        text: "Não será possível reverter!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sim, confirmar!'
    }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`${import.meta.env.VITE_API_URL}/${id}`).then(() => getCompanies())

            Swal.fire(
                'Empresa deletada!',
                'successo'
            )
        }
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
        <td className="px-6 py-4"><Info className="hover:cursor-pointer" onClick={() => { showInfos() }} color="white" size={27} /></td>
        <td className="px-6 py-4"><Edit className="hover:cursor-pointer" onClick={() => { setOpen(true) }} color="white" size={25}/></td>
        <td className="px-6 py-4"><X className="hover:cursor-pointer" onClick={() => { handleDelete() }} color="red" size={27}/></td>
      </tr>
    </>
  );
}

export default TableRow;
