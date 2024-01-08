function getParams(query: string): Record<string, string> {
  const parts = query.split('&');
  const init: Record<string, string> = {};
  const result = parts.reduce((acc, part) => {
    const [key, value] = part.split('=');
    acc[key] = value;
    return acc;
  }, init);

  return result;
}