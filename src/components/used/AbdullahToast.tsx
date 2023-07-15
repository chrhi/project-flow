import { X } from "lucide-react";
import toast from "react-hot-toast";

export const AbdullahToast = (message : string) => toast.custom((t) => (
    <div
      className={`${
        t.visible ? 'animate-enter' : 'animate-leave'
      } max-w-md w-full bg-gradient-to-br from-blue-500 to-sky-400 shadow-lg rounded-sm pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
    >
      <div className="flex-1 w-0 p-4">
        <p className="text-white text-xl font-semibold text-start">{message}</p>
      </div>
      <div className="flex border-l border-gray-200">
        <button
          onClick={() => toast.dismiss(t.id)}
          className="rounded-[50%] hover:bg-gray-500 cursor-pointer bg-transparent p-2"
        >
        <X className="w-4 h-4 text-white" />
        </button>
      </div>
    </div>
  ))
