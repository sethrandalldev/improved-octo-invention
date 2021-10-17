import { Modal, Box, Typography, TextField, Button } from "@mui/material";
import { useState } from "react";

interface CreateModalProps {
  isOpen: boolean;
  handleSubmit: (e: any, title: string, description: string) => void;
  handleClose: () => void;
}

const CreateWorkspaceModal = ({
  isOpen,
  handleSubmit,
  handleClose,
}: CreateModalProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Modal open={isOpen} onClose={handleClose}>
      <form onSubmit={(e) => handleSubmit(e, title, description)}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: "10px",
            maxWidth: 400,
            margin: "0 auto",
            padding: "25px",
            border: "1px solid #ccc",
            display: "flex",
            flexDirection: "column",
            borderWidth: 1,
            color: "#000",
          }}
        >
          <Typography id="modal-modal-title" variant="h5" component="h5">
            Create Workspace
          </Typography>
          <TextField
            InputLabelProps={{ required: false }}
            required={true}
            sx={{ mt: 2, mb: 2 }}
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            sx={{ mt: 2, mb: 2 }}
            label="Description"
            variant="outlined"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit" sx={{ ml: 2 }} variant="contained">
              Create
            </Button>
          </Box>
        </Box>
      </form>
    </Modal>
  );
};

export default CreateWorkspaceModal;
