import React from "react";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Dialog } from "./dialog";
import { Button } from "./button";

const DialogDemo: React.FC = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return (
    <div>
      <Button onClick={openDialog}>Dialog Oynasini Ochish</Button>

      <AnimatePresence>
        {isDialogOpen && (
          <Dialog
            isOpen={isDialogOpen}
            onClose={closeDialog}
            title="Hello"
          // onCloseOnClickOutside={false}
          // onCloseOnEscape={false}
          >
            <div className="space-y-4">
              <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
              </p>
              <p>
                lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem
                lorem lorem
              </p>
              <div className="flex justify-end gap-3 pt-4">
                <button
                  onClick={closeDialog}
                  className="px-4 py-2 bg-gray-200 dark:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-md hover:bg-gray-300 dark:hover:bg-gray-500"
                >
                  Close
                </button>
                <button
                  onClick={closeDialog}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                >
                  Ok
                </button>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DialogDemo;