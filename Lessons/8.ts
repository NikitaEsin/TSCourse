enum ModalStatus {
  Opened,
  Closed
};

function buildModal(text: string, status: ModalStatus) {
  return {
    text: text,
    status: status
  };
}