import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { Button } from "../../../components/button";
import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Dialog } from "../../../components/dialog";

export const codeVariantModal =
  `import React from "react";
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
      <Button variant="outline" onClick={openDialog}>Open</Button>

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
              <p>Another description</p>
              <p>more description in here</p>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="red" onClick={closeDialog}>Close</Button>
                <Button onClick={closeDialog}>Ok</Button>
              </div>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DialogDemo;`;


export const codeVariantLoginModal =
  `import React from "react";
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
        <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
          <Button onClick={openDialog}>Login</Button>
        </div>
        <AnimatePresence>
          {isDialogOpen && (
            <Dialog
              isOpen={isDialogOpen}
              onClose={closeDialog}
              title="Login"
            >
              <div className="space-y-7">
                <div className="flex flex-col space-y-2 pt-3">
                  <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input id="email" className="border border-gray h-9 px-3" placeholder="Email" type="email" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="pass">Password</label>
                      <input id="pass" className="border border-gray h-9 px-3" placeholder="Password" type="password" />
                    </div>
                  <a className="text-blue-500 hover:underline w-max ml-auto" href="#">Forgot Password?</a>
                </div>
                <div className="grid grid-cols-2 gap-3 pt-4">
                  <Button variant="red" onClick={closeDialog}>Close</Button>
                  <Button onClick={closeDialog}>Login</Button>
                </div>
              </div>
              <p className="mt-5 text-center">Already have Account? <a className="text-blue-500 hover:underline" href="#">Sign</a></p>
            </Dialog>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  export default DialogDemo;`;

export const codeVariantEditModal =
  `import React from "react";
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
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
        <Button variant="secondary" onClick={openDialog}>Edit Profile</Button>
      </div>
      <AnimatePresence>
        {isDialogOpen && (
          <Dialog
            isOpen={isDialogOpen}
            onClose={closeDialog}
            title="Edit Mode"
          >
            <form onSubmit={e => e.preventDefault()} className="space-y-7">
              <div className="flex flex-col space-y-3 pt-3">
                <div className="flex flex-col">
                  <label htmlFor="name">Name</label>
                  <input id="name" className="border border-gray h-9 px-3" placeholder="Name" type="text" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email">Email</label>
                  <input id="email" className="border border-gray h-9 px-3" placeholder="Email" type="email" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="pass">Password</label>
                  <input id="pass" className="border border-gray h-9 px-3" placeholder="Password" type="password" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 pt-4">
                <Button type="button" variant="red" onClick={closeDialog}>Close</Button>
                <Button type="submit" onClick={closeDialog}>Edit</Button>
              </div>
            </form>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DialogDemo;`

export const codeVariantSureModal =
  `import React from "react";
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
      <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
        <Button variant="red" onClick={openDialog}>Confirm</Button>
      </div>
      <AnimatePresence>
        {isDialogOpen && (
          <Dialog
            isOpen={isDialogOpen}
            onClose={closeDialog}
            title="Are you absolutely sure?"
          >
            <div>
              <p className="text-lg">This action cannot be undone. Do you want to proceed?</p>
            </div>
            <div className="flex w-[50%] ml-auto gap-3 pt-4">
              <Button className="w-full" type="button" variant="red" onClick={closeDialog}>No</Button>
              <Button className="w-full" type="submit" onClick={closeDialog}>Yes</Button>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DialogDemo;`

export const useModalVariantData = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return [
    {
      label: "Preview",
      content: (
        <div>
          <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <Button variant="outline" onClick={openDialog}>Open</Button>
          </div>
          <AnimatePresence>
            {isDialogOpen && (
              <Dialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                title="Hello"
              >
                <div className="space-y-4">
                  <p>Another description</p>
                  <p>more description in here</p>
                  <div className="flex justify-end gap-3 pt-4">
                    <Button variant="red" onClick={closeDialog}>Close</Button>
                    <Button onClick={closeDialog}>Ok</Button>
                  </div>
                </div>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      ),
    },
    {
      label: "Code",
      content: (
        <SyntaxHighlighter
          customStyle={{
            height: "400px",
            backgroundColor: "#F8F8F8",
            padding: "40px",
            fontSize: "14px",
          }}
          language="javascript"
          style={docco}
        >
          {codeVariantModal}
        </SyntaxHighlighter>
      ),
    },
  ];
};

export const useModalFormLoginData = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return [
    {
      label: "Preview",
      content: (
        <div>
          <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <Button onClick={openDialog}>Login</Button>
          </div>
          <AnimatePresence>
            {isDialogOpen && (
              <Dialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                title="Login"
              >
                <form onSubmit={e => e.preventDefault()} className="space-y-7">
                  <div className="flex flex-col space-y-2 pt-3">
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input id="email" className="border border-gray h-9 px-3" placeholder="Email" type="email" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="pass">Password</label>
                      <input id="pass" className="border border-gray h-9 px-3" placeholder="Password" type="password" />
                    </div>
                    <a className="text-blue-500 hover:underline w-max ml-auto" href="#">Forgot Password?</a>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <Button type="button" variant="red" onClick={closeDialog}>Close</Button>
                    <Button type="submit" onClick={closeDialog}>Login</Button>
                  </div>
                </form>
                <p className="mt-5 text-center">Already have Account? <a className="text-blue-500 hover:underline" href="#">Sign</a></p>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      ),
    },
    {
      label: "Code",
      content: (
        <SyntaxHighlighter
          customStyle={{
            height: "400px",
            backgroundColor: "#F8F8F8",
            padding: "40px",
            fontSize: "14px",
          }}
          language="javascript"
          style={docco}
        >
          {codeVariantLoginModal}
        </SyntaxHighlighter>
      ),
    },
  ];
}

export const useModalFormEditData = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return [
    {
      label: "Preview",
      content: (
        <div>
          <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <Button variant="secondary" onClick={openDialog}>Edit Profile</Button>
          </div>
          <AnimatePresence>
            {isDialogOpen && (
              <Dialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                title="Edit Mode"
              >
                <form onSubmit={e => e.preventDefault()} className="space-y-7">
                  <div className="flex flex-col space-y-3 pt-3">
                    <div className="flex flex-col">
                      <label htmlFor="name">Name</label>
                      <input id="name" className="border border-gray h-9 px-3" placeholder="Name" type="text" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="email">Email</label>
                      <input id="email" className="border border-gray h-9 px-3" placeholder="Email" type="email" />
                    </div>
                    <div className="flex flex-col">
                      <label htmlFor="pass">Password</label>
                      <input id="pass" className="border border-gray h-9 px-3" placeholder="Password" type="password" />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 pt-4">
                    <Button type="button" variant="red" onClick={closeDialog}>Close</Button>
                    <Button type="submit" onClick={closeDialog}>Edit</Button>
                  </div>
                </form>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      ),
    },
    {
      label: "Code",
      content: (
        <SyntaxHighlighter
          customStyle={{
            height: "400px",
            backgroundColor: "#F8F8F8",
            padding: "40px",
            fontSize: "14px",
          }}
          language="javascript"
          style={docco}
        >
          {codeVariantEditModal}
        </SyntaxHighlighter>
      ),
    },
  ];
}

export const useModalSureData = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => setDialogOpen(true);
  const closeDialog = () => setDialogOpen(false);

  return [
    {
      label: "Preview",
      content: (
        <div>
          <div className="flex justify-center items-center border border-gray items-center gap-4 h-[400px]">
            <Button variant="red" onClick={openDialog}>Confirm</Button>
          </div>
          <AnimatePresence>
            {isDialogOpen && (
              <Dialog
                isOpen={isDialogOpen}
                onClose={closeDialog}
                title="Are you absolutely sure?"
              >
                <div>
                  <p className="text-lg">This action cannot be undone. Do you want to proceed?</p>
                </div>
                <div className="flex w-[50%] ml-auto gap-3 pt-4">
                  <Button className="w-full" type="button" variant="red" onClick={closeDialog}>No</Button>
                  <Button className="w-full" type="submit" onClick={closeDialog}>Yes</Button>
                </div>
              </Dialog>
            )}
          </AnimatePresence>
        </div>
      ),
    },
    {
      label: "Code",
      content: (
        <SyntaxHighlighter
          customStyle={{
            height: "400px",
            backgroundColor: "#F8F8F8",
            padding: "40px",
            fontSize: "14px",
          }}
          language="javascript"
          style={docco}
        >
          {codeVariantSureModal}
        </SyntaxHighlighter>
      ),
    },
  ];
}