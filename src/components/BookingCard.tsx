"use client";

import { useState } from "react";
import { format } from "date-fns";
import { CalendarIcon, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";

export function BookingCard({dict}: {dict: any}) {
  const [department, setDepartment] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState<Date>();

  return (
    <div className="w-full max-w-sm rounded-2xl border bg-card p-6 shadow-xl">
      <h2 className="text-xl font-bold">
       {dict.heroBookingForm.title}
      </h2>

      <p className="mt-1 text-sm text-muted-foreground">
        {dict.heroBookingForm.description}
      </p>

      <div className="mt-5 space-y-4">
        {/* Department */}
        <div >
        

          <Select value={department} onValueChange={setDepartment} >
            <SelectTrigger className="!h-12 w-full py-2">
              <SelectValue placeholder={dict.heroBookingForm.selectDepartment} />
            </SelectTrigger>

            <SelectContent >
              <SelectItem value="Lasertreatment" >
                Laser treatment
              </SelectItem>

              <SelectItem value="Dentistry">
                Dentistry
              </SelectItem>

              <SelectItem value="Gynecology">
                Gynecology
              </SelectItem>

            </SelectContent>
          </Select>
        </div>

        {/* Doctor */}
        <div>
   

          <Select value={doctor} onValueChange={setDoctor}>
            <SelectTrigger className="!h-12  w-full">
              <SelectValue placeholder={dict.heroBookingForm.selectDoctor} />
            </SelectTrigger>

            <SelectContent>
              <SelectItem value="dr-ahmed">
                Dr. Ahmed Hassan
              </SelectItem>

              <SelectItem value="dr-mohamed">
                Dr. Mohamed Ali
              </SelectItem>

              <SelectItem value="dr-sara">
                Dr. Sara Ibrahim
              </SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Date */}
        <div>
       

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "h-11 w-full justify-between text-left font-normal",
                  !date && "text-muted-foreground"
                )}
              >

                {date
                  ? format(date, "PPP")
                  : dict.heroBookingForm.selectDate}
                  <CalendarIcon className="mr-2 size-4" />
              </Button>
            </PopoverTrigger>

            <PopoverContent
              align="start"
              className="w-auto p-0"
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(date) => date < new Date()}
              />
            </PopoverContent>
          </Popover>
        </div>

        <Button
          size="lg"
          className="h-12 w-full rounded-xl"
        >
          <Search className="size-4" />
          {dict.heroBookingForm.submit}
        </Button>
      </div>
    </div>
  );
}