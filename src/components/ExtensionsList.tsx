import type { Exten } from "../types/data";
export default function ExtensionsList({
  Extens,
  makeExtenActive,
  removeExtens,
}: {
  Extens: Exten[];
  makeExtenActive: (el: string) => void;
  removeExtens: (el: string) => void;
}) {
  return (
    <div>
      <ul
        className=" pt-6 grid grid-cols-1 sm:grid-cols-[repeat(auto-fill,minmax(330px,1fr))] gap-4 text-white
        "
      >
        {Extens.map((el) => {
          return (
            <li
              key={el.name}
              className=" flex flex-col gap-y-15 border border-primary-Neutral-300 dark:border-primary-Neutral-600 dark:bg-primary-Neutral-800 text-black p-4 bg-primary-Neutral-0 rounded-2xl"
            >
              <div className=" flex gap-x-4">
                <div className=" w-[20%]">
                  <img
                    src={el.logo}
                    alt={el.name + " logo"}
                    className="  max-w-none  "
                  />
                </div>
                <div>
                  <h3 className=" text-[1.1rem] font-bold dark:text-primary-Neutral-100">
                    {el.name}
                  </h3>
                  <p className=" text-[0.9rem] dark:text-primary-Neutral-300 mt-1 max-w-100">
                    {el.description}
                  </p>
                </div>
              </div>
              <div className=" px-1 flex justify-between items-center">
                <button
                  type="button"
                  onClick={() => removeExtens(el.name)}
                  className=" rounded-3xl border text-[0.89rem] dark:bg-primary-Neutral-800 hover:bg-primary-Red-500 hover:text-primary-Neutral-200 dark:text-primary-Neutral-300  border-primary-Neutral-300 dark:border-primary-Neutral-600 cursor-pointer text-primary-Neutral-900 py-1 px-3  font-normal"
                >
                  Remove
                </button>
                <label className="inline-flex items-center cursor-pointer">
                  <input
                    onChange={() => makeExtenActive(el.name)}
                    type="checkbox"
                    checked={el.isActive}
                    className="sr-only peer"
                  />
                  <div className="relative w-9 h-5  bg-primary-Neutral-300 peer-focus:outline-none   rounded-full peer peer-checked:after:translate-x-full peer-checked:bg-primary-Red-500 rtl:peer-checked:after:-translate-x-full peer-checked:after:border-buffer after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-brand"></div>
                </label>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
