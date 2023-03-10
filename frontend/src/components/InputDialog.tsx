import DialogModal from "./DialogModal";

interface Props {
  message: string;
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmDialog({
  message,
  open,
  onConfirm,
  onCancel,
}: Props) {
  function handleDialogForm(e: React.SyntheticEvent) {
    e.preventDefault();
    const target = e.target as typeof e.target & { value: string };
    if (target.value === "default") {
      onConfirm();
    } else {
      onCancel();
    }
  }

  return (
    <DialogModal open={open} onRequestClose={onCancel}>
      <form
        method="dialog"
        className="flex flex-col"
        onSubmit={handleDialogForm}
      >
        <p className="text-2xl font-light">{message}</p>
        <div className="flex flex-row">
          <label className="mx-2 w-7" htmlFor="">1.</label>
          <input type="text"></input>
          <label className="flex mx-2 w-7 align-center" htmlFor="">2.</label>
          <input type="text"></input>
        </div>
        <div className="flex flex-row">
          <label className="mx-2 w-7" htmlFor="">3.</label>
          <input type="text"></input>
          <label className="mx-2 w-7" htmlFor="">4.</label>
          <input type="text"></input>
        </div>
        <div className="flex flex-row">
          <label className="mx-2 w-7" htmlFor="">5.</label>
          <input type="text"></input>
          <label className="mx-2 w-7" htmlFor="">6.</label>
          <input type="text"></input>
        </div>
        <div className="flex flex-row">
          <label className="mx-2 w-7" htmlFor="">7.</label>
          <input type="text"></input>
          <label className="mx-2 w-7" htmlFor="">8.</label>
          <input type="text"></input>
        </div>
        <div className="flex flex-row">
          <label className="mx-2 w-7" htmlFor="">9.</label>
          <input type="text"></input>
          <label className="mx-2 w-7" htmlFor="">10.</label>
          <input type="text"></input>
        </div>
        <div className="flex flex-row">
          <label className="mx-2 w-7" htmlFor="">11.</label>
          <input type="text"></input>
          <label className="mx-2 w-7" htmlFor="">12.</label>
          <input type="text"></input>
        </div>
        <div className="flex gap-2 w-full justify-end">
          <button value="default" className="blue-button" onClick={onConfirm}>
            Done
          </button>
          <button value="cancel">Cancel</button>
        </div>
      </form>
    </DialogModal>
  );
}
