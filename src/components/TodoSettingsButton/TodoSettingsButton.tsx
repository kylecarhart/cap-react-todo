import {
  useFloating,
  offset,
  flip,
  shift,
  autoUpdate,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  FloatingFocusManager,
} from "@floating-ui/react";
import { ButtonHTMLAttributes, useState } from "react";
import CogIcon from "../Icons/CogIcon";
import { Todo } from "../../types";
import ColorPicker from "../ColorPicker/ColorPicker";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  updateTodoVariant: (variant: Todo["variant"]) => void;
}

export default function TodoSettingsButton({
  updateTodoVariant,
  ...props
}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift()],
    placement: "top",
    whileElementsMounted: autoUpdate,
  });

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    click,
    dismiss,
    role,
  ]);

  return (
    <>
      <button {...props} ref={refs.setReference} {...getReferenceProps()}>
        <CogIcon />
      </button>
      {isOpen && (
        <FloatingFocusManager context={context} modal={false}>
          <div
            ref={refs.setFloating}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            <ColorPicker updateTodoVariant={updateTodoVariant} />
          </div>
        </FloatingFocusManager>
      )}
    </>
  );
}
