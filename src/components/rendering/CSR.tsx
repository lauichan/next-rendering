"use client";

import { useEffect, useState } from "react";

function CSR() {
  const [fact, setFact] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch(`https://catfact.ninja/fact`);
      const { fact }: { fact: string } = await response.json();
      setFact(fact);
    };
    fetchUser();
  }, []);

  if (!fact) return <>로딩중</>;

  return (
    <>
      <h2 className="font-bold text-2xl">CSR 결과</h2>
      <div className="bg-slate-100 p-4">{fact}</div>
    </>
  );
}

export default CSR;
