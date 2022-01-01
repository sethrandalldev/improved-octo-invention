import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  TableBody,
} from "@mui/material";
import SideBar from "../components/SideBar";
import Ticket from "../components/Ticket";

const Tickets = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      <Box sx={{ m: 2, width: "calc(100vw - 315px)" }}>
        <h1>My Tickets</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: "1.1rem" }}>Title</TableCell>
                <TableCell sx={{ fontSize: "1.1rem" }}>Assigned To</TableCell>
                <TableCell sx={{ fontSize: "1.1rem" }}>Status</TableCell>
                <TableCell sx={{ fontSize: "1.1rem" }}>Priority</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <Ticket color="#EF476F" priority="High" />
              <Ticket color="#F4AC45" priority="Medium" />
              <Ticket color="#06D6A0" priority="Low" />
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default Tickets;
