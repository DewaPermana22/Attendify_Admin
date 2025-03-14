import React from "react";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import ButtonComponent from "../Atoms/Button";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const Alert = ({ isOpen, onClose }: Props) => {
  return (
    <AlertDialog.Root open={isOpen} onOpenChange={onClose}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 bg-gray-900/25 dark:bg-black/15" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white dark:bg-darkCard p-6 rounded-md shadow-lg w-96">
          <AlertDialog.Title className="text-lg text-text dark:text-textDark font-semibold">
            Delete Users
          </AlertDialog.Title>
          <AlertDialog.Description className="text-sm text-gray-500 dark:text-gray-200">
            Are you sure you want to delete these users? This action is permanent
            and cannot be undone.
          </AlertDialog.Description>
          <div className="flex justify-end gap-3 mt-4">
            <AlertDialog.Cancel asChild>
              <ButtonComponent clicked={onClose} color="Disabled" text="Cancel" />
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <ButtonComponent color="Danger" text="Delete" />
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default Alert;
