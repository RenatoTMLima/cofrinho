import type { MetaFunction } from "@remix-run/node";
import { Input } from "@base/input";
import { AppSection } from "@base/app-section";

export const meta: MetaFunction = () => {
  return [{ title: "Home | Cofrinho" }];
};

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <AppSection>
        <h1 className="text-center">Registrar</h1>
        <form>
          <label htmlFor="value">Valor</label>
          <Input id="value" />
        </form>
      </AppSection>
      <AppSection>
        <h1 className="text-center">Resumo Anual</h1>
      </AppSection>
    </main>
  );
}
