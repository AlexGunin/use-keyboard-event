import { KeyboardController } from "keyboard_controller";
import type { Element, SubscribeOptions } from "keyboard_controller/src/types";
import { useEffect } from "react";

export interface Props {
  shortcut: string;
  cb: () => void;
  subscribeOptions?: SubscribeOptions;
  element?: Element;
  keyboardController?: KeyboardController;
}

export const useKeyboardEvent = ({
  shortcut,
  cb,
  element,
  keyboardController,
  subscribeOptions,
}: Props): null => {
  useEffect(() => {
    const controller =
      keyboardController ??
      new KeyboardController({ element: element ?? window });
    const unsubscribe = controller.subscribe(shortcut, cb, subscribeOptions);

    return () => unsubscribe();
  });

  return null;
};
