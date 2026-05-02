// import * as React from "react";
// import { Check, ChevronDown, ChevronsUpDown } from "lucide-react";
// import { cn } from "@/lib/utils";
//
// import {
//   Command,
//   CommandEmpty,
//   CommandGroup,
//   CommandInput,
//   CommandItem,
//   CommandList,
// } from "@/components/ui/command";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
//
// type Option = {
//   value: string;
//   label: string;
// };
//
// interface ComboboxDemoProps {
//   options: Option[];
//   value: string;
//   onValueChange: (value: string) => void;
//   placeholder?: string;
//   searchPlaceholder?: string;
//   emptyMessage?: string;
// }
//
// export function ComboboxDemo({
//   options,
//   value,
//   onValueChange,
//   placeholder = "Select option...",
//   searchPlaceholder = "Search…",
//   emptyMessage = "No results found.",
// }: ComboboxDemoProps) {
//   const [open, setOpen] = React.useState(false);
//
//   const selectedLabel =
//     options.find((option) => option.value === value)?.label ?? placeholder;
//
//   return (
//     <Popover open={open} onOpenChange={setOpen}>
//       <PopoverTrigger asChild>
//         <Button
//           variant="outline"
//           role="combobox"
//           aria-expanded={open}
//           className="w-full justify-between border border-gray-300 rounded px-3 py-3"
//         >
//           {selectedLabel}
//           <ChevronDown className="ml-2 h-4 w-4 opacity-50" />
//         </Button>
//       </PopoverTrigger>
//
//       <PopoverContent className=" p-0">
//         <Command>
//           <CommandInput placeholder={searchPlaceholder} />
//           <CommandList>
//             <CommandEmpty>{emptyMessage}</CommandEmpty>
//             <CommandGroup>
//               {options.map((option) => (
//                 <CommandItem
//                   key={option.value}
//                   value={option.label}
//                   onSelect={(currentValue) => {
//                     console.log("Cureengt value", currentValue);
//                     console.log("option.value", option.value);
//                     onValueChange(currentValue == option.value ? "" : option.value);
//                     setOpen(false);
//                   }}
//                 >
//                   <Check
//                     className={cn(
//                       "mr-2 h-4 w-4",
//                       value === option.value ? "opacity-100" : "opacity-0"
//                     )}
//                   />
//                   {option.label}
//                 </CommandItem>
//               ))}
//             </CommandGroup>
//           </CommandList>
//         </Command>
//       </PopoverContent>
//     </Popover>
//   );
// }
//
//
import * as React from "react";
import { Check, ChevronDown, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

type Option = {
  value: string;
  label: string;
};

interface ComboboxDemoProps {
  options: Option[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  emptyMessage?: string;
  /** New prop */
  loading?: boolean;
}

export function ComboboxDemo({
  options,
  value,
  onValueChange,
  placeholder = "Select option...",
  searchPlaceholder = "Search…",
  emptyMessage = "No results found.",
  loading = false,               // ← default false
}: ComboboxDemoProps) {
  const [open, setOpen] = React.useState(false);

  const selectedLabel =
    options.find((option) => option.value === value)?.label ?? placeholder;

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between border border-gray-300 rounded px-3 py-3"
          disabled={loading}               // optional: disable trigger while loading
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Loading…
            </>
          ) : (
            selectedLabel
          )}
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput
            placeholder={searchPlaceholder}
            disabled={loading}            // disable search while loading
          />

          <CommandList>
            {loading ? (
              <div className="flex items-center justify-center py-6">
                <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
              </div>
            ) : options.length === 0 ? (
              <CommandEmpty>{emptyMessage}</CommandEmpty>
            ) : (
              <CommandGroup>
                {options.map((option) => (
                  <CommandItem
                    key={option.value}
                    value={option.label}               // Command uses label for filtering
                    onSelect={() => {
                      onValueChange(value === option.value ? "" : option.value);
                      setOpen(false);
                    }}
                  >
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        value === option.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {option.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
