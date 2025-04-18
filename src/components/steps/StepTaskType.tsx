'use client'

export type TaskType = "run-program" | "copy-files" | "delete-folder";

interface Props {
  selected: TaskType;
  onChange: (type: TaskType) => void;
}

const tasks: {
  id: TaskType;
  title: string;
  description: string;
  warning?: string;
}[] = [
  {
    id: "run-program",
    title: "Run a Program",
    description: "Launch any executable or script file.",
  },
  {
    id: "copy-files",
    title: "Copy Files",
    description: "Copy files from one folder to another.",
  },
  {
    id: "delete-folder",
    title: "Delete Folder",
    description: "Remove a folder and all its contents.",
    warning: "⚠️ This will permanently delete files. Use with caution.",
  },
];

export function StepTaskType({ selected, onChange }: Props) {
  return (
    <div className="mt-10 space-y-4">
      <h2 className="text-xl font-semibold">Step 2: Choose Task</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <button
            key={task.id}
            onClick={() => onChange(task.id)}
            className={`p-4 rounded-lg border text-left transition
              ${selected === task.id
                ? "bg-yellow-400 text-black border-yellow-600 shadow-lg"
                : "bg-transparent border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800"}
            `}
          >
            <h3 className="font-bold">{task.title}</h3>
            <p className="text-sm opacity-75">{task.description}</p>
            {selected === task.id && task.warning && (
              <p className="text-sm mt-2 text-red-600 font-semibold">
                {task.warning}
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
