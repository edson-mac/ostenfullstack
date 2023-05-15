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

export default function EditModal(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.name,
    rua: props.rua,
    numero: props.numero,
    bairro: props.bairro,
    cidade: props.cidade,
    estado: props.estado,
  });


  const teste = () => {
    console.log('teste')
  }

  const handleEditCompany = () => {
    axios
      .put(`http://localhost:3005/companies/${props.id}`, {
        id: editValues.id,
        name: editValues.name,
        brand: editValues.brand,
        numero: editValues.numero.toString(),
        bairro: editValues.bairro,
        cidade: editValues.cidade,
        estado: editValues.estado,
      })
      .then(() => teste());
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Empresa editada com sucesso!",
      showConfirmButton: false,
      timer: 1500,
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
        <DialogTitle>Editar empresa</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Edite aqui as informações da empresa selecionada:
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
          <Button onClick={handleEditCompany}>Confirmar</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
