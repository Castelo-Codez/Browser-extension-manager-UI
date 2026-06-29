import ExtensionsControllers from "./ExtensionsControllers";
import ExtensionsList from "./ExtensionsList";
import data from "../../data.json";
import { useState } from "react";
import type { Exten } from "../types/data";
export default function ExtensionsContainer() {
  const [extens, setNewExtens] = useState<Exten[]>(data);
  const [statusController, setNewStatusController] = useState<boolean | null>(
    null,
  );
  const filteredExtens = extens.filter((el) =>
    typeof statusController === "boolean"
      ? el.isActive === statusController
      : el,
  );
  function makeExtenActive(elKey: string) {
    setNewExtens((prev) =>
      prev.map((el) =>
        el.name === elKey ? { ...el, isActive: !el.isActive } : el,
      ),
    );
  }
  function removeExtens(elKey: string) {
    setNewExtens((prev) => prev.filter((el) => el.name !== elKey));
  }
  function updateStatusController(newStatus: any) {
    setNewStatusController(newStatus);
  }
  return (
    <>
      <section className=" mt-10 ">
        <ExtensionsControllers
          statusController={statusController}
          updateStatusController={updateStatusController}
        />
        <ExtensionsList
          Extens={filteredExtens}
          makeExtenActive={makeExtenActive}
          removeExtens={removeExtens}
        />
      </section>
    </>
  );
}
