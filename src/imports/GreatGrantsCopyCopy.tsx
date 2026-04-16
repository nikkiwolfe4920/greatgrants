import svgPaths from "./svg-oumswn60xx";
import imgImageGreatGrants from "figma:asset/82bce894ae9dbc55ef599753b4d190f4dfd0cb14.png";

function ImageGreatGrants() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Image (Great Grants)">
      <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImageGreatGrants} />
    </div>
  );
}

function Container() {
  return (
    <div className="h-[57px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[16px] pr-[109.406px] pt-[16px] relative size-full">
        <ImageGreatGrants />
      </div>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.pff0fc00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1d76d410} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p2f091200} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p39897300} id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[36px] left-0 rounded-[8px] top-0 w-[231px]" data-name="Button">
      <Icon />
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-[36px] text-[#364153] text-[14px] top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Dashboard
      </p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="absolute h-[36px] left-0 top-0 w-[231px]" data-name="List Item">
      <Button />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p19416e00} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p3e059a80} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6H5.33333" id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 8.66667H5.33333" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 11.3333H5.33333" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[37px] left-0 rounded-[8px] top-0 w-[231px]" data-name="Button">
      <Icon1 />
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[21px] left-[36px] text-[#364153] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        All Applications
      </p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="absolute h-[37px] left-0 top-[40px] w-[231px]" data-name="List Item">
      <Button1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p107a080} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M14 14L11.1333 11.1333" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[37px] left-0 rounded-[8px] top-0 w-[231px]" data-name="Button">
      <Icon2 />
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[21px] left-[36px] text-[#364153] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Grant Search
      </p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="absolute h-[37px] left-0 top-[81px] w-[231px]" data-name="List Item">
      <Button2 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10.5px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p3159e300} id="Vector" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M5.33333 6.66667V9.33333" id="Vector_2" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 6.66667V8" id="Vector_3" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M10.6667 6.66667V10.6667" id="Vector_4" stroke="var(--stroke-0, #101828)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[37px] left-0 rounded-[8px] top-0 w-[231px]" data-name="Button">
      <Icon3 />
      <p className="absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[21px] left-[36px] text-[#101828] text-[14px] top-[8px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Project Details
      </p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="absolute h-[37px] left-0 top-[122px] w-[231px]" data-name="List Item">
      <Button3 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_641_314)" id="Icon">
          <path d={svgPaths.pda21400} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1be36900} id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.pa8d100} id="Vector_3" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 4H9.33333" id="Vector_4" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 6.66667H9.33333" id="Vector_5" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 9.33333H9.33333" id="Vector_6" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M6.66667 12H9.33333" id="Vector_7" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_641_314">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[129.617_0_0] h-[20px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Organization Profile
        </p>
      </div>
    </div>
  );
}

function Text1() {
  return <div className="bg-[#c10007] rounded-[16777200px] shrink-0 size-[4px]" data-name="Text" />;
}

function Text2() {
  return (
    <div className="flex-[1_0_0] h-[16px] min-h-px min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[16px] left-0 text-[#c10007] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          0%
        </p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#ffe2e2] h-[20px] relative rounded-[4px] shrink-0 w-[45.383px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[6px] items-center px-[8px] relative size-full">
        <Text1 />
        <Text2 />
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[36px] items-center left-0 px-[12px] top-0 w-[231px]" data-name="Container">
      <Icon4 />
      <Text />
      <Container2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 8">
            <path d={svgPaths.p137d8f80} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 5.33333 5.33333">
            <path d={svgPaths.p1efb2580} id="Vector" stroke="var(--stroke-0, #E7000B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 size-[16px] top-[2px]" data-name="Container">
      <Icon5 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[39px] left-[24px] top-0 w-[183px]" data-name="Paragraph">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[0] left-0 text-[#364153] text-[12px] top-[0.5px] w-[183px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <span className="leading-[19.5px]">4 items</span>
        <span className="leading-[19.5px] text-[#4a5565]">{` remaining to complete your profile.`}</span>
      </p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[39px] left-[12px] top-[40px] w-[207px]" data-name="Container">
      <Container4 />
      <Paragraph />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute h-[87px] left-0 rounded-[10px] top-[12px] w-[231px]" data-name="Button">
      <Container1 />
      <Container3 />
    </div>
  );
}

function ListItem4() {
  return (
    <div className="absolute border-[#e5e7eb] border-solid border-t h-[100px] left-0 top-[175px] w-[231px]" data-name="List Item">
      <Button4 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[275px] relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
    </div>
  );
}

function Navigation() {
  return (
    <div className="flex-[593_0_0] min-h-px min-w-px relative w-[255px]" data-name="Navigation">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[12px] px-[12px] relative size-full">
          <List />
        </div>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[16.578px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="-translate-x-1/2 absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[16px] left-[8.5px] text-[#181d27] text-[12px] text-center top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          OR
        </p>
      </div>
    </div>
  );
}

function SharedSidebar1() {
  return (
    <div className="bg-[#e9eaeb] relative rounded-[16777200px] shrink-0 size-[32px]" data-name="SharedSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[7.711px] relative size-full">
        <Text3 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Olivia Rhye
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[16px] left-0 text-[#6a7282] text-[12px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        UptownArts Coalition
      </p>
    </div>
  );
}

function SharedSidebar2() {
  return (
    <div className="flex-[135_0_0] h-[36px] min-h-px min-w-px relative" data-name="SharedSidebar">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container6 />
        <Container7 />
      </div>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function SlotClone() {
  return (
    <div className="h-[52px] relative rounded-[10px] shrink-0 w-full" data-name="SlotClone">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[12px] items-center px-[8px] relative size-full">
          <SharedSidebar1 />
          <SharedSidebar2 />
          <Icon6 />
        </div>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[69px] relative shrink-0 w-[255px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pl-[8px] pr-[24px] pt-[9px] relative size-full">
        <SlotClone />
      </div>
    </div>
  );
}

function SharedSidebar() {
  return (
    <div className="bg-white h-[719px] relative shrink-0 w-[256px]" data-name="SharedSidebar">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-r border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pr-px relative size-full">
        <Container />
        <Navigation />
        <Container5 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p3713e00} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd2076c0} id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-[161.25px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#101828] text-[20px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Project Summaries
        </p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-0 top-0 w-[316.789px]" data-name="Container">
      <Icon7 />
      <Heading1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[36px] w-[284.789px]" data-name="Paragraph">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Upload or write materials describing your project
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[56px] relative shrink-0 w-[316.789px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container10 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#009689] h-[36px] relative rounded-[8px] shrink-0 w-[186.828px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon8 />
        <p className="-translate-x-1/2 absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-[109.5px] text-[14px] text-center text-white top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Add Project Summary
        </p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[56px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Button5 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Examples of Past Documentation
      </p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Previous grant proposals
      </p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Annual program reports
      </p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Case studies
      </p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Evaluation reports
      </p>
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
    </div>
  );
}

function Container13() {
  return (
    <div className="col-1 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading3 />
      <List1 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[20px] left-0 text-[#101828] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Examples of Future Planning Materials
      </p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Strategic plans
      </p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Program roadmaps
      </p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Budget projections
      </p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        • Expansion plans
      </p>
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] h-[92px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="col-2 content-stretch flex flex-col gap-[8px] items-start justify-self-stretch relative row-1 self-stretch shrink-0" data-name="Container">
      <Heading4 />
      <List2 />
    </div>
  );
}

function Container12() {
  return (
    <div className="gap-x-[24px] gap-y-[24px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[120px] relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#f9fafb] h-[162px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
        <Container12 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pb47f400} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p17a13100} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 9H8" id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 13H8" id="Vector_4" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 17H8" id="Vector_5" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-[379.5px] px-[12px] rounded-[16777200px] size-[48px] top-[49px]" data-name="Container">
      <Icon9 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[20px] left-[49px] top-[113px] w-[709px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[20px] left-[354.72px] text-[#101828] text-[14px] text-center top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        No project summaries yet
      </p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[20px] left-[49px] top-[137px] w-[709px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-[354.59px] text-[#4a5565] text-[14px] text-center top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add project summaries and documents to help describe your program to funders.
      </p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#009689] h-[36px] left-[303.19px] rounded-[8px] top-[173px] w-[200.625px]" data-name="Button">
      <Icon10 />
      <p className="-translate-x-1/2 absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-[116.5px] text-[14px] text-center text-white top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add Your First Summary
      </p>
    </div>
  );
}

function Container15() {
  return (
    <div className="bg-white h-[258px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container16 />
      <Heading2 />
      <Paragraph2 />
      <Button6 />
    </div>
  );
}

function Section() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[524px] items-start relative shrink-0 w-full" data-name="Section">
      <Container8 />
      <Container11 />
      <Container15 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-[146.453px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#101828] text-[20px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Project Locations
        </p>
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-0 top-0 w-[351.094px]" data-name="Container">
      <Icon11 />
      <Heading5 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[36px] w-[319.094px]" data-name="Paragraph">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Define the geographic regions served by your program
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[56px] relative shrink-0 w-[351.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container19 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#009689] h-[36px] relative rounded-[8px] shrink-0 w-[134.672px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon12 />
        <p className="-translate-x-1/2 absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-[83.5px] text-[14px] text-center text-white top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          Add Location
        </p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[56px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Button7 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p27c543b0} id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2d59bff0} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute bg-[#f3f4f6] content-stretch flex items-center justify-center left-[379.5px] px-[12px] rounded-[16777200px] size-[48px] top-[49px]" data-name="Container">
      <Icon13 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="absolute h-[20px] left-[49px] top-[113px] w-[709px]" data-name="Heading 3">
      <p className="-translate-x-1/2 absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[20px] left-[354.56px] text-[#101828] text-[14px] text-center top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        No locations defined
      </p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[20px] left-[49px] top-[137px] w-[709px]" data-name="Paragraph">
      <p className="-translate-x-1/2 absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-[354.8px] text-[#4a5565] text-[14px] text-center top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add the cities, states, or regions where your project operates.
      </p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[12px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute bg-[#009689] h-[36px] left-[306.86px] rounded-[8px] top-[173px] w-[193.273px]" data-name="Button">
      <Icon14 />
      <p className="-translate-x-1/2 absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-[113px] text-[14px] text-center text-white top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add Your First Location
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="bg-white h-[258px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container21 />
      <Heading6 />
      <Paragraph4 />
      <Button8 />
    </div>
  );
}

function Section1() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[338px] items-start relative shrink-0 w-full" data-name="Section">
      <Container17 />
      <Container20 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p25397b80} id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2c4f400} id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2241fff0} id="Vector_3" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pae3c380} id="Vector_4" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-[123.805px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Cabin:SemiBold',sans-serif] font-semibold leading-[28px] left-0 text-[#101828] text-[20px] top-[-0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          People Served
        </p>
      </div>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[28px] items-center left-0 top-0 w-[328.289px]" data-name="Container">
      <Icon15 />
      <Heading7 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[36px] w-[296.289px]" data-name="Paragraph">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Select the populations supported by your program
      </p>
    </div>
  );
}

function Container23() {
  return (
    <div className="h-[56px] relative shrink-0 w-[328.289px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Container24 />
        <Paragraph5 />
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Container">
      <div className="content-stretch flex items-start justify-between pr-[478.711px] relative size-full">
        <Container23 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[126.438px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Homeless Individuals
      </p>
    </div>
  );
}

function Checkbox() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-0 rounded-[10px] top-0 w-[244.328px]" data-name="Label">
      <Text4 />
      <Checkbox />
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[95.688px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Children / Youth
      </p>
    </div>
  );
}

function Checkbox1() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label1() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-[256.33px] rounded-[10px] top-0 w-[244.336px]" data-name="Label">
      <Text5 />
      <Checkbox1 />
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[41.438px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Elderly
      </p>
    </div>
  );
}

function Checkbox2() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label2() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-[512.66px] rounded-[10px] top-0 w-[244.328px]" data-name="Label">
      <Text6 />
      <Checkbox2 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[137.813px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        People with Disabilities
      </p>
    </div>
  );
}

function Checkbox3() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label3() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-0 rounded-[10px] top-[68px] w-[244.328px]" data-name="Label">
      <Text7 />
      <Checkbox3 />
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[133.641px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Immigrants / Refugees
      </p>
    </div>
  );
}

function Checkbox4() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label4() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-[256.33px] rounded-[10px] top-[68px] w-[244.336px]" data-name="Label">
      <Text8 />
      <Checkbox4 />
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[51.789px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Veterans
      </p>
    </div>
  );
}

function Checkbox5() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label5() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-[512.66px] rounded-[10px] top-[68px] w-[244.328px]" data-name="Label">
      <Text9 />
      <Checkbox5 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[124.469px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Low Income Families
      </p>
    </div>
  );
}

function Checkbox6() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label6() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-0 rounded-[10px] top-[136px] w-[244.328px]" data-name="Label">
      <Text10 />
      <Checkbox6 />
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[113.781px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Rural Communities
      </p>
    </div>
  );
}

function Checkbox7() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label7() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-[256.33px] rounded-[10px] top-[136px] w-[244.336px]" data-name="Label">
      <Text11 />
      <Checkbox7 />
    </div>
  );
}

function Text12() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[148.664px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Indigenous Communities
      </p>
    </div>
  );
}

function Checkbox8() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label8() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-[512.66px] rounded-[10px] top-[136px] w-[244.328px]" data-name="Label">
      <Text12 />
      <Checkbox8 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute h-[20px] left-[44px] top-[16px] w-[85.086px]" data-name="Text">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Women / Girls
      </p>
    </div>
  );
}

function Checkbox9() {
  return <div className="absolute bg-white border-2 border-[#d1d5dc] border-solid left-[16px] rounded-[4px] size-[16px] top-[18px]" data-name="Checkbox" />;
}

function Label9() {
  return (
    <div className="absolute border-2 border-[#e5e7eb] border-solid h-[56px] left-0 rounded-[10px] top-[204px] w-[244.328px]" data-name="Label">
      <Text13 />
      <Checkbox9 />
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[260px] relative shrink-0 w-full" data-name="Container">
      <Label />
      <Label1 />
      <Label2 />
      <Label3 />
      <Label4 />
      <Label5 />
      <Label6 />
      <Label7 />
      <Label8 />
      <Label9 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[297.09px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #009689)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-white h-[36px] relative rounded-[8px] shrink-0 w-full" data-name="Button">
      <div aria-hidden="true" className="absolute border-2 border-[rgba(0,0,0,0.1)] border-dashed inset-0 pointer-events-none rounded-[8px]" />
      <Icon16 />
      <p className="-translate-x-1/2 absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-[394.59px] text-[#009689] text-[14px] text-center top-[8.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Add Custom Category
      </p>
    </div>
  );
}

function PrimitiveLabel() {
  return (
    <div className="absolute h-[20px] left-0 top-[25px] w-[757px]" data-name="Primitive.label">
      <p className="absolute font-['Cabin:Medium',sans-serif] font-medium leading-[20px] left-0 text-[#364153] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Estimated number served annually (optional)
      </p>
    </div>
  );
}

function Input() {
  return (
    <div className="absolute bg-white h-[36px] left-0 rounded-[8px] top-[53px] w-[320px]" data-name="Input">
      <div className="content-stretch flex items-center overflow-clip px-[12px] py-[4px] relative rounded-[inherit] size-full">
        <p className="font-['Cabin:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#717182] text-[14px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
          e.g., 500
        </p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-solid border-t inset-0 pointer-events-none" />
      <PrimitiveLabel />
      <Input />
    </div>
  );
}

function Container25() {
  return (
    <div className="bg-white h-[483px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="content-stretch flex flex-col gap-[24px] items-start pb-px pt-[25px] px-[25px] relative size-full">
        <Container26 />
        <Button9 />
        <Container27 />
      </div>
    </div>
  );
}

function Section2() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[563px] items-start relative shrink-0 w-full" data-name="Section">
      <Container22 />
      <Container25 />
    </div>
  );
}

function ProjectDetailsPage() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[48px] h-[1742px] items-start left-0 pt-[189px] px-[32px] top-0 w-[871px]" data-name="ProjectDetailsPage">
      <Section />
      <Section1 />
      <Section2 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[32px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-4.41%_-3.75%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28.6667 24.6667">
            <path d={svgPaths.p22583580} id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_66.67%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-18.75%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 7.33333">
            <path d="M1 1V6.33333" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-37.5%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4.66667">
            <path d="M1 1V3.66667" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_33.33%_33.33%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-12.5%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 10">
            <path d="M1 1V9" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex flex-col h-[32px] items-start left-[32px] pr-[775px] top-[24px] w-[807px]" data-name="Container">
      <Icon17 />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[36px] left-[32px] top-[68px] w-[807px]" data-name="Heading 1">
      <p className="absolute font-['Lustria:Regular',sans-serif] leading-[36px] left-0 not-italic text-[#101828] text-[30px] top-[-0.5px] whitespace-nowrap">Project Details</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[20px] left-[32px] top-[112px] w-[807px]" data-name="Paragraph">
      <p className="absolute font-['Cabin:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-[0.5px] whitespace-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Document your project information to streamline future grant applications
      </p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[156px] relative shrink-0 w-full" data-name="Container">
      <Container29 />
      <Heading />
      <Paragraph6 />
    </div>
  );
}

function ProjectDetailsPage1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[157px] items-start left-0 pb-px top-0 w-[871px]" data-name="ProjectDetailsPage">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-b border-solid inset-0 pointer-events-none" />
      <Container28 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white flex-[871_0_0] h-[719px] min-h-px min-w-px relative" data-name="Main Content">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <ProjectDetailsPage />
        <ProjectDetailsPage1 />
      </div>
    </div>
  );
}

export default function GreatGrantsCopyCopy() {
  return (
    <div className="bg-white content-stretch flex items-start relative size-full" data-name="Great Grants (Copy) (Copy)">
      <SharedSidebar />
      <MainContent />
    </div>
  );
}