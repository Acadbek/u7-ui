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
      <Button onClick={openDialog}>Open</Button>

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
                <Button variant="red" onClick={closeDialog}>
                  Close
                </Button>
                <Button onClick={closeDialog}>
                  Ok
                </Button>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DialogDemo;