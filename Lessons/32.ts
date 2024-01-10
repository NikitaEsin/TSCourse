enum LoadingStatus {
  Loading,
  Error,
  Success,
}

interface DataState {
  status: LoadingStatus;
  error?: Error;
  data?: number;
}

function handleData(dataState: DataState): string {
  switch (dataState.status) {
    case LoadingStatus.Loading:
      return 'loading...';
    case LoadingStatus.Error:
      return dataState.error ? dataState.error.message : 'unknown error';
    case LoadingStatus.Success:
      return dataState.data !== undefined ? String(dataState.data) : 'unknown data';
    default:
      return 'unknown';
  }
}