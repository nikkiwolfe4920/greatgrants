function Tabs() {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-center relative shrink-0 w-full" data-name="Tabs">
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="_Tab button base">
        <div aria-hidden="true" className="absolute border-[#0e9384] border-b-2 border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pb-[12px] px-[4px] relative size-full">
            <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#107569] text-[14px] whitespace-nowrap">My details</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="_Tab button base">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pb-[12px] px-[4px] relative size-full">
            <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] whitespace-nowrap">Profile</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="_Tab button base">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pb-[12px] px-[4px] relative size-full">
            <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] whitespace-nowrap">Password</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="_Tab button base">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pb-[12px] px-[4px] relative size-full">
            <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] whitespace-nowrap">Team</p>
          </div>
        </div>
      </div>
      <div className="flex-[1_0_0] h-[32px] min-h-px min-w-px relative" data-name="_Tab button base">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="content-stretch flex gap-[8px] items-center justify-center pb-[12px] px-[4px] relative size-full">
            <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#717680] text-[14px] whitespace-nowrap">Plan</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HorizontalTabs() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-name="Horizontal tabs">
      <div aria-hidden="true" className="absolute border-[#e9eaeb] border-b border-solid inset-0 pointer-events-none" />
      <Tabs />
    </div>
  );
}