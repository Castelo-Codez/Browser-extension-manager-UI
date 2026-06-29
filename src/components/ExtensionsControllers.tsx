import clsx from "clsx";
type statusFilter = boolean | null;
type Props = {
  updateStatusController: (newState: statusFilter) => void;
  statusController: statusFilter;
};

export default function ExtensionsControllers({
  updateStatusController,
  statusController,
}: Props) {
  const filters = [
    { label: "All", value: null },
    { label: "Active", value: true },
    { label: "Inactive", value: false },
  ];
  console.log(statusController);
  return (
    <section className=" px-2   text-primary-Neutral-900 flex flex-col font-bold gap-y-2 md:flex-row  md:justify-between md:items-center text-[1.4rem] ">
      <h2 className=" text-center capitalize md:text-[2rem] dark:text-primary-Neutral-0">
        Extensions List
      </h2>
      <ul className=" flex items-center justify-center gap-x-3">
        {filters.map((el) => {
          return (
            <li key={el.label}>
              <button
                onClick={() => updateStatusController(el.value)}
                className={clsx(
                  " cursor-pointer text-[0.9rem] md:text-[1rem] font-medium shadow shadow-primary-Neutral-200 dark:hover:bg-primary-Red-500 hover:bg-primary-Neutral-100 dark:bg-primary-Neutral-700 dark:text-primary-Neutral-0  dark:hover:text-primary-Neutral-0 hover:text-primary-Neutral-600  dark:shadow-none    bg-primary-Neutral-0 px-3.5 md:px-5 flex justify-center items-center py-1.5 md:py-2.5 rounded-3xl",
                  statusController === el.value &&
                    " bg-primary-Red-700 text-primary-Neutral-200 dark:bg-primary-Red-500 dark:text-primary-Neutral-800",
                )}
              >
                {el.label}
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
