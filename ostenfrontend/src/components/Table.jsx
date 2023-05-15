import TableRow from "./TableRow";
import { useProvider } from '../context/provider';

function Table() {

  const { companies } = useProvider();

  return (
    <div className="mt-12 w-6/12 relative overflow-x-auto overflow-y-auto border-solid border-4 border-gray-700">
      <table className="table-auto w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Id
            </th>
            <th scope="col" className="px-6 py-3">
              Nome
            </th>
            <th scope="col" className="px-6 py-3">
              Cidade
            </th>
            <th scope="col" className="px-6 py-3">
              Estado
            </th>
            <th scope="col" className="px-6 py-3">
              Info
            </th>
            <th scope="col" className="px-6 py-3">
              Editar
            </th>
            <th scope="col" className="px-6 py-3">
              Excluir
            </th>
          </tr>
        </thead>
        <tbody>
          {companies &&
            companies.map((company) => {
              return (
                <TableRow
                  key={company.id}
                  id={company.id}
                  name={company.name}
                  rua={company.rua}
                  numero={company.numero}
                  bairro={company.bairro}
                  cidade={company.cidade}
                  estado={company.estado}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
