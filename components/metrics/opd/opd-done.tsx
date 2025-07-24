import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OPDDone = () => {
  return (
    <Table>
      <TableHeader className="bg-secondary">
        <TableRow>
          <TableHead>Counsellor Name</TableHead>
          <TableHead>Doctor Name</TableHead>
          <TableHead>Total No. Patients</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell></TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default OPDDone;
