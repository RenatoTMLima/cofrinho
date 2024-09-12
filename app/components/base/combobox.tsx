"use client";

import * as React from "react";
import { CheckIcon, CaretSortIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils/ui";
import { Button } from "@base/button";
import {
  Command,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@base/command";
import { Popover, PopoverContent, PopoverTrigger } from "@base/popover";

export type Option = { value: string; label: string };

type ComboboxProps = {
  options: Option[];
  onSelect?: (value: Option) => void;
  inputPlaceholder?: string;
  selectedPlaceholder?: string;
};

function toValue(value: string) {
  return value.replaceAll(" ", "_").toLocaleLowerCase();
}

export function Combobox(props: ComboboxProps) {
  const { options, onSelect, inputPlaceholder, selectedPlaceholder } = props;

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");
  const [typed, setTyped] = React.useState("");

  const updatedOptions = React.useMemo(() => {
    if (!typed) {
      return options;
    }

    const val = toValue(typed);

    if (options.some((option) => option.value === val)) {
      return options;
    }

    return [...options, { value: val, label: typed }];
  }, [options, typed]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? updatedOptions.find((option) => option.value === value)?.label
            : selectedPlaceholder}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[--radix-popper-anchor-width] p-0">
        <Command
          filter={(value, search) => {
            if (value.includes(toValue(search))) return 1;

            return 0;
          }}
        >
          <CommandInput
            placeholder={inputPlaceholder}
            onInput={(event) => setTyped(event.currentTarget.value)}
          />
          <CommandList>
            <CommandGroup>
              {updatedOptions.map((option) => (
                <CommandItem
                  key={option.value}
                  value={option.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    if (onSelect) {
                      onSelect(option);
                    }
                    if (currentValue !== toValue(typed)) {
                      setTyped("");
                    }
                    setOpen(false);
                  }}
                >
                  <CheckIcon
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === option.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {option.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
