import svgPaths from "./svg-w4pjqwta2";

function SectionTitleAndPageTitle() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Section title and page title">
      <div className="flex flex-col font-['Cabin:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181d27] text-[20px] whitespace-nowrap">
        <p className="leading-[30px]">Foundations</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="arrow-right">
        <div className="absolute inset-[20.83%]" data-name="Icon">
          <div className="absolute inset-[-8.57%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.6667 13.6667">
              <path d={svgPaths.p20c4bd80} id="Icon" stroke="var(--stroke-0, #181D27)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-col font-['Cabin:Semibold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#181d27] text-[20px] whitespace-nowrap">
        <p className="leading-[30px]">Colors</p>
      </div>
    </div>
  );
}

function LogoAndPageTitle() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="Logo and page title">
      <div className="content-stretch flex items-start relative shrink-0" data-name="Logomark">
        <div className="h-[36px] relative shrink-0 w-[31.5px]" data-name="nib-dark">
          <div className="absolute inset-[0_0.14%_0.01%_0]" data-name="logo mark">
            <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 31.4555 36.4195">
              <g id="logo mark">
                <path d={svgPaths.p34b08100} fill="var(--fill-0, #181D27)" />
                <path d={svgPaths.p11868200} fill="var(--fill-0, #181D27)" />
              </g>
            </svg>
          </div>
        </div>
      </div>
      <SectionTitleAndPageTitle />
    </div>
  );
}

function Header() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Header">
      <LogoAndPageTitle />
      <a className="block font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] whitespace-nowrap" href="https://www.untitledui.com" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[30px] text-[20px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
          www.untitledui.com
        </p>
      </a>
    </div>
  );
}

function HeadingAndSupportingText() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[20px] items-start max-w-[1024px] min-h-px min-w-px relative" data-name="Heading and supporting text">
      <p className="font-['Lustria:Semibold',sans-serif] leading-[72px] not-italic relative shrink-0 text-[#181d27] text-[60px] tracking-[-1.2px] w-full">Color utility variables</p>
      <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        Color variables (Figma’s version of design tokens) store reusable values that can be applied to all kinds of design properties including fill and stroke colors. They help save time and effort when managing design systems by acting as a “single source of truth” while allowing designers to create multiple color modes.
      </p>
    </div>
  );
}

function HeadingAndResources() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Heading and resources">
      <HeadingAndSupportingText />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#fafafa] relative rounded-[20px] shrink-0 w-full" data-name="Content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[128px] items-start pb-[64px] pt-[48px] px-[48px] relative w-full">
          <Header />
          <HeadingAndResources />
        </div>
      </div>
    </div>
  );
}

function TextAndBadge() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] whitespace-nowrap">Alpha colors</p>
      <div className="bg-[#ecfdf3] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Variables
        </p>
      </div>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-10</p>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-20</p>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-30</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-40</p>
    </div>
  );
}

function Badge4() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-50</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-60</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-70</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-80</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-90</p>
    </div>
  );
}

function Badge9() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-white-100</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-10</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-20</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-30</p>
    </div>
  );
}

function Badge13() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-40</p>
    </div>
  );
}

function Badge14() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-50</p>
    </div>
  );
}

function Badge15() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-60</p>
    </div>
  );
}

function Badge16() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-70</p>
    </div>
  );
}

function Badge17() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-80</p>
    </div>
  );
}

function Badge18() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-90</p>
    </div>
  );
}

function Badge19() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">alpha-black-100</p>
    </div>
  );
}

function Column() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Column">
      <div className="h-[34px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative size-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Name
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge1 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge2 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge3 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge4 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge5 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge6 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge7 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge8 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge9 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge10 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge11 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge12 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge13 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge14 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge15 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge16 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge17 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge18 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge19 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color() {
  return <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color />
    </div>
  );
}

function Badge20() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 10%</p>
    </div>
  );
}

function Color1() {
  return <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch1() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color1 />
    </div>
  );
}

function Badge21() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch1 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 20%</p>
    </div>
  );
}

function Color2() {
  return <div className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch2() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color2 />
    </div>
  );
}

function Badge22() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch2 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 30%</p>
    </div>
  );
}

function Color3() {
  return <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch3() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color3 />
    </div>
  );
}

function Badge23() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch3 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 40%</p>
    </div>
  );
}

function Color4() {
  return <div className="bg-[rgba(255,255,255,0.5)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch4() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color4 />
    </div>
  );
}

function Badge24() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch4 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 50%</p>
    </div>
  );
}

function Color5() {
  return <div className="bg-[rgba(255,255,255,0.6)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch5() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color5 />
    </div>
  );
}

function Badge25() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch5 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 60%</p>
    </div>
  );
}

function Color6() {
  return <div className="bg-[rgba(255,255,255,0.7)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch6() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color6 />
    </div>
  );
}

function Badge26() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch6 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 70%</p>
    </div>
  );
}

function Color7() {
  return <div className="bg-[rgba(255,255,255,0.8)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch7() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color7 />
    </div>
  );
}

function Badge27() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch7 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 80%</p>
    </div>
  );
}

function Color8() {
  return <div className="bg-[rgba(255,255,255,0.9)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch8() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color8 />
    </div>
  );
}

function Badge28() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch8 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 90%</p>
    </div>
  );
}

function Color9() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch9() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color9 />
    </div>
  );
}

function Badge29() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch9 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">white 100%</p>
    </div>
  );
}

function Color10() {
  return <div className="bg-[rgba(0,0,0,0.1)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch10() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color10 />
    </div>
  );
}

function Badge30() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch10 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 10%</p>
    </div>
  );
}

function Color11() {
  return <div className="bg-[rgba(0,0,0,0.2)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch11() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color11 />
    </div>
  );
}

function Badge31() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch11 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 20%</p>
    </div>
  );
}

function Color12() {
  return <div className="bg-[rgba(0,0,0,0.3)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch12() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color12 />
    </div>
  );
}

function Badge32() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch12 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 30%</p>
    </div>
  );
}

function Color13() {
  return <div className="bg-[rgba(0,0,0,0.4)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch13() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color13 />
    </div>
  );
}

function Badge33() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch13 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 40%</p>
    </div>
  );
}

function Color14() {
  return <div className="bg-[rgba(0,0,0,0.5)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch14() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color14 />
    </div>
  );
}

function Badge34() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch14 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 50%</p>
    </div>
  );
}

function Color15() {
  return <div className="bg-[rgba(0,0,0,0.6)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch15() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color15 />
    </div>
  );
}

function Badge35() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch15 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 60%</p>
    </div>
  );
}

function Color16() {
  return <div className="bg-[rgba(0,0,0,0.7)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch16() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color16 />
    </div>
  );
}

function Badge36() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch16 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 70%</p>
    </div>
  );
}

function Color17() {
  return <div className="bg-[rgba(0,0,0,0.8)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch17() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color17 />
    </div>
  );
}

function Badge37() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch17 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 80%</p>
    </div>
  );
}

function Color18() {
  return <div className="bg-[rgba(0,0,0,0.9)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch18() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color18 />
    </div>
  );
}

function Badge38() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch18 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 90%</p>
    </div>
  );
}

function Color19() {
  return <div className="bg-black flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch19() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color19 />
    </div>
  );
}

function Badge39() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch19 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">black 100%</p>
    </div>
  );
}

function Column1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Light mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge20 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge21 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge22 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge23 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge24 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge25 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge26 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge27 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge28 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge29 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge30 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge31 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge32 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge33 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge34 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge35 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge36 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge37 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge38 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge39 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color20() {
  return <div className="bg-[rgba(12,14,18,0.1)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch20() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color20 />
    </div>
  );
}

function Badge40() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch20 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 10%</p>
    </div>
  );
}

function Color21() {
  return <div className="bg-[rgba(12,14,18,0.2)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch21() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color21 />
    </div>
  );
}

function Badge41() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch21 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 20%</p>
    </div>
  );
}

function Color22() {
  return <div className="bg-[rgba(12,14,18,0.3)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch22() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color22 />
    </div>
  );
}

function Badge42() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch22 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 30%</p>
    </div>
  );
}

function Color23() {
  return <div className="bg-[rgba(12,14,18,0.4)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch23() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color23 />
    </div>
  );
}

function Badge43() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch23 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 40%</p>
    </div>
  );
}

function Color24() {
  return <div className="bg-[rgba(12,14,18,0.5)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch24() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color24 />
    </div>
  );
}

function Badge44() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch24 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 50%</p>
    </div>
  );
}

function Color25() {
  return <div className="bg-[rgba(12,14,18,0.6)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch25() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color25 />
    </div>
  );
}

function Badge45() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch25 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 60%</p>
    </div>
  );
}

function Color26() {
  return <div className="bg-[rgba(12,14,18,0.7)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch26() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color26 />
    </div>
  );
}

function Badge46() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch26 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 70%</p>
    </div>
  );
}

function Color27() {
  return <div className="bg-[rgba(12,14,18,0.8)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch27() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color27 />
    </div>
  );
}

function Badge47() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch27 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 80%</p>
    </div>
  );
}

function Color28() {
  return <div className="bg-[rgba(12,14,18,0.9)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch28() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color28 />
    </div>
  );
}

function Badge48() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch28 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 90%</p>
    </div>
  );
}

function Color29() {
  return <div className="bg-[#0c0e12] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch29() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color29 />
    </div>
  );
}

function Badge49() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch29 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-950 100%</p>
    </div>
  );
}

function Color30() {
  return <div className="bg-[rgba(255,255,255,0.1)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch30() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color30 />
    </div>
  );
}

function Badge50() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch30 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 10%</p>
    </div>
  );
}

function Color31() {
  return <div className="bg-[rgba(255,255,255,0.2)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch31() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color31 />
    </div>
  );
}

function Badge51() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch31 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 20%</p>
    </div>
  );
}

function Color32() {
  return <div className="bg-[rgba(255,255,255,0.3)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch32() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color32 />
    </div>
  );
}

function Badge52() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch32 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 30%</p>
    </div>
  );
}

function Color33() {
  return <div className="bg-[rgba(255,255,255,0.4)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch33() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color33 />
    </div>
  );
}

function Badge53() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch33 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 40%</p>
    </div>
  );
}

function Color34() {
  return <div className="bg-[rgba(255,255,255,0.5)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch34() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color34 />
    </div>
  );
}

function Badge54() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch34 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 50%</p>
    </div>
  );
}

function Color35() {
  return <div className="bg-[rgba(255,255,255,0.6)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch35() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color35 />
    </div>
  );
}

function Badge55() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch35 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 60%</p>
    </div>
  );
}

function Color36() {
  return <div className="bg-[rgba(255,255,255,0.7)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch36() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color36 />
    </div>
  );
}

function Badge56() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch36 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 70%</p>
    </div>
  );
}

function Color37() {
  return <div className="bg-[rgba(255,255,255,0.8)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch37() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color37 />
    </div>
  );
}

function Badge57() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch37 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 80%</p>
    </div>
  );
}

function Color38() {
  return <div className="bg-[rgba(255,255,255,0.9)] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch38() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color38 />
    </div>
  );
}

function Badge58() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch38 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 90%</p>
    </div>
  );
}

function Color39() {
  return <div className="bg-white flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch39() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color39 />
    </div>
  );
}

function Badge59() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch39 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">white 100%</p>
    </div>
  );
}

function Column2() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dark mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge40 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge41 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge42 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge43 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge44 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge45 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge46 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge47 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge48 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge49 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge50 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge51 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge52 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge53 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge54 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge55 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge56 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge57 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge58 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge59 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content2() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Content">
      <Column />
      <Column1 />
      <Column2 />
    </div>
  );
}

function Content1() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-[720px]" data-name="Design note">
        <TextAndBadge />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[28px] text-[18px]">{`Use alpha color variables to manage all white and black opacity fill colors in your designs across light and dark modes. For more detail on how these variables are structured and how to use them, please refer to our `}</span>
          <a className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              Introduction to variables
            </span>
          </a>
          <span className="leading-[28px] text-[18px]">.</span>
        </p>
      </div>
      <Content2 />
    </div>
  );
}

function TextAndBadge1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full" data-name="Text and badge">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[32px] not-italic relative shrink-0 text-[#181d27] text-[24px] whitespace-nowrap">Utility colors</p>
      <div className="bg-[#ecfdf3] content-stretch flex items-center px-[10px] py-[2px] relative rounded-[9999px] shrink-0" data-name="Badge">
        <div aria-hidden="true" className="absolute border border-[#abefc6] border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[20px] relative shrink-0 text-[#067647] text-[14px] text-center whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Variables
        </p>
      </div>
    </div>
  );
}

function Badge60() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-50</p>
    </div>
  );
}

function Badge61() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-100</p>
    </div>
  );
}

function Badge62() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-200</p>
    </div>
  );
}

function Badge63() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-300</p>
    </div>
  );
}

function Badge64() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-400</p>
    </div>
  );
}

function Badge65() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-500</p>
    </div>
  );
}

function Badge66() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-600</p>
    </div>
  );
}

function Badge67() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-700</p>
    </div>
  );
}

function Badge68() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-800</p>
    </div>
  );
}

function Badge69() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-900</p>
    </div>
  );
}

function Badge70() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-50</p>
    </div>
  );
}

function Badge71() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-50</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge72() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-100</p>
    </div>
  );
}

function Badge73() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-100</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge74() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-200</p>
    </div>
  );
}

function Badge75() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-200</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge76() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-300</p>
    </div>
  );
}

function Badge77() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge78() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-400</p>
    </div>
  );
}

function Badge79() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-400</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge80() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-500</p>
    </div>
  );
}

function Badge81() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-500</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge82() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-600</p>
    </div>
  );
}

function Badge83() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-600</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge84() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-700</p>
    </div>
  );
}

function Badge85() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-700</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge86() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-800</p>
    </div>
  );
}

function Badge87() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-800</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge88() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-900</p>
    </div>
  );
}

function Badge89() {
  return (
    <div className="bg-[#fafafa] content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-brand-900</p>
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#717680] text-[16px] whitespace-nowrap">_alt</p>
    </div>
  );
}

function Badge90() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-error-50</p>
    </div>
  );
}

function Badge91() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-error-100</p>
    </div>
  );
}

function Badge92() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-error-200</p>
    </div>
  );
}

function Badge93() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-error-300</p>
    </div>
  );
}

function Badge94() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-error-400</p>
    </div>
  );
}

function Badge95() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-error-500</p>
    </div>
  );
}

function Badge96() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-error-600</p>
    </div>
  );
}

function Badge97() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-error-700</p>
    </div>
  );
}

function Badge98() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-warning-50</p>
    </div>
  );
}

function Badge99() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-warning-100</p>
    </div>
  );
}

function Badge100() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-warning-200</p>
    </div>
  );
}

function Badge101() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-warning-300</p>
    </div>
  );
}

function Badge102() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-warning-400</p>
    </div>
  );
}

function Badge103() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-warning-500</p>
    </div>
  );
}

function Badge104() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-warning-600</p>
    </div>
  );
}

function Badge105() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-warning-700</p>
    </div>
  );
}

function Badge106() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-success-50</p>
    </div>
  );
}

function Badge107() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-success-100</p>
    </div>
  );
}

function Badge108() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-success-200</p>
    </div>
  );
}

function Badge109() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-success-300</p>
    </div>
  );
}

function Badge110() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-success-400</p>
    </div>
  );
}

function Badge111() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-success-500</p>
    </div>
  );
}

function Badge112() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-success-600</p>
    </div>
  );
}

function Badge113() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-success-700</p>
    </div>
  );
}

function Badge114() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-blue-50</p>
    </div>
  );
}

function Badge115() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-blue-100</p>
    </div>
  );
}

function Badge116() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-blue-200</p>
    </div>
  );
}

function Badge117() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-blue-300</p>
    </div>
  );
}

function Badge118() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-blue-400</p>
    </div>
  );
}

function Badge119() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-blue-500</p>
    </div>
  );
}

function Badge120() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-blue-600</p>
    </div>
  );
}

function Badge121() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-gray-blue-700</p>
    </div>
  );
}

function Badge122() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-light-50</p>
    </div>
  );
}

function Badge123() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-light-100</p>
    </div>
  );
}

function Badge124() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-light-200</p>
    </div>
  );
}

function Badge125() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-light-300</p>
    </div>
  );
}

function Badge126() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-light-400</p>
    </div>
  );
}

function Badge127() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-light-500</p>
    </div>
  );
}

function Badge128() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-light-600</p>
    </div>
  );
}

function Badge129() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-light-700</p>
    </div>
  );
}

function Column3() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="h-[34px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative size-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Name
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge60 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge61 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge62 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge63 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge64 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge65 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge66 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge67 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge68 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge69 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge70 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge71 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge72 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge73 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge74 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge75 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge76 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge77 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge78 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge79 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge80 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge81 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge82 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge83 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge84 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge85 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge86 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge87 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge88 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] px-[64px] py-[12px] relative w-full">
            <Badge89 />
            <div className="absolute h-[64px] left-[32px] top-[-24px] w-[32px]" data-name="Connector">
              <div className="absolute inset-[0_0_-0.78%_-1.56%]">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32.5 64.5">
                  <path d={svgPaths.p1cca8b80} id="Connector" stroke="var(--stroke-0, #D5D7DA)" strokeLinejoin="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge90 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge91 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge92 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge93 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge94 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge95 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge96 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge97 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge98 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge99 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge100 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge101 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge102 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge103 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge104 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge105 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge106 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge107 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge108 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge109 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge110 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge111 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge112 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge113 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge114 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge115 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge116 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge117 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge118 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge119 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge120 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge121 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge122 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge123 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge124 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge125 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge126 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge127 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge128 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge129 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color40() {
  return <div className="bg-[#fafafa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch40() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color40 />
    </div>
  );
}

function Badge130() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch40 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-50</p>
    </div>
  );
}

function Color41() {
  return <div className="bg-[#f5f5f5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch41() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color41 />
    </div>
  );
}

function Badge131() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch41 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-100</p>
    </div>
  );
}

function Color42() {
  return <div className="bg-[#e9eaeb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch42() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color42 />
    </div>
  );
}

function Badge132() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch42 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color43() {
  return <div className="bg-[#d5d7da] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch43() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color43 />
    </div>
  );
}

function Badge133() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch43 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color44() {
  return <div className="bg-[#a4a7ae] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch44() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color44 />
    </div>
  );
}

function Badge134() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch44 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color45() {
  return <div className="bg-[#717680] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch45() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color45 />
    </div>
  );
}

function Badge135() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch45 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color46() {
  return <div className="bg-[#535862] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch46() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color46 />
    </div>
  );
}

function Badge136() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch46 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color47() {
  return <div className="bg-[#414651] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch47() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color47 />
    </div>
  );
}

function Badge137() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch47 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color48() {
  return <div className="bg-[#252b37] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch48() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color48 />
    </div>
  );
}

function Badge138() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch48 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color49() {
  return <div className="bg-[#181d27] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch49() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color49 />
    </div>
  );
}

function Badge139() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch49 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color50() {
  return <div className="bg-[#f0fdf9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch50() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color50 />
    </div>
  );
}

function Badge140() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch50 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-50</p>
    </div>
  );
}

function Color51() {
  return <div className="bg-[#f0fdf9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch51() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color51 />
    </div>
  );
}

function Badge141() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch51 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-50</p>
    </div>
  );
}

function Color52() {
  return <div className="bg-[#ccfbef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch52() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color52 />
    </div>
  );
}

function Badge142() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch52 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-100</p>
    </div>
  );
}

function Color53() {
  return <div className="bg-[#ccfbef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch53() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color53 />
    </div>
  );
}

function Badge143() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch53 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-100</p>
    </div>
  );
}

function Color54() {
  return <div className="bg-[#99f6e0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch54() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color54 />
    </div>
  );
}

function Badge144() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch54 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-200</p>
    </div>
  );
}

function Color55() {
  return <div className="bg-[#99f6e0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch55() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color55 />
    </div>
  );
}

function Badge145() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch55 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-200</p>
    </div>
  );
}

function Color56() {
  return <div className="bg-[#5fe9d0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch56() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color56 />
    </div>
  );
}

function Badge146() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch56 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-300</p>
    </div>
  );
}

function Color57() {
  return <div className="bg-[#5fe9d0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch57() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color57 />
    </div>
  );
}

function Badge147() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch57 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-300</p>
    </div>
  );
}

function Color58() {
  return <div className="bg-[#2ed3b7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch58() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color58 />
    </div>
  );
}

function Badge148() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch58 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-400</p>
    </div>
  );
}

function Color59() {
  return <div className="bg-[#2ed3b7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch59() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color59 />
    </div>
  );
}

function Badge149() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch59 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-400</p>
    </div>
  );
}

function Color60() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch60() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color60 />
    </div>
  );
}

function Badge150() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch60 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color61() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch61() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color61 />
    </div>
  );
}

function Badge151() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch61 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color62() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch62() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color62 />
    </div>
  );
}

function Badge152() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch62 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color63() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch63() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color63 />
    </div>
  );
}

function Badge153() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch63 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color64() {
  return <div className="bg-[#107569] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch64() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color64 />
    </div>
  );
}

function Badge154() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch64 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-700</p>
    </div>
  );
}

function Color65() {
  return <div className="bg-[#107569] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch65() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color65 />
    </div>
  );
}

function Badge155() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch65 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-700</p>
    </div>
  );
}

function Color66() {
  return <div className="bg-[#125d56] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch66() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color66 />
    </div>
  );
}

function Badge156() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch66 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-800</p>
    </div>
  );
}

function Color67() {
  return <div className="bg-[#125d56] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch67() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color67 />
    </div>
  );
}

function Badge157() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch67 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-800</p>
    </div>
  );
}

function Color68() {
  return <div className="bg-[#134e48] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch68() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color68 />
    </div>
  );
}

function Badge158() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch68 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-900</p>
    </div>
  );
}

function Color69() {
  return <div className="bg-[#134e48] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch69() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color69 />
    </div>
  );
}

function Badge159() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch69 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">brand-900</p>
    </div>
  );
}

function Color70() {
  return <div className="bg-[#fef3f2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch70() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color70 />
    </div>
  );
}

function Badge160() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch70 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-50</p>
    </div>
  );
}

function Color71() {
  return <div className="bg-[#fee4e2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch71() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color71 />
    </div>
  );
}

function Badge161() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch71 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-100</p>
    </div>
  );
}

function Color72() {
  return <div className="bg-[#fecdca] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch72() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color72 />
    </div>
  );
}

function Badge162() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch72 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-200</p>
    </div>
  );
}

function Color73() {
  return <div className="bg-[#fda29b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch73() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color73 />
    </div>
  );
}

function Badge163() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch73 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-300</p>
    </div>
  );
}

function Color74() {
  return <div className="bg-[#f97066] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch74() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color74 />
    </div>
  );
}

function Badge164() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch74 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-400</p>
    </div>
  );
}

function Color75() {
  return <div className="bg-[#f04438] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch75() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color75 />
    </div>
  );
}

function Badge165() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch75 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-500</p>
    </div>
  );
}

function Color76() {
  return <div className="bg-[#d92d20] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch76() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color76 />
    </div>
  );
}

function Badge166() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch76 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-600</p>
    </div>
  );
}

function Color77() {
  return <div className="bg-[#b42318] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch77() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color77 />
    </div>
  );
}

function Badge167() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch77 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">error-700</p>
    </div>
  );
}

function Color78() {
  return <div className="bg-[#fffaeb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch78() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color78 />
    </div>
  );
}

function Badge168() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch78 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-50</p>
    </div>
  );
}

function Color79() {
  return <div className="bg-[#fef0c7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch79() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color79 />
    </div>
  );
}

function Badge169() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch79 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-100</p>
    </div>
  );
}

function Color80() {
  return <div className="bg-[#fedf89] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch80() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color80 />
    </div>
  );
}

function Badge170() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch80 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-200</p>
    </div>
  );
}

function Color81() {
  return <div className="bg-[#fec84b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch81() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color81 />
    </div>
  );
}

function Badge171() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch81 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-300</p>
    </div>
  );
}

function Color82() {
  return <div className="bg-[#fdb022] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch82() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color82 />
    </div>
  );
}

function Badge172() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch82 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-400</p>
    </div>
  );
}

function Color83() {
  return <div className="bg-[#f79009] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch83() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color83 />
    </div>
  );
}

function Badge173() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch83 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-500</p>
    </div>
  );
}

function Color84() {
  return <div className="bg-[#dc6803] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch84() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color84 />
    </div>
  );
}

function Badge174() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch84 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-600</p>
    </div>
  );
}

function Color85() {
  return <div className="bg-[#b54708] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch85() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color85 />
    </div>
  );
}

function Badge175() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch85 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">warning-700</p>
    </div>
  );
}

function Color86() {
  return <div className="bg-[#ecfdf3] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch86() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color86 />
    </div>
  );
}

function Badge176() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch86 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-50</p>
    </div>
  );
}

function Color87() {
  return <div className="bg-[#dcfae6] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch87() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color87 />
    </div>
  );
}

function Badge177() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch87 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-100</p>
    </div>
  );
}

function Color88() {
  return <div className="bg-[#abefc6] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch88() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color88 />
    </div>
  );
}

function Badge178() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch88 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-200</p>
    </div>
  );
}

function Color89() {
  return <div className="bg-[#75e0a7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch89() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color89 />
    </div>
  );
}

function Badge179() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch89 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-300</p>
    </div>
  );
}

function Color90() {
  return <div className="bg-[#47cd89] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch90() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color90 />
    </div>
  );
}

function Badge180() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch90 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-400</p>
    </div>
  );
}

function Color91() {
  return <div className="bg-[#17b26a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch91() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color91 />
    </div>
  );
}

function Badge181() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch91 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-500</p>
    </div>
  );
}

function Color92() {
  return <div className="bg-[#079455] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch92() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color92 />
    </div>
  );
}

function Badge182() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch92 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-600</p>
    </div>
  );
}

function Color93() {
  return <div className="bg-[#067647] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch93() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color93 />
    </div>
  );
}

function Badge183() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch93 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">success-700</p>
    </div>
  );
}

function Color94() {
  return <div className="bg-[#f8f9fc] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch94() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color94 />
    </div>
  );
}

function Badge184() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch94 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-blue-50</p>
    </div>
  );
}

function Color95() {
  return <div className="bg-[#eaecf5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch95() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color95 />
    </div>
  );
}

function Badge185() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch95 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-blue-100</p>
    </div>
  );
}

function Color96() {
  return <div className="bg-[#d5d9eb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch96() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color96 />
    </div>
  );
}

function Badge186() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch96 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-blue-200</p>
    </div>
  );
}

function Color97() {
  return <div className="bg-[#b3b8db] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch97() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color97 />
    </div>
  );
}

function Badge187() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch97 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-blue-300</p>
    </div>
  );
}

function Color98() {
  return <div className="bg-[#717bbc] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch98() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color98 />
    </div>
  );
}

function Badge188() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch98 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-blue-400</p>
    </div>
  );
}

function Color99() {
  return <div className="bg-[#4e5ba6] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch99() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color99 />
    </div>
  );
}

function Badge189() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch99 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-blue-500</p>
    </div>
  );
}

function Color100() {
  return <div className="bg-[#3e4784] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch100() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color100 />
    </div>
  );
}

function Badge190() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch100 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-blue-600</p>
    </div>
  );
}

function Color101() {
  return <div className="bg-[#363f72] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch101() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color101 />
    </div>
  );
}

function Badge191() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch101 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">gray-blue-700</p>
    </div>
  );
}

function Color102() {
  return <div className="bg-[#f0f9ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch102() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color102 />
    </div>
  );
}

function Badge192() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch102 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-light-50</p>
    </div>
  );
}

function Color103() {
  return <div className="bg-[#e0f2fe] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch103() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color103 />
    </div>
  );
}

function Badge193() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch103 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-light-100</p>
    </div>
  );
}

function Color104() {
  return <div className="bg-[#b9e6fe] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch104() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color104 />
    </div>
  );
}

function Badge194() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch104 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-light-200</p>
    </div>
  );
}

function Color105() {
  return <div className="bg-[#7cd4fd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch105() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color105 />
    </div>
  );
}

function Badge195() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch105 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-light-300</p>
    </div>
  );
}

function Color106() {
  return <div className="bg-[#36bffa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch106() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color106 />
    </div>
  );
}

function Badge196() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch106 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-light-400</p>
    </div>
  );
}

function Color107() {
  return <div className="bg-[#0ba5ec] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch107() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color107 />
    </div>
  );
}

function Badge197() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch107 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-light-500</p>
    </div>
  );
}

function Color108() {
  return <div className="bg-[#0086c9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch108() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color108 />
    </div>
  );
}

function Badge198() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch108 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-light-600</p>
    </div>
  );
}

function Color109() {
  return <div className="bg-[#026aa2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch109() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color109 />
    </div>
  );
}

function Badge199() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch109 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-light-700</p>
    </div>
  );
}

function Column4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Light mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge130 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge131 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge132 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge133 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge134 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge135 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge136 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge137 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge138 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge139 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge140 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge141 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge142 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge143 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge144 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge145 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge146 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge147 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge148 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge149 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge150 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge151 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge152 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge153 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge154 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge155 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge156 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge157 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge158 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge159 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge160 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge161 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge162 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge163 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge164 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge165 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge166 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge167 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge168 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge169 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge170 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge171 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge172 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge173 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge174 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge175 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge176 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge177 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge178 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge179 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge180 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge181 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge182 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge183 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge184 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge185 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge186 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge187 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge188 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge189 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge190 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge191 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge192 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge193 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge194 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge195 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge196 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge197 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge198 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge199 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color110() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch110() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color110 />
    </div>
  );
}

function Badge200() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch110 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color111() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch111() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color111 />
    </div>
  );
}

function Badge201() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch111 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color112() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch112() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color112 />
    </div>
  );
}

function Badge202() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch112 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color113() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch113() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color113 />
    </div>
  );
}

function Badge203() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch113 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color114() {
  return <div className="bg-[#61656c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch114() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color114 />
    </div>
  );
}

function Badge204() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch114 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color115() {
  return <div className="bg-[#85888e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch115() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color115 />
    </div>
  );
}

function Badge205() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch115 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color116() {
  return <div className="bg-[#94979c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch116() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color116 />
    </div>
  );
}

function Badge206() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch116 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color117() {
  return <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch117() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color117 />
    </div>
  );
}

function Badge207() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch117 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color118() {
  return <div className="bg-[#ececed] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch118() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color118 />
    </div>
  );
}

function Badge208() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch118 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color119() {
  return <div className="bg-[#f0f0f1] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch119() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color119 />
    </div>
  );
}

function Badge209() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch119 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-100</p>
    </div>
  );
}

function Color120() {
  return <div className="bg-[#0a2926] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch120() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color120 />
    </div>
  );
}

function Badge210() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch120 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-950</p>
    </div>
  );
}

function Color121() {
  return <div className="bg-[#13161b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch121() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color121 />
    </div>
  );
}

function Badge211() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch121 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-900</p>
    </div>
  );
}

function Color122() {
  return <div className="bg-[#134e48] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch122() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color122 />
    </div>
  );
}

function Badge212() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch122 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-900</p>
    </div>
  );
}

function Color123() {
  return <div className="bg-[#22262f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch123() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color123 />
    </div>
  );
}

function Badge213() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch123 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-800</p>
    </div>
  );
}

function Color124() {
  return <div className="bg-[#125d56] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch124() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color124 />
    </div>
  );
}

function Badge214() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch124 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-800</p>
    </div>
  );
}

function Color125() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch125() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color125 />
    </div>
  );
}

function Badge215() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch125 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color126() {
  return <div className="bg-[#107569] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch126() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color126 />
    </div>
  );
}

function Badge216() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch126 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-700</p>
    </div>
  );
}

function Color127() {
  return <div className="bg-[#373a41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch127() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color127 />
    </div>
  );
}

function Badge217() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch127 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-700</p>
    </div>
  );
}

function Color128() {
  return <div className="bg-[#0e9384] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch128() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color128 />
    </div>
  );
}

function Badge218() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch128 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-600</p>
    </div>
  );
}

function Color129() {
  return <div className="bg-[#61656c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch129() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color129 />
    </div>
  );
}

function Badge219() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch129 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-600</p>
    </div>
  );
}

function Color130() {
  return <div className="bg-[#15b79e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch130() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color130 />
    </div>
  );
}

function Badge220() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch130 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-500</p>
    </div>
  );
}

function Color131() {
  return <div className="bg-[#85888e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch131() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color131 />
    </div>
  );
}

function Badge221() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch131 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-500</p>
    </div>
  );
}

function Color132() {
  return <div className="bg-[#2ed3b7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch132() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color132 />
    </div>
  );
}

function Badge222() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch132 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-400</p>
    </div>
  );
}

function Color133() {
  return <div className="bg-[#94979c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch133() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color133 />
    </div>
  );
}

function Badge223() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch133 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-400</p>
    </div>
  );
}

function Color134() {
  return <div className="bg-[#5fe9d0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch134() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color134 />
    </div>
  );
}

function Badge224() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch134 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-300</p>
    </div>
  );
}

function Color135() {
  return <div className="bg-[#cecfd2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch135() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color135 />
    </div>
  );
}

function Badge225() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch135 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-300</p>
    </div>
  );
}

function Color136() {
  return <div className="bg-[#99f6e0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch136() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color136 />
    </div>
  );
}

function Badge226() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch136 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-200</p>
    </div>
  );
}

function Color137() {
  return <div className="bg-[#ececed] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch137() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color137 />
    </div>
  );
}

function Badge227() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch137 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-200</p>
    </div>
  );
}

function Color138() {
  return <div className="bg-[#ccfbef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch138() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color138 />
    </div>
  );
}

function Badge228() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch138 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">brand-100</p>
    </div>
  );
}

function Color139() {
  return <div className="bg-[#f0f0f1] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch139() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color139 />
    </div>
  );
}

function Badge229() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch139 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-100</p>
    </div>
  );
}

function Color140() {
  return <div className="bg-[#55160c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch140() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color140 />
    </div>
  );
}

function Badge230() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch140 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-950</p>
    </div>
  );
}

function Color141() {
  return <div className="bg-[#7a271a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch141() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color141 />
    </div>
  );
}

function Badge231() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch141 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-900</p>
    </div>
  );
}

function Color142() {
  return <div className="bg-[#912018] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch142() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color142 />
    </div>
  );
}

function Badge232() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch142 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-800</p>
    </div>
  );
}

function Color143() {
  return <div className="bg-[#b42318] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch143() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color143 />
    </div>
  );
}

function Badge233() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch143 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-700</p>
    </div>
  );
}

function Color144() {
  return <div className="bg-[#d92d20] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch144() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color144 />
    </div>
  );
}

function Badge234() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch144 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-600</p>
    </div>
  );
}

function Color145() {
  return <div className="bg-[#f04438] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch145() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color145 />
    </div>
  );
}

function Badge235() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch145 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-500</p>
    </div>
  );
}

function Color146() {
  return <div className="bg-[#f97066] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch146() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color146 />
    </div>
  );
}

function Badge236() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch146 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-400</p>
    </div>
  );
}

function Color147() {
  return <div className="bg-[#fda29b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch147() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color147 />
    </div>
  );
}

function Badge237() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch147 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">error-300</p>
    </div>
  );
}

function Color148() {
  return <div className="bg-[#4e1d09] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch148() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color148 />
    </div>
  );
}

function Badge238() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch148 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-950</p>
    </div>
  );
}

function Color149() {
  return <div className="bg-[#7a2e0e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch149() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color149 />
    </div>
  );
}

function Badge239() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch149 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-900</p>
    </div>
  );
}

function Color150() {
  return <div className="bg-[#93370d] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch150() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color150 />
    </div>
  );
}

function Badge240() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch150 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-800</p>
    </div>
  );
}

function Color151() {
  return <div className="bg-[#b54708] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch151() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color151 />
    </div>
  );
}

function Badge241() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch151 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-700</p>
    </div>
  );
}

function Color152() {
  return <div className="bg-[#dc6803] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch152() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color152 />
    </div>
  );
}

function Badge242() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch152 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-600</p>
    </div>
  );
}

function Color153() {
  return <div className="bg-[#f79009] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch153() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color153 />
    </div>
  );
}

function Badge243() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch153 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-500</p>
    </div>
  );
}

function Color154() {
  return <div className="bg-[#fdb022] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch154() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color154 />
    </div>
  );
}

function Badge244() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch154 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-400</p>
    </div>
  );
}

function Color155() {
  return <div className="bg-[#fec84b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch155() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color155 />
    </div>
  );
}

function Badge245() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch155 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">warning-300</p>
    </div>
  );
}

function Color156() {
  return <div className="bg-[#053321] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch156() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color156 />
    </div>
  );
}

function Badge246() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch156 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-950</p>
    </div>
  );
}

function Color157() {
  return <div className="bg-[#074d31] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch157() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color157 />
    </div>
  );
}

function Badge247() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch157 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-900</p>
    </div>
  );
}

function Color158() {
  return <div className="bg-[#085d3a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch158() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color158 />
    </div>
  );
}

function Badge248() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch158 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-800</p>
    </div>
  );
}

function Color159() {
  return <div className="bg-[#067647] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch159() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color159 />
    </div>
  );
}

function Badge249() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch159 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-700</p>
    </div>
  );
}

function Color160() {
  return <div className="bg-[#079455] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch160() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color160 />
    </div>
  );
}

function Badge250() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch160 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-600</p>
    </div>
  );
}

function Color161() {
  return <div className="bg-[#17b26a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch161() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color161 />
    </div>
  );
}

function Badge251() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch161 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-500</p>
    </div>
  );
}

function Color162() {
  return <div className="bg-[#47cd89] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch162() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color162 />
    </div>
  );
}

function Badge252() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch162 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-400</p>
    </div>
  );
}

function Color163() {
  return <div className="bg-[#75e0a7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch163() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color163 />
    </div>
  );
}

function Badge253() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch163 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">success-300</p>
    </div>
  );
}

function Color164() {
  return <div className="bg-[#0d0f1c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch164() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color164 />
    </div>
  );
}

function Badge254() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch164 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-blue-950</p>
    </div>
  );
}

function Color165() {
  return <div className="bg-[#101323] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch165() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color165 />
    </div>
  );
}

function Badge255() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch165 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-blue-900</p>
    </div>
  );
}

function Color166() {
  return <div className="bg-[#293056] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch166() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color166 />
    </div>
  );
}

function Badge256() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch166 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-blue-800</p>
    </div>
  );
}

function Color167() {
  return <div className="bg-[#363f72] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch167() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color167 />
    </div>
  );
}

function Badge257() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch167 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-blue-700</p>
    </div>
  );
}

function Color168() {
  return <div className="bg-[#3e4784] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch168() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color168 />
    </div>
  );
}

function Badge258() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch168 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-blue-600</p>
    </div>
  );
}

function Color169() {
  return <div className="bg-[#4e5ba6] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch169() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color169 />
    </div>
  );
}

function Badge259() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch169 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-blue-500</p>
    </div>
  );
}

function Color170() {
  return <div className="bg-[#717bbc] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch170() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color170 />
    </div>
  );
}

function Badge260() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch170 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-blue-400</p>
    </div>
  );
}

function Color171() {
  return <div className="bg-[#b3b8db] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch171() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color171 />
    </div>
  );
}

function Badge261() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch171 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">gray-blue-300</p>
    </div>
  );
}

function Color172() {
  return <div className="bg-[#062c41] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch172() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color172 />
    </div>
  );
}

function Badge262() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch172 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-light-950</p>
    </div>
  );
}

function Color173() {
  return <div className="bg-[#0b4a6f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch173() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color173 />
    </div>
  );
}

function Badge263() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch173 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-light-900</p>
    </div>
  );
}

function Color174() {
  return <div className="bg-[#065986] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch174() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color174 />
    </div>
  );
}

function Badge264() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch174 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-light-800</p>
    </div>
  );
}

function Color175() {
  return <div className="bg-[#026aa2] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch175() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color175 />
    </div>
  );
}

function Badge265() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch175 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-light-700</p>
    </div>
  );
}

function Color176() {
  return <div className="bg-[#0086c9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch176() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color176 />
    </div>
  );
}

function Badge266() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch176 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-light-600</p>
    </div>
  );
}

function Color177() {
  return <div className="bg-[#0ba5ec] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch177() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color177 />
    </div>
  );
}

function Badge267() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch177 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-light-500</p>
    </div>
  );
}

function Color178() {
  return <div className="bg-[#36bffa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch178() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color178 />
    </div>
  );
}

function Badge268() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch178 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-light-400</p>
    </div>
  );
}

function Color179() {
  return <div className="bg-[#7cd4fd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch179() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color179 />
    </div>
  );
}

function Badge269() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch179 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-light-300</p>
    </div>
  );
}

function Column5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dark mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge200 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge201 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge202 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge203 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge204 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge205 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge206 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge207 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge208 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge209 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge210 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge211 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge212 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge213 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge214 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge215 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge216 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge217 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge218 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge219 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge220 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge221 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge222 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge223 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge224 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge225 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge226 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge227 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge228 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge229 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge230 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge231 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge232 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge233 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge234 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge235 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge236 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge237 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge238 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge239 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge240 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge241 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge242 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge243 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge244 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge245 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge246 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge247 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge248 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge249 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge250 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge251 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge252 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge253 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge254 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge255 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge256 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge257 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge258 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge259 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge260 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge261 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge262 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge263 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge264 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge265 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge266 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge267 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge268 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge269 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content5() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Content">
      <Column3 />
      <Column4 />
      <Column5 />
    </div>
  );
}

function Badge270() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-50</p>
    </div>
  );
}

function Badge271() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-100</p>
    </div>
  );
}

function Badge272() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-200</p>
    </div>
  );
}

function Badge273() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-300</p>
    </div>
  );
}

function Badge274() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-400</p>
    </div>
  );
}

function Badge275() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-500</p>
    </div>
  );
}

function Badge276() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-600</p>
    </div>
  );
}

function Badge277() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-700</p>
    </div>
  );
}

function Badge278() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-dark-50</p>
    </div>
  );
}

function Badge279() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-dark-100</p>
    </div>
  );
}

function Badge280() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-dark-200</p>
    </div>
  );
}

function Badge281() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-dark-300</p>
    </div>
  );
}

function Badge282() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-dark-400</p>
    </div>
  );
}

function Badge283() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-dark-500</p>
    </div>
  );
}

function Badge284() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-dark-600</p>
    </div>
  );
}

function Badge285() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-blue-dark-700</p>
    </div>
  );
}

function Badge286() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-indigo-50</p>
    </div>
  );
}

function Badge287() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-indigo-100</p>
    </div>
  );
}

function Badge288() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-indigo-200</p>
    </div>
  );
}

function Badge289() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-indigo-300</p>
    </div>
  );
}

function Badge290() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-indigo-400</p>
    </div>
  );
}

function Badge291() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-indigo-500</p>
    </div>
  );
}

function Badge292() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-indigo-600</p>
    </div>
  );
}

function Badge293() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-indigo-700</p>
    </div>
  );
}

function Badge294() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-purple-50</p>
    </div>
  );
}

function Badge295() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-purple-100</p>
    </div>
  );
}

function Badge296() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-purple-200</p>
    </div>
  );
}

function Badge297() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-purple-300</p>
    </div>
  );
}

function Badge298() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-purple-400</p>
    </div>
  );
}

function Badge299() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-purple-500</p>
    </div>
  );
}

function Badge300() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-purple-600</p>
    </div>
  );
}

function Badge301() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-purple-700</p>
    </div>
  );
}

function Badge302() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-fuchsia-50</p>
    </div>
  );
}

function Badge303() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-fuchsia-100</p>
    </div>
  );
}

function Badge304() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-fuchsia-200</p>
    </div>
  );
}

function Badge305() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-fuchsia-300</p>
    </div>
  );
}

function Badge306() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-fuchsia-400</p>
    </div>
  );
}

function Badge307() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-fuchsia-500</p>
    </div>
  );
}

function Badge308() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-fuchsia-600</p>
    </div>
  );
}

function Badge309() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-fuchsia-700</p>
    </div>
  );
}

function Badge310() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-pink-50</p>
    </div>
  );
}

function Badge311() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-pink-100</p>
    </div>
  );
}

function Badge312() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-pink-200</p>
    </div>
  );
}

function Badge313() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-pink-300</p>
    </div>
  );
}

function Badge314() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-pink-400</p>
    </div>
  );
}

function Badge315() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-pink-500</p>
    </div>
  );
}

function Badge316() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-pink-600</p>
    </div>
  );
}

function Badge317() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-pink-700</p>
    </div>
  );
}

function Badge318() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-dark-50</p>
    </div>
  );
}

function Badge319() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-dark-100</p>
    </div>
  );
}

function Badge320() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-dark-200</p>
    </div>
  );
}

function Badge321() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-dark-300</p>
    </div>
  );
}

function Badge322() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-dark-400</p>
    </div>
  );
}

function Badge323() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-dark-500</p>
    </div>
  );
}

function Badge324() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-dark-600</p>
    </div>
  );
}

function Badge325() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-dark-700</p>
    </div>
  );
}

function Badge326() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-50</p>
    </div>
  );
}

function Badge327() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-100</p>
    </div>
  );
}

function Badge328() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-200</p>
    </div>
  );
}

function Badge329() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-300</p>
    </div>
  );
}

function Badge330() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-400</p>
    </div>
  );
}

function Badge331() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-500</p>
    </div>
  );
}

function Badge332() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-600</p>
    </div>
  );
}

function Badge333() {
  return (
    <div className="bg-white content-stretch flex items-center px-[12px] py-[4px] relative rounded-[6px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">utility-orange-700</p>
    </div>
  );
}

function Column6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[112px]" data-name="Column">
      <div className="h-[34px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative size-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Name
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge270 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge271 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge272 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge273 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge274 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge275 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge276 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge277 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge278 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge279 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge280 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge281 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge282 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge283 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge284 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge285 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge286 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge287 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge288 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge289 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge290 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge291 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge292 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge293 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge294 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge295 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge296 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge297 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge298 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge299 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge300 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge301 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge302 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge303 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge304 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge305 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge306 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge307 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge308 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge309 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge310 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge311 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge312 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge313 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge314 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge315 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge316 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge317 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge318 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge319 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge320 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge321 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge322 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge323 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge324 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge325 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge326 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge327 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge328 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge329 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge330 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge331 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge332 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge333 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color180() {
  return <div className="bg-[#eff8ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch180() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color180 />
    </div>
  );
}

function Badge334() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch180 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-50</p>
    </div>
  );
}

function Color181() {
  return <div className="bg-[#d1e9ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch181() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color181 />
    </div>
  );
}

function Badge335() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch181 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-100</p>
    </div>
  );
}

function Color182() {
  return <div className="bg-[#b2ddff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch182() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color182 />
    </div>
  );
}

function Badge336() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch182 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-200</p>
    </div>
  );
}

function Color183() {
  return <div className="bg-[#84caff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch183() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color183 />
    </div>
  );
}

function Badge337() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch183 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-300</p>
    </div>
  );
}

function Color184() {
  return <div className="bg-[#53b1fd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch184() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color184 />
    </div>
  );
}

function Badge338() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch184 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-400</p>
    </div>
  );
}

function Color185() {
  return <div className="bg-[#2e90fa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch185() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color185 />
    </div>
  );
}

function Badge339() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch185 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-500</p>
    </div>
  );
}

function Color186() {
  return <div className="bg-[#1570ef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch186() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color186 />
    </div>
  );
}

function Badge340() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch186 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-600</p>
    </div>
  );
}

function Color187() {
  return <div className="bg-[#175cd3] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch187() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color187 />
    </div>
  );
}

function Badge341() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch187 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-700</p>
    </div>
  );
}

function Color188() {
  return <div className="bg-[#eff4ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch188() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color188 />
    </div>
  );
}

function Badge342() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch188 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-dark-50</p>
    </div>
  );
}

function Color189() {
  return <div className="bg-[#d1e0ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch189() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color189 />
    </div>
  );
}

function Badge343() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch189 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-dark-100</p>
    </div>
  );
}

function Color190() {
  return <div className="bg-[#b2ccff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch190() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color190 />
    </div>
  );
}

function Badge344() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch190 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-dark-200</p>
    </div>
  );
}

function Color191() {
  return <div className="bg-[#84adff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch191() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color191 />
    </div>
  );
}

function Badge345() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch191 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-dark-300</p>
    </div>
  );
}

function Color192() {
  return <div className="bg-[#528bff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch192() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color192 />
    </div>
  );
}

function Badge346() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch192 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-dark-400</p>
    </div>
  );
}

function Color193() {
  return <div className="bg-[#2970ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch193() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color193 />
    </div>
  );
}

function Badge347() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch193 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-dark-500</p>
    </div>
  );
}

function Color194() {
  return <div className="bg-[#155eef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch194() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color194 />
    </div>
  );
}

function Badge348() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch194 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-dark-600</p>
    </div>
  );
}

function Color195() {
  return <div className="bg-[#004eeb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch195() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color195 />
    </div>
  );
}

function Badge349() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch195 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">blue-dark-700</p>
    </div>
  );
}

function Color196() {
  return <div className="bg-[#eef4ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch196() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color196 />
    </div>
  );
}

function Badge350() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch196 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">indigo-50</p>
    </div>
  );
}

function Color197() {
  return <div className="bg-[#e0eaff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch197() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color197 />
    </div>
  );
}

function Badge351() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch197 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">indigo-100</p>
    </div>
  );
}

function Color198() {
  return <div className="bg-[#c7d7fe] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch198() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color198 />
    </div>
  );
}

function Badge352() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch198 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">indigo-200</p>
    </div>
  );
}

function Color199() {
  return <div className="bg-[#a4bcfd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch199() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color199 />
    </div>
  );
}

function Badge353() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch199 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">indigo-300</p>
    </div>
  );
}

function Color200() {
  return <div className="bg-[#8098f9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch200() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color200 />
    </div>
  );
}

function Badge354() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch200 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">indigo-400</p>
    </div>
  );
}

function Color201() {
  return <div className="bg-[#6172f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch201() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color201 />
    </div>
  );
}

function Badge355() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch201 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">indigo-500</p>
    </div>
  );
}

function Color202() {
  return <div className="bg-[#444ce7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch202() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color202 />
    </div>
  );
}

function Badge356() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch202 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">indigo-600</p>
    </div>
  );
}

function Color203() {
  return <div className="bg-[#3538cd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch203() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color203 />
    </div>
  );
}

function Badge357() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch203 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">indigo-700</p>
    </div>
  );
}

function Color204() {
  return <div className="bg-[#f4f3ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch204() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color204 />
    </div>
  );
}

function Badge358() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch204 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">purple-50</p>
    </div>
  );
}

function Color205() {
  return <div className="bg-[#ebe9fe] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch205() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color205 />
    </div>
  );
}

function Badge359() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch205 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">purple-100</p>
    </div>
  );
}

function Color206() {
  return <div className="bg-[#d9d6fe] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch206() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color206 />
    </div>
  );
}

function Badge360() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch206 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">purple-200</p>
    </div>
  );
}

function Color207() {
  return <div className="bg-[#bdb4fe] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch207() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color207 />
    </div>
  );
}

function Badge361() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch207 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">purple-300</p>
    </div>
  );
}

function Color208() {
  return <div className="bg-[#9b8afb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch208() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color208 />
    </div>
  );
}

function Badge362() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch208 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">purple-400</p>
    </div>
  );
}

function Color209() {
  return <div className="bg-[#7a5af8] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch209() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color209 />
    </div>
  );
}

function Badge363() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch209 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">purple-500</p>
    </div>
  );
}

function Color210() {
  return <div className="bg-[#6938ef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch210() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color210 />
    </div>
  );
}

function Badge364() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch210 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">purple-600</p>
    </div>
  );
}

function Color211() {
  return <div className="bg-[#5925dc] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch211() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color211 />
    </div>
  );
}

function Badge365() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch211 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">purple-700</p>
    </div>
  );
}

function Color212() {
  return <div className="bg-[#fdf4ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch212() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color212 />
    </div>
  );
}

function Badge366() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch212 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fuchsia-50</p>
    </div>
  );
}

function Color213() {
  return <div className="bg-[#fbe8ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch213() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color213 />
    </div>
  );
}

function Badge367() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch213 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fuchsia-100</p>
    </div>
  );
}

function Color214() {
  return <div className="bg-[#f6d0fe] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch214() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color214 />
    </div>
  );
}

function Badge368() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch214 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fuchsia-200</p>
    </div>
  );
}

function Color215() {
  return <div className="bg-[#eeaafd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch215() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color215 />
    </div>
  );
}

function Badge369() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch215 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fuchsia-300</p>
    </div>
  );
}

function Color216() {
  return <div className="bg-[#e478fa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch216() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color216 />
    </div>
  );
}

function Badge370() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch216 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fuchsia-400</p>
    </div>
  );
}

function Color217() {
  return <div className="bg-[#d444f1] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch217() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color217 />
    </div>
  );
}

function Badge371() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch217 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fuchsia-500</p>
    </div>
  );
}

function Color218() {
  return <div className="bg-[#ba24d5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch218() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color218 />
    </div>
  );
}

function Badge372() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch218 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fuchsia-600</p>
    </div>
  );
}

function Color219() {
  return <div className="bg-[#9f1ab1] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch219() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color219 />
    </div>
  );
}

function Badge373() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch219 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">fuchsia-700</p>
    </div>
  );
}

function Color220() {
  return <div className="bg-[#fdf2fa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch220() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color220 />
    </div>
  );
}

function Badge374() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch220 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">pink-50</p>
    </div>
  );
}

function Color221() {
  return <div className="bg-[#fce7f6] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch221() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color221 />
    </div>
  );
}

function Badge375() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch221 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">pink-100</p>
    </div>
  );
}

function Color222() {
  return <div className="bg-[#fcceee] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch222() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color222 />
    </div>
  );
}

function Badge376() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch222 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">pink-200</p>
    </div>
  );
}

function Color223() {
  return <div className="bg-[#faa7e0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch223() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color223 />
    </div>
  );
}

function Badge377() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch223 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">pink-300</p>
    </div>
  );
}

function Color224() {
  return <div className="bg-[#f670c7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch224() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color224 />
    </div>
  );
}

function Badge378() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch224 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">pink-400</p>
    </div>
  );
}

function Color225() {
  return <div className="bg-[#ee46bc] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch225() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color225 />
    </div>
  );
}

function Badge379() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch225 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">pink-500</p>
    </div>
  );
}

function Color226() {
  return <div className="bg-[#dd2590] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch226() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color226 />
    </div>
  );
}

function Badge380() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch226 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">pink-600</p>
    </div>
  );
}

function Color227() {
  return <div className="bg-[#c11574] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch227() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color227 />
    </div>
  );
}

function Badge381() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch227 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">pink-700</p>
    </div>
  );
}

function Color228() {
  return <div className="bg-[#fff4ed] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch228() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color228 />
    </div>
  );
}

function Badge382() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch228 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-dark-50</p>
    </div>
  );
}

function Color229() {
  return <div className="bg-[#ffe6d5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch229() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color229 />
    </div>
  );
}

function Badge383() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch229 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-dark-100</p>
    </div>
  );
}

function Color230() {
  return <div className="bg-[#ffd6ae] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch230() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color230 />
    </div>
  );
}

function Badge384() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch230 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-dark-200</p>
    </div>
  );
}

function Color231() {
  return <div className="bg-[#ff9c66] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch231() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color231 />
    </div>
  );
}

function Badge385() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch231 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-dark-300</p>
    </div>
  );
}

function Color232() {
  return <div className="bg-[#ff692e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch232() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color232 />
    </div>
  );
}

function Badge386() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch232 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-dark-400</p>
    </div>
  );
}

function Color233() {
  return <div className="bg-[#ff4405] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch233() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color233 />
    </div>
  );
}

function Badge387() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch233 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-dark-500</p>
    </div>
  );
}

function Color234() {
  return <div className="bg-[#e62e05] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch234() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color234 />
    </div>
  );
}

function Badge388() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch234 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-dark-600</p>
    </div>
  );
}

function Color235() {
  return <div className="bg-[#bc1b06] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch235() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color235 />
    </div>
  );
}

function Badge389() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch235 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-dark-700</p>
    </div>
  );
}

function Color236() {
  return <div className="bg-[#fef6ee] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch236() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color236 />
    </div>
  );
}

function Badge390() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch236 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-50</p>
    </div>
  );
}

function Color237() {
  return <div className="bg-[#fdead7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch237() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color237 />
    </div>
  );
}

function Badge391() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch237 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-100</p>
    </div>
  );
}

function Color238() {
  return <div className="bg-[#f9dbaf] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch238() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color238 />
    </div>
  );
}

function Badge392() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch238 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-200</p>
    </div>
  );
}

function Color239() {
  return <div className="bg-[#f7b27a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch239() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color239 />
    </div>
  );
}

function Badge393() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch239 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-300</p>
    </div>
  );
}

function Color240() {
  return <div className="bg-[#f38744] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch240() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color240 />
    </div>
  );
}

function Badge394() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch240 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-400</p>
    </div>
  );
}

function Color241() {
  return <div className="bg-[#ef6820] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch241() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color241 />
    </div>
  );
}

function Badge395() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch241 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-500</p>
    </div>
  );
}

function Color242() {
  return <div className="bg-[#e04f16] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch242() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color242 />
    </div>
  );
}

function Badge396() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch242 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-600</p>
    </div>
  );
}

function Color243() {
  return <div className="bg-[#b93815] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch243() {
  return (
    <div className="bg-white content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color243 />
    </div>
  );
}

function Badge397() {
  return (
    <div className="bg-white content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch243 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#181d27] text-[16px] whitespace-nowrap">orange-700</p>
    </div>
  );
}

function Column7() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[128px]" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Light mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge334 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge335 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge336 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge337 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge338 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge339 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge340 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge341 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge342 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge343 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge344 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge345 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge346 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge347 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge348 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge349 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge350 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge351 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge352 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge353 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge354 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge355 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge356 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge357 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge358 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge359 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge360 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge361 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge362 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge363 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge364 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge365 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge366 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge367 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge368 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge369 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge370 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge371 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge372 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge373 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge374 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge375 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge376 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge377 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge378 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge379 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge380 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge381 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge382 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge383 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge384 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge385 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge386 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge387 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge388 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge389 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge390 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge391 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge392 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge393 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge394 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge395 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge396 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge397 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Color244() {
  return <div className="bg-[#102a56] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch244() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color244 />
    </div>
  );
}

function Badge398() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch244 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-950</p>
    </div>
  );
}

function Color245() {
  return <div className="bg-[#194185] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch245() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color245 />
    </div>
  );
}

function Badge399() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch245 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-900</p>
    </div>
  );
}

function Color246() {
  return <div className="bg-[#1849a9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch246() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color246 />
    </div>
  );
}

function Badge400() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch246 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-800</p>
    </div>
  );
}

function Color247() {
  return <div className="bg-[#175cd3] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch247() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color247 />
    </div>
  );
}

function Badge401() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch247 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-700</p>
    </div>
  );
}

function Color248() {
  return <div className="bg-[#1570ef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch248() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color248 />
    </div>
  );
}

function Badge402() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch248 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-600</p>
    </div>
  );
}

function Color249() {
  return <div className="bg-[#2e90fa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch249() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color249 />
    </div>
  );
}

function Badge403() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch249 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-500</p>
    </div>
  );
}

function Color250() {
  return <div className="bg-[#53b1fd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch250() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color250 />
    </div>
  );
}

function Badge404() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch250 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-400</p>
    </div>
  );
}

function Color251() {
  return <div className="bg-[#84caff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch251() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color251 />
    </div>
  );
}

function Badge405() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch251 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-300</p>
    </div>
  );
}

function Color252() {
  return <div className="bg-[#026] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch252() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color252 />
    </div>
  );
}

function Badge406() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch252 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-dark-950</p>
    </div>
  );
}

function Color253() {
  return <div className="bg-[#00359e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch253() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color253 />
    </div>
  );
}

function Badge407() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch253 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-dark-900</p>
    </div>
  );
}

function Color254() {
  return <div className="bg-[#0040c1] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch254() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color254 />
    </div>
  );
}

function Badge408() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch254 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-dark-800</p>
    </div>
  );
}

function Color255() {
  return <div className="bg-[#004eeb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch255() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color255 />
    </div>
  );
}

function Badge409() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch255 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-dark-700</p>
    </div>
  );
}

function Color256() {
  return <div className="bg-[#155eef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch256() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color256 />
    </div>
  );
}

function Badge410() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch256 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-dark-600</p>
    </div>
  );
}

function Color257() {
  return <div className="bg-[#2970ff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch257() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color257 />
    </div>
  );
}

function Badge411() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch257 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-dark-500</p>
    </div>
  );
}

function Color258() {
  return <div className="bg-[#528bff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch258() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color258 />
    </div>
  );
}

function Badge412() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch258 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-dark-400</p>
    </div>
  );
}

function Color259() {
  return <div className="bg-[#84adff] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch259() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color259 />
    </div>
  );
}

function Badge413() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch259 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">blue-dark-300</p>
    </div>
  );
}

function Color260() {
  return <div className="bg-[#1f235b] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch260() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color260 />
    </div>
  );
}

function Badge414() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch260 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">indigo-950</p>
    </div>
  );
}

function Color261() {
  return <div className="bg-[#2d3282] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch261() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color261 />
    </div>
  );
}

function Badge415() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch261 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">indigo-900</p>
    </div>
  );
}

function Color262() {
  return <div className="bg-[#2d31a6] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch262() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color262 />
    </div>
  );
}

function Badge416() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch262 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">indigo-800</p>
    </div>
  );
}

function Color263() {
  return <div className="bg-[#3538cd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch263() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color263 />
    </div>
  );
}

function Badge417() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch263 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">indigo-700</p>
    </div>
  );
}

function Color264() {
  return <div className="bg-[#444ce7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch264() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color264 />
    </div>
  );
}

function Badge418() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch264 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">indigo-600</p>
    </div>
  );
}

function Color265() {
  return <div className="bg-[#6172f3] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch265() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color265 />
    </div>
  );
}

function Badge419() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch265 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">indigo-500</p>
    </div>
  );
}

function Color266() {
  return <div className="bg-[#8098f9] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch266() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color266 />
    </div>
  );
}

function Badge420() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch266 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">indigo-400</p>
    </div>
  );
}

function Color267() {
  return <div className="bg-[#a4bcfd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch267() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color267 />
    </div>
  );
}

function Badge421() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch267 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">indigo-300</p>
    </div>
  );
}

function Color268() {
  return <div className="bg-[#27115f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch268() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color268 />
    </div>
  );
}

function Badge422() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch268 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">purple-950</p>
    </div>
  );
}

function Color269() {
  return <div className="bg-[#3e1c96] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch269() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color269 />
    </div>
  );
}

function Badge423() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch269 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">purple-900</p>
    </div>
  );
}

function Color270() {
  return <div className="bg-[#4a1fb8] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch270() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color270 />
    </div>
  );
}

function Badge424() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch270 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">purple-800</p>
    </div>
  );
}

function Color271() {
  return <div className="bg-[#5925dc] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch271() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color271 />
    </div>
  );
}

function Badge425() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch271 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">purple-700</p>
    </div>
  );
}

function Color272() {
  return <div className="bg-[#6938ef] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch272() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color272 />
    </div>
  );
}

function Badge426() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch272 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">purple-600</p>
    </div>
  );
}

function Color273() {
  return <div className="bg-[#7a5af8] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch273() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color273 />
    </div>
  );
}

function Badge427() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch273 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">purple-500</p>
    </div>
  );
}

function Color274() {
  return <div className="bg-[#9b8afb] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch274() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color274 />
    </div>
  );
}

function Badge428() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch274 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">purple-400</p>
    </div>
  );
}

function Color275() {
  return <div className="bg-[#bdb4fe] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch275() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color275 />
    </div>
  );
}

function Badge429() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch275 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">purple-300</p>
    </div>
  );
}

function Color276() {
  return <div className="bg-[#47104c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch276() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color276 />
    </div>
  );
}

function Badge430() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch276 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">fuchsia-950</p>
    </div>
  );
}

function Color277() {
  return <div className="bg-[#6f1877] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch277() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color277 />
    </div>
  );
}

function Badge431() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch277 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">fuchsia-900</p>
    </div>
  );
}

function Color278() {
  return <div className="bg-[#821890] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch278() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color278 />
    </div>
  );
}

function Badge432() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch278 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">fuchsia-800</p>
    </div>
  );
}

function Color279() {
  return <div className="bg-[#9f1ab1] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch279() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color279 />
    </div>
  );
}

function Badge433() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch279 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">fuchsia-700</p>
    </div>
  );
}

function Color280() {
  return <div className="bg-[#ba24d5] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch280() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color280 />
    </div>
  );
}

function Badge434() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch280 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">fuchsia-600</p>
    </div>
  );
}

function Color281() {
  return <div className="bg-[#d444f1] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch281() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color281 />
    </div>
  );
}

function Badge435() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch281 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">fuchsia-500</p>
    </div>
  );
}

function Color282() {
  return <div className="bg-[#e478fa] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch282() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color282 />
    </div>
  );
}

function Badge436() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch282 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">fuchsia-400</p>
    </div>
  );
}

function Color283() {
  return <div className="bg-[#eeaafd] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch283() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color283 />
    </div>
  );
}

function Badge437() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch283 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">fuchsia-300</p>
    </div>
  );
}

function Color284() {
  return <div className="bg-[#4e0d30] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch284() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color284 />
    </div>
  );
}

function Badge438() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch284 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">pink-950</p>
    </div>
  );
}

function Color285() {
  return <div className="bg-[#851651] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch285() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color285 />
    </div>
  );
}

function Badge439() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch285 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">pink-900</p>
    </div>
  );
}

function Color286() {
  return <div className="bg-[#9e165f] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch286() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color286 />
    </div>
  );
}

function Badge440() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch286 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">pink-800</p>
    </div>
  );
}

function Color287() {
  return <div className="bg-[#c11574] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch287() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color287 />
    </div>
  );
}

function Badge441() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch287 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">pink-700</p>
    </div>
  );
}

function Color288() {
  return <div className="bg-[#dd2590] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch288() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color288 />
    </div>
  );
}

function Badge442() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch288 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">pink-600</p>
    </div>
  );
}

function Color289() {
  return <div className="bg-[#ee46bc] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch289() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color289 />
    </div>
  );
}

function Badge443() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch289 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">pink-500</p>
    </div>
  );
}

function Color290() {
  return <div className="bg-[#f670c7] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch290() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color290 />
    </div>
  );
}

function Badge444() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch290 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">pink-400</p>
    </div>
  );
}

function Color291() {
  return <div className="bg-[#faa7e0] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch291() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color291 />
    </div>
  );
}

function Badge445() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch291 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">pink-300</p>
    </div>
  );
}

function Color292() {
  return <div className="bg-[#57130a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch292() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color292 />
    </div>
  );
}

function Badge446() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch292 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-dark-950</p>
    </div>
  );
}

function Color293() {
  return <div className="bg-[#771a0d] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch293() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color293 />
    </div>
  );
}

function Badge447() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch293 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-dark-900</p>
    </div>
  );
}

function Color294() {
  return <div className="bg-[#97180c] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch294() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color294 />
    </div>
  );
}

function Badge448() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch294 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-dark-800</p>
    </div>
  );
}

function Color295() {
  return <div className="bg-[#bc1b06] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch295() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color295 />
    </div>
  );
}

function Badge449() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch295 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-dark-700</p>
    </div>
  );
}

function Color296() {
  return <div className="bg-[#e62e05] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch296() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color296 />
    </div>
  );
}

function Badge450() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch296 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-dark-600</p>
    </div>
  );
}

function Color297() {
  return <div className="bg-[#ff4405] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch297() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color297 />
    </div>
  );
}

function Badge451() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch297 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-dark-500</p>
    </div>
  );
}

function Color298() {
  return <div className="bg-[#ff692e] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch298() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color298 />
    </div>
  );
}

function Badge452() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch298 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-dark-400</p>
    </div>
  );
}

function Color299() {
  return <div className="bg-[#ff9c66] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch299() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color299 />
    </div>
  );
}

function Badge453() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch299 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-dark-300</p>
    </div>
  );
}

function Color300() {
  return <div className="bg-[#511c10] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch300() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color300 />
    </div>
  );
}

function Badge454() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch300 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-950</p>
    </div>
  );
}

function Color301() {
  return <div className="bg-[#772917] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch301() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color301 />
    </div>
  );
}

function Badge455() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch301 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-900</p>
    </div>
  );
}

function Color302() {
  return <div className="bg-[#932f19] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch302() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color302 />
    </div>
  );
}

function Badge456() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch302 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-800</p>
    </div>
  );
}

function Color303() {
  return <div className="bg-[#b93815] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch303() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color303 />
    </div>
  );
}

function Badge457() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch303 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-700</p>
    </div>
  );
}

function Color304() {
  return <div className="bg-[#e04f16] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch304() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color304 />
    </div>
  );
}

function Badge458() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch304 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-600</p>
    </div>
  );
}

function Color305() {
  return <div className="bg-[#ef6820] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch305() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color305 />
    </div>
  );
}

function Badge459() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch305 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-500</p>
    </div>
  );
}

function Color306() {
  return <div className="bg-[#f38744] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch306() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color306 />
    </div>
  );
}

function Badge460() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch306 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-400</p>
    </div>
  );
}

function Color307() {
  return <div className="bg-[#f7b27a] flex-[1_0_0] h-full min-h-px min-w-px rounded-[4px]" data-name="Color" />;
}

function Swatch307() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex items-center justify-center p-[4px] relative rounded-[8px] shrink-0 size-[32px]" data-name="Swatch">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <Color307 />
    </div>
  );
}

function Badge461() {
  return (
    <div className="bg-[#0c0e12] content-stretch flex gap-[6px] items-center pl-[4px] pr-[12px] py-[4px] relative rounded-[12px] shrink-0" data-name="Badge">
      <div aria-hidden="true" className="absolute border border-[#22262f] border-solid inset-0 pointer-events-none rounded-[12px]" />
      <Swatch307 />
      <p className="font-['Cabin:Semibold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#f7f7f7] text-[16px] whitespace-nowrap">orange-300</p>
    </div>
  );
}

function Column8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="Column">
      <div className="min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-col justify-center min-w-[inherit] size-full">
          <div className="content-stretch flex flex-col items-start justify-center min-w-[inherit] pb-[16px] pr-[64px] relative w-full">
            <p className="font-['Cabin:Medium',sans-serif] font-medium leading-[18px] relative shrink-0 text-[#535862] text-[12px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              Dark mode
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge398 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge399 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge400 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge401 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge402 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge403 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge404 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge405 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge406 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge407 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge408 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge409 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge410 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge411 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge412 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge413 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge414 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge415 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge416 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge417 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge418 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge419 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge420 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge421 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge422 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge423 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge424 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge425 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge426 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge427 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge428 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge429 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge430 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge431 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge432 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge433 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge434 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge435 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge436 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge437 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge438 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge439 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge440 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge441 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge442 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge443 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge444 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge445 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge446 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge447 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge448 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge449 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge450 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge451 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge452 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge453 />
          </div>
        </div>
      </div>
      <div className="bg-[#fafafa] h-[12px] min-w-[112px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge454 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge455 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge456 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge457 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge458 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge459 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge460 />
          </div>
        </div>
      </div>
      <div className="min-h-[80px] min-w-[128px] relative shrink-0 w-full" data-name="_Documentation table cell">
        <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center min-h-[inherit] min-w-[inherit] size-full">
          <div className="content-stretch flex items-center min-h-[inherit] min-w-[inherit] pr-[64px] py-[12px] relative w-full">
            <Badge461 />
          </div>
        </div>
      </div>
    </div>
  );
}

function Content6() {
  return (
    <div className="content-stretch flex flex-[1_0_0] items-start min-h-px min-w-px relative" data-name="Content">
      <Column6 />
      <Column7 />
      <Column8 />
    </div>
  );
}

function Content4() {
  return (
    <div className="content-stretch flex gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <Content5 />
      <Content6 />
    </div>
  );
}

function Content3() {
  return (
    <div className="content-stretch flex flex-col gap-[64px] items-start relative shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[12px] items-start max-w-[1024px] relative shrink-0 w-[720px]" data-name="Design note">
        <TextAndBadge1 />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
          <span className="leading-[28px] text-[18px]">{`Utility color variables are useful “backup” variables for tricky or multicolor components (e.g. `}</span>
          <a className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1046-3819" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=1046-3819" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              badges
            </span>
          </a>
          <span className="leading-[28px] text-[18px]">{`) in your designs where semantic variables don’t fit perfectly. For more detail on how these variables are structured and how to use them, please refer to our `}</span>
          <a className="cursor-pointer decoration-solid leading-[28px] text-[18px] underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
            <span className="decoration-solid underline" href="https://www.figma.com/design/VUkBDrHGxM1G5YdXfqcS2J?node-id=6520-67420" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
              Introduction to variables
            </span>
          </a>
          <span className="leading-[28px] text-[18px]">.</span>
        </p>
      </div>
      <Content4 />
    </div>
  );
}

function Section() {
  return (
    <div className="relative shrink-0 w-full" data-name="Section">
      <div className="content-stretch flex flex-col gap-[64px] items-start p-[80px] relative w-full">
        <Content1 />
        <Content3 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] items-start relative shrink-0 whitespace-nowrap" data-name="Text">
      <p className="font-['Cabin:Semibold',sans-serif] leading-[30px] not-italic relative shrink-0 text-[#181d27] text-[20px]">The ultimate Figma UI kit and design system</p>
      <a className="block font-['Cabin:Regular',sans-serif] font-normal leading-[0] relative shrink-0 text-[#535862] text-[0px]" href="https://www.untitledui.com" style={{ fontVariationSettings: "'wdth' 100" }} target="_blank">
        <p className="cursor-pointer decoration-solid leading-[30px] text-[20px] underline" role="link" style={{ fontVariationSettings: "'wdth' 100" }} tabIndex="0">
          www.untitledui.com
        </p>
      </a>
    </div>
  );
}

function GreatGrants() {
  return (
    <div className="absolute inset-[18.75%_0.2%_17.55%_19.73%]" data-name="Great Grants">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 108.093 15.288">
        <g id="Great Grants">
          <path d={svgPaths.p3bf4b870} fill="var(--fill-0, #181D27)" id="Vector" />
          <path d={svgPaths.p3912bf00} fill="var(--fill-0, #181D27)" id="Vector_2" />
          <path d={svgPaths.pc4bc070} fill="var(--fill-0, #181D27)" id="Vector_3" />
          <path d={svgPaths.pc409780} fill="var(--fill-0, #181D27)" id="Vector_4" />
          <path d={svgPaths.pd103700} fill="var(--fill-0, #181D27)" id="Vector_5" />
          <path d={svgPaths.p2a940f70} fill="var(--fill-0, #181D27)" id="Vector_6" />
          <path d={svgPaths.p1df1af80} fill="var(--fill-0, #181D27)" id="Vector_7" />
          <path d={svgPaths.p1e97fe00} fill="var(--fill-0, #181D27)" id="Vector_8" />
          <path d={svgPaths.p12cf6900} fill="var(--fill-0, #181D27)" id="Vector_9" />
          <path d={svgPaths.p27bd9680} fill="var(--fill-0, #181D27)" id="Vector_10" />
          <path d={svgPaths.p102e6e00} fill="var(--fill-0, #181D27)" id="Vector_11" />
        </g>
      </svg>
    </div>
  );
}

function Footer() {
  return (
    <div className="content-stretch flex items-start justify-between relative shrink-0 w-full" data-name="Footer">
      <Text />
      <div className="content-stretch flex items-start relative shrink-0" data-name="Logo">
        <div className="h-[24px] relative shrink-0 w-[135px]" data-name="nogo-dark">
          <div className="-translate-y-1/2 absolute aspect-[347/404] left-0 right-[84.72%] top-1/2" data-name="nib-dark">
            <div className="absolute inset-[0_0.14%_0.01%_0]" data-name="logo mark">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20.5959 24.0106">
                <g id="logo mark">
                  <path d={svgPaths.p1c2e5800} fill="var(--fill-0, #181D27)" />
                  <path d={svgPaths.p19a2b882} fill="var(--fill-0, #181D27)" />
                </g>
              </svg>
            </div>
          </div>
          <GreatGrants />
        </div>
      </div>
    </div>
  );
}

function Content7() {
  return (
    <div className="bg-[#fafafa] relative rounded-[20px] shrink-0 w-full" data-name="Content">
      <div className="content-stretch flex flex-col gap-[128px] items-start p-[48px] relative w-full">
        <Footer />
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[30px] relative shrink-0 text-[#535862] text-[20px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          © 2025 Untitled UI • qJ72mVpF9KdW
        </p>
      </div>
    </div>
  );
}

export default function ColorUtilityVariables() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Color utility variables">
      <div className="bg-white relative shrink-0 w-full" data-name="Design system header">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Content />
        </div>
      </div>
      <Section />
      <div className="bg-white min-w-[1600px] relative shrink-0 w-full" data-name="Design system footer">
        <div className="content-stretch flex flex-col items-start min-w-[inherit] p-[32px] relative w-full">
          <Content7 />
        </div>
      </div>
    </div>
  );
}