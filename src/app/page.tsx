import Nav from "@/components/nav";

export default function Home() {
  return (
    <>
      <Nav />
      <h1 className="font-bold text-3xl">Daily 과제</h1>
      <h2 className="font-bold text-2xl">목표</h2>
      <p>주제</p>
      <h2 className="font-bold text-2xl">요구사항</h2>
      <ol className="list-inside list-decimal">
        <li className="py-2">
          RootLayout에 내비게이션 역할을 하는 Nav 컴포넌트 포함
        </li>
        <li className="py-2">Nav 컴포넌트는 다음 메뉴를 가지고 있습니다.</li>
        <ol className="list-inside list-decimal pl-4">
          <li className="py-2">SSG</li>
          <li className="py-2">ISR</li>
          <li className="py-2">SSR</li>
          <li className="py-2">CSR</li>
        </ol>
        <li className="py-2">
          각 페이지를 클릭하면, 고양이에 대한 사실을 알려주는 API를 각 렌더링
          방식에 맞게 보여주도록 합니다.
        </li>
        <blockquote className="p-4 bg-slate-100">
          <p>https://catfact.ninja/fact</p>
        </blockquote>
        <li className="py-2">
          styling 도구는 반드시 Tailwind 만을 이용하여 css를 여러분의 입맛대로
          구성합니다.
        </li>
        <li className="py-2">
          주의사항
          <ul>
            <li className="py-2">
              테스트를 위해서는{" "}
              <code className="bg-slate-100 px-1 rounded-md">dev</code> 모드가
              아닌{" "}
              <code className="bg-slate-100 px-1 rounded-md">production</code>{" "}
              모드를 사용해주세요. 즉,{" "}
              <code className="bg-slate-100 px-1 rounded-md">npm run dev</code>{" "}
              가 아니라{" "}
              <code className="bg-slate-100 px-1 rounded-md">
                npm run build
              </code>
              {"=>"}
              <code className="bg-slate-100 px-1 rounded-md">
                npm run start
              </code>
              를 사용해주세요
            </li>
          </ul>
        </li>
      </ol>
    </>
  );
}
