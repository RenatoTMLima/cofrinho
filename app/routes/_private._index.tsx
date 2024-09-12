import type { MetaFunction } from "@remix-run/node";
import { Input } from "@base/input";
import { Button } from "@base/button";
import { AppSection } from "@base/app-section";
import { Combobox, Option } from "@base/combobox";
import { useState } from "react";
import { DatePicker } from "@base/date-picker";
import { Switch } from "@base/switch";
import { cn } from "@/lib/utils/ui";

const options = [
  { label: "Teste", value: "teste" },
  { label: "Opa opa", value: "opa_opa" },
];

export const meta: MetaFunction = () => {
  return [{ title: "Home | Cofrinho" }];
};

export default function Home() {
  const [category, setCategory] = useState<Option | null>(null);
  const [type, setType] = useState(false);

  return (
    <main className="flex flex-col gap-4">
      <AppSection>
        <h1 className="text-center">Registrar</h1>
        <form className="flex gap-8">
          <div className="basis-7/12 flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="date">Data</label>
              <DatePicker />
            </div>
            <div className="flex flex-col">
              <label htmlFor="category">Categoria</label>
              <Combobox
                options={options}
                onSelect={(cat) => setCategory(cat)}
                selectedPlaceholder="Selecione ou adicione uma categoria"
                inputPlaceholder="Digite para procurar ou adicionar"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="value">Valor</label>
              <Input id="value" type="number" />
            </div>
          </div>
          <div className="basis-5/12 flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h5>Tipo de Lancamento</h5>
              <div className="flex gap-2 mx-auto items-center">
                <h6 className={cn(!type ? "font-bold" : "opacity-60")}>
                  Despesa
                </h6>
                <Switch checked={type} onCheckedChange={setType} />
                <h6 className={cn(type ? "font-bold" : "opacity-60")}>
                  Receita
                </h6>
              </div>
            </div>
            <Button type="submit">Lancar</Button>
          </div>
        </form>
      </AppSection>
      <AppSection>
        <h1 className="text-center">Resumo Anual</h1>
      </AppSection>
    </main>
  );
}
