import { TableCell, TableRow } from "@mui/material";

const Ticket = (props: any) => {
  return (
    <TableRow>
      <TableCell sx={{ fontWeight: "bold" }}>Finish API</TableCell>
      <TableCell sx={{ fontWeight: "bold" }}>Seth Randall</TableCell>
      <TableCell sx={{ fontWeight: "bold" }}>In Progress</TableCell>
      <TableCell sx={{ color: props.color, fontWeight: "bold" }}>
        {props.priority}
      </TableCell>
    </TableRow>
  );
};

export default Ticket;
