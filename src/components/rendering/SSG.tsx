async function SSG() {
  const response = await fetch(`https://catfact.ninja/fact`, {
    cache: "force-cache",
  });
  const { fact }: { fact: string } = await response.json();
  return (
    <>
      <h2 className="font-bold text-2xl">SSG 결과</h2>
      <div className="bg-slate-100 p-4">{fact}</div>
    </>
  );
}

export default SSG;
