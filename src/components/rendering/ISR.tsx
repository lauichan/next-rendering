async function ISR() {
  const response = await fetch(`https://catfact.ninja/fact`, {
    next: {
      revalidate: 5,
    },
  });
  const { fact }: { fact: string } = await response.json();
  return (
    <>
      <h2 className="font-bold text-2xl">ISR 결과</h2>
      <div className="bg-slate-100 p-4">{fact}</div>
    </>
  );
}

export default ISR;
