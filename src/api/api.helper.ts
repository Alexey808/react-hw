export function formatData<T>(arrayData: any[]): T {
  return arrayData.map((data) => {
    return Object.fromEntries(
      Object.entries(data).map(
        ([key, value]) =>
          [key.toLowerCase().replace(/^#/, ''), value]
      )
    );
  }) as T;
}