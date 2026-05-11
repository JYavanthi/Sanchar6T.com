import { useMemo, useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { AlertCircle, Bus, IndianRupee, MapPin } from "lucide-react";
import type {
  ParsedBusData,
  Seat,
  ParsedStage,
} from "@/repositories/bitla.helper.methods";
import { getBerthLevel } from "@/data/seat_layout_identifiers";
import seatAvailable from "../../assets/seat-img.jpeg";
import seatSelected from "../../assets/Untitled_design__9_-removebg-preview.png";
import seatBooked from "../../assets/Untitled design (7).png";
import seatLadies from "../../assets/Untitled_design__8_-removebg-preview.png";
import { useNavigate } from "react-router-dom";

type Props = {
  parsed: ParsedBusData;
  maxSelectable?: number;
  onContinue?: (payload: {
    selectedSeats: Seat[];
    boarding?: ParsedStage | null;
    dropoff?: ParsedStage | null;
    totalFare: number;
    totalGst: number;
  }) => void;
};

export default function BusLayout({ parsed }: Props) {
  const navigate = useNavigate();
  const layout = parsed.bus_layout;
  const maxSelectable = parsed.bus_layout.availableSeats.length;

  const [selectedLabels, setSelectedLabels] = useState<string[]>([]);
  const [selectedBoardingIndex, setSelectedBoardingIndex] = useState<number | null>(null);
  const [selectedDropIndex, setSelectedDropIndex] = useState<number | null>(null);

  const allSeatsList = useMemo(
    () => layout.rows.flatMap((r) => r.columns).filter((c) => c.isSeat) as Seat[],
    [layout.rows]
  );

  const selectedSeats = selectedLabels
    .map((lbl) => allSeatsList.find((s) => s.seatNumber === lbl))
    .filter(Boolean) as Seat[];

  const totalFare = selectedSeats.reduce((acc, s) => acc + (s.fare ?? 0), 0);
  const totalGst = selectedSeats.reduce((acc, s) => acc + (s.gst ?? 0), 0);
  const grandTotal = totalFare + totalGst;

  const { lowerSeats, upperSeats } = useMemo(() => {
    const lower: Seat[] = [];
    const upper: Seat[] = [];

    allSeatsList.forEach((seat) => {
      const level = getBerthLevel(seat.seatType);
      if (level === "Lower") lower.push(seat);
      if (level === "Upper") upper.push(seat);
    });

    return { lowerSeats: lower, upperSeats: upper };
  }, [allSeatsList]);

  const isComplete =
    selectedSeats.length > 0 &&
    selectedBoardingIndex !== null &&
    selectedDropIndex !== null;

  const toggleSeat = (seat: Seat) => {
    if (!seat.isAvailable || !seat.seatNumber) return;

    setSelectedLabels((prev) => {
      if (prev.includes(seat.seatNumber!)) {
        return prev.filter((x) => x !== seat.seatNumber);
      }
      if (prev.length >= maxSelectable) return prev;
      return [...prev, seat.seatNumber!];
    });
  };

  const resetAll = () => {
    setSelectedLabels([]);
    setSelectedBoardingIndex(null);
    setSelectedDropIndex(null);
  };

  const handleContinue = () => {
    if (!isComplete) return;

    const boarding =
      selectedBoardingIndex !== null
        ? layout.boardingStages[selectedBoardingIndex]
        : null;

    const dropoff =
      selectedDropIndex !== null
        ? layout.dropoffStages[selectedDropIndex]
        : null;

    navigate("/booking-details", {
      state: {
        selectedSeats: selectedSeats.map((s) => s.seatNumber),
        boardingPoint: boarding,
        droppingPoint: dropoff,
        totalPrice: totalFare + totalGst,
      },
    });
  };

  return (
    <TooltipProvider>
      <div className="mx-auto w-full max-w-full space-y-5 overflow-hidden p-2 sm:p-3 lg:p-4">
        <Card className="w-full overflow-hidden">
          <CardHeader className="p-4">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex min-w-0 items-center gap-3">
                <Bus className="h-7 w-7 shrink-0 text-primary" />
                <div className="min-w-0">
                  <CardTitle className="text-lg sm:text-xl">Select Seats</CardTitle>
                  <CardDescription className="text-xs sm:text-sm">
                    {allSeatsList.filter((s) => s.isAvailable).length} seats available • Max{" "}
                    {maxSelectable} per booking
                  </CardDescription>
                </div>
              </div>

              <Badge variant="secondary" className="w-fit px-3 py-1 text-sm">
                {selectedSeats.length}/{maxSelectable} Selected
              </Badge>
            </div>
          </CardHeader>
        </Card>

        <div className="grid w-full min-w-0 grid-cols-1 gap-4 xl:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)]">
          <div className="min-w-0 space-y-4">
            <Card className="w-full overflow-hidden">
              <CardHeader className="space-y-3 border-b p-4">
                <CardTitle className="text-lg">Seat Layout</CardTitle>

                <div className="grid grid-cols-2 gap-3 text-xs sm:grid-cols-4">
                  <div className="flex items-center gap-2">
<div
  className="h-4 w-4 rounded border-2"
  style={{ borderColor: "#c9e8fd" }}
/>                    <span>Available</span>
                  </div>
                  <div className="flex items-center gap-2">
<div
  className="h-4 w-4 rounded"
  style={{ backgroundColor: "#c9e8fd" }}
/>                    <span>Selected</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-pink-100" />
                    <span>Ladies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-4 w-4 rounded bg-gray-200" />
                    <span>Booked</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="w-full overflow-hidden p-3 sm:p-4">
                <div className="w-full overflow-x-auto">
                  <div className="flex w-max min-w-full justify-center gap-2 pb-2">
                    {(["lower", "upper"] as const).map((seatType) => {
                      if (seatType === "lower" && !lowerSeats.length) return null;
                      if (seatType === "upper" && !upperSeats.length) return null;

                      return (
                        <div
                          key={seatType}
                          className="flex shrink-0 flex-col items-center gap-2"
                        >
                          <h3 className="text-sm font-semibold">
                            {seatType === "lower" ? "Lower" : "Upper"} Berth
                          </h3>

                          <div className="rounded-lg border border-gray-200 bg-white p-3 sm:p-4">
                            {layout.rows.map((row, rIdx) => (
                              <div key={rIdx} className="flex items-center gap-[1px] sm:gap-[2px]">
                                {row.columns.map((cell, cIdx) => {
                                  const seat = cell as Seat;
                                  const level = getBerthLevel(seat.seatType);

                                  const isSeat =
                                    seat.isSeat &&
                                    seat.seatNumber &&
                                    (seatType === "lower"
                                      ? lowerSeats.includes(seat)
                                      : upperSeats.includes(seat));

                                  if (!isSeat) {
                                    if (
                                      seatType.toUpperCase() !== level &&
                                      level !== "Unknown"
                                    ) {
                                      return null;
                                    }

                                    return (
                                      // <div key={cIdx} className="p-1 sm:p-2">
                                      //   <div className="h-7 w-7 sm:h-8 sm:w-8" />
                                      // </div>
                                      <div key={cIdx} className="p-[2px]">
  <div className="h-4 w-2 sm:h-10 sm:w-10" />
</div>
                                    );
                                  }

                                  return (
                                    <Tooltip key={cIdx}>
                                      <TooltipTrigger asChild>
                                        <div
                                          onClick={() => toggleSeat(seat)}
                                          className="flex cursor-pointer items-center justify-center p-[2px]"
                                        >
                                          <img
                                            src={
                                              !seat.isAvailable
                                                ? seatBooked
                                                : selectedLabels.includes(seat.seatNumber!)
                                                ? seatSelected
                                                : seat.gender === "F"
                                                ? seatLadies
                                                : seatAvailable
                                            }
                                            alt="seat"
                                            className="h-16 w-9 object-contain sm:h-16 sm:w-12 lg:h-24 lg:w-11"
                                          />
                                        </div>
                                      </TooltipTrigger>

                                      <TooltipContent side="top" className="text-sm">
                                        <div className="space-y-1">
                                          <p className="font-bold">
                                            Seat {seat.seatNumber}
                                          </p>
                                          <p>Type: {seat.seatType || "Standard"}</p>
                                          <p>
                                            Fare: ₹{seat.fare} + ₹{seat.gst} GST
                                          </p>
                                          <p>
                                            Status:{" "}
                                            {seat.isAvailable ? "Available" : "Booked"}
                                          </p>
                                          {seat.gender && (
                                            <Badge variant="outline">
                                              Gender:{" "}
                                              {seat.gender === "F" ? "Female" : "Male"}
                                            </Badge>
                                          )}
                                        </div>
                                      </TooltipContent>
                                    </Tooltip>
                                  );
                                })}
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            </Card>

            {selectedSeats.length > 0 && (
              <Card className="overflow-hidden">
                <CardHeader className="p-4">
                  <CardTitle className="text-lg">
                    Selected Seats ({selectedSeats.length})
                  </CardTitle>
                </CardHeader>

                <CardContent className="space-y-4 p-4">
                  <div className="flex flex-wrap gap-2">
                    {selectedSeats.map((s) => (
                      <Badge key={s.seatNumber} variant="default" className="text-sm">
                        {s.seatNumber}
                      </Badge>
                    ))}
                  </div>

                  <Separator />

                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Base Fare</span>
                      <span>₹{totalFare}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>GST</span>
                      <span>₹{totalGst}</span>
                    </div>
                    <div className="flex justify-between border-t pt-3 text-lg font-bold">
                      <span>Total</span>
                      <span className="flex items-center text-primary">
                        <IndianRupee className="h-5 w-5" />
                        {grandTotal}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          <div className="min-w-0 space-y-4">
            <Card className="overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5" />
                  Boarding Point
                </CardTitle>
              </CardHeader>

              <CardContent className="max-h-[260px] overflow-y-auto p-4 pt-0">
                {layout.boardingStages.map((stage, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedBoardingIndex(i)}
                    className={`mb-2 cursor-pointer rounded-lg border p-3 transition-all ${
                      selectedBoardingIndex === i
                        ? "border-primary bg-primary/10"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {stage.time} • {stage.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stage.address}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader className="p-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MapPin className="h-5 w-5" />
                  Dropping Point
                </CardTitle>
              </CardHeader>

              <CardContent className="max-h-[260px] overflow-y-auto p-4 pt-0">
                {layout.dropoffStages.map((stage, i) => (
                  <div
                    key={i}
                    onClick={() => setSelectedDropIndex(i)}
                    className={`mb-2 cursor-pointer rounded-lg border p-3 transition-all ${
                      selectedDropIndex === i
                        ? "border-primary bg-primary/10"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <p className="text-sm font-semibold">
                      {stage.time} • {stage.name}
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {stage.address}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>

            <div className="flex flex-col gap-3 rounded-xl bg-white p-3 sm:p-4">
              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" onClick={resetAll}>
                  Reset
                </Button>
                <Button disabled={!isComplete} onClick={handleContinue}>
                  Continue
                </Button>
              </div>

              {!isComplete && (
                <div className="flex items-center gap-2 rounded-lg bg-amber-50 p-3 text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 shrink-0 text-amber-600" />
                  <span>Please select seat, boarding & dropping point</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
}
