import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import axios from "axios";
import Swal from "sweetalert2";
import { useProvider } from '../context/provider';

export default function AddModal(props) {

  const { getCompanies } = useProvider();

  const [editValues, setEditValues] = useState({
    name: "",
    rua: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const isFormValid = () => {
    return Object.values(editValues).every(value => value !== "");
  };
  

  const handleEditCompany = () => {
    axios
      .post(`https://ostenfullstack.vercel.app/companies/`, {
        name: editValues.name,
        rua: editValues.rua,
        numero: editValues.numero.toString(),
        bairro: editValues.bairro,
        cidade: editValues.cidade,
        estado: editValues.estado,
      })
      .then(() =>  getCompanies());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Empresa adicionada com sucesso!",
      showConfirmButton: false,
      timer: 2000,
    });
    handleClose();
  };

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  return (
    <div>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Adicionar empresa</DialogTitle>
        <DialogContent>
          <DialogContentText>
           Preencha as informações para adicionar uma nova empresa
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome:"
            value={editValues.name}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="rua"
            label="Rua:"
            value={editValues.rua}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="numero"
            label="Número:"
            value={editValues.numero}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="bairro"
            label="Bairro:"
            value={editValues.bairro}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="cidade"
            label="Cidade:"
            value={editValues.cidade}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="estado"
            label="Estado:"
            value={editValues.estado}
            type="text"
            onChange={handleChangeValues}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button disabled={ !isFormValid() } onClick={handleEditCompany}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
