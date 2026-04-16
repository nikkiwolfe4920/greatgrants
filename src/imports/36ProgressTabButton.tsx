import svgPaths from "./svg-ldl3cokyrq";

function Icon() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p32bf5200} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 7.49219V10.8255" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M10 14.1562H10.0083" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function OrganizationProfileForm() {
  return (
    <div className="h-[62.766px] relative shrink-0 w-[16px]" data-name="OrganizationProfileForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <div className="flex h-[63px] items-center justify-center relative shrink-0 w-[16px]" style={{ "--transform-inner-width": "1200", "--transform-inner-height": "19" } as React.CSSProperties}>
          <div className="flex-none rotate-90">
            <p className="font-['Cabin:SemiBold',sans-serif] font-semibold leading-[16px] relative text-[12px] text-center text-white tracking-[0.6px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
              REQUIRED
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[35px] relative rounded-[4px] shrink-0 w-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start px-[8px] py-[6px] relative size-full">
        <p className="-translate-x-1/2 absolute font-['Cabin:Bold',sans-serif] font-bold leading-[12.5px] left-[23.5px] text-[12px] text-center text-white top-[5.75px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          3 / 8<br aria-hidden="true" />
          Done
        </p>
      </div>
    </div>
  );
}

function OrganizationProfileForm1() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="OrganizationProfileForm">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-center py-[8px] relative size-full">
        <Container1 />
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[255.766px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon />
      <OrganizationProfileForm />
      <OrganizationProfileForm1 />
    </div>
  );
}

export default function Component36ProgressTabButton() {
  return (
    <div className="bg-gradient-to-l content-stretch flex flex-col from-[#717bbc] items-start pt-[16px] px-[12px] relative rounded-bl-[14px] rounded-tl-[14px] shadow-[0px_20px_25px_0px_rgba(0,0,0,0.1),0px_8px_10px_0px_rgba(0,0,0,0.1)] size-full to-[#3e4784]" data-name="3-6 Progress / Tab Button">
      <Container />
    </div>
  );
}