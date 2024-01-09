function last(item: string | number) {
    switch (typeof item) {
      case 'string': {
        return item.slice(-1);
      }
      case 'number': {
        return Number(item.toString().slice(-1));
      }
    }
}