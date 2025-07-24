"use client";

import { TableSkeleton } from "@/components/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useGetOPDBooked } from "@/hooks/use-opd";
import { TableCellAvatar } from "@/components/metrics/avatar";

const OPDBooked = () => {
  const { data, isPending } = useGetOPDBooked();

  if (!data || isPending) return <TableSkeleton repeat={10} />;

  const opdData = data.data.data || [];

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
        {opdData.map((opd) => {
          const uniqueKey = `${opd.doctor_name}-${opd.counselor_name}`;

          return (
            <TableRow key={uniqueKey}>
              <TableCell>
                <div className="flex items-center gap-2">
                  <TableCellAvatar
                    image={opd.counselor_image}
                    name={opd.counselor_name}
                  />
                  {opd.counselor_name}
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <TableCellAvatar
                    image={opd.doctor_image}
                    name={opd.doctor_name.replace("Dr. ", "")}
                  />
                  {opd.doctor_name}
                </div>
              </TableCell>
              <TableCell>{opd.appointment_count.toLocaleString()}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default OPDBooked;
