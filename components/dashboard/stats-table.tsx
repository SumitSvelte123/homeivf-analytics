import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Image from "next/image";
import { ArrowBigDownDashIcon, ArrowBigUpDashIcon } from "lucide-react";

export const StatsTable = () => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle className="text-xl text-primary font-bold">
          Week Performance
        </CardTitle>
        <CardDescription />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-[#F2F5F6]">
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead className="text-center">Current Week</TableHead>
              <TableHead className="text-center">Last Week</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/opd.svg"
                    width={16}
                    height={18}
                    alt="OPD"
                  />{" "}
                  <span className="text-sm font-semibold">OPD(s) Done</span>
                </div>
              </TableCell>
              <TableCell className="text-center text-sm font-semibold">
                28,402
              </TableCell>
              <TableCell className="text-sm font-semibold">
                <div className="flex gap-2 justify-center">
                  <span>41.48%</span>{" "}
                  <ArrowBigUpDashIcon className="text-green-500" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/ipd.svg"
                    width={16}
                    height={18}
                    alt="IPD"
                  />{" "}
                  <span className="text-sm font-semibold">IPD(s) Done</span>
                </div>
              </TableCell>
              <TableCell className="text-center text-sm font-semibold">
                28,402
              </TableCell>
              <TableCell className="text-sm font-semibold">
                <div className="flex gap-2 justify-center">
                  <span>41.48%</span>{" "}
                  <ArrowBigUpDashIcon className="text-green-500" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/blood.svg"
                    width={16}
                    height={18}
                    alt="OPD"
                  />{" "}
                  <span className="text-sm font-semibold">Blood(s) Done</span>
                </div>
              </TableCell>
              <TableCell className="text-center text-sm font-semibold">
                28,402
              </TableCell>
              <TableCell className="text-sm font-semibold">
                <div className="flex gap-2 justify-center">
                  <span>41.48%</span>{" "}
                  <ArrowBigUpDashIcon className="text-yellow-500" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/patient.svg"
                    width={16}
                    height={18}
                    alt="OPD"
                  />{" "}
                  <span className="text-sm font-semibold">Patient(s) Done</span>
                </div>
              </TableCell>
              <TableCell className="text-center text-sm font-semibold">
                28,402
              </TableCell>
              <TableCell className="text-sm font-semibold">
                <div className="flex gap-2 justify-center">
                  <span>41.48%</span>{" "}
                  <ArrowBigUpDashIcon className="text-green-500" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/kits.svg"
                    width={16}
                    height={18}
                    alt="OPD"
                  />{" "}
                  <span className="text-sm font-semibold">Kit(s) Done</span>
                </div>
              </TableCell>
              <TableCell className="text-center text-sm font-semibold">
                28,402
              </TableCell>
              <TableCell className="text-sm font-semibold">
                <div className="flex gap-2 justify-center">
                  <span>41.48%</span>{" "}
                  <ArrowBigDownDashIcon className="text-red-500" />
                </div>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-2">
                  <Image
                    src="/icons/pres.svg"
                    width={16}
                    height={18}
                    alt="OPD"
                  />{" "}
                  <span className="text-sm font-semibold">Prescription(s) Done</span>
                </div>
              </TableCell>
              <TableCell className="text-center text-sm font-semibold">
                28,402
              </TableCell>
              <TableCell className="text-sm font-semibold">
                <div className="flex gap-2 justify-center">
                  <span>41.48%</span>{" "}
                  <ArrowBigDownDashIcon className="text-red-500" />
                </div>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
