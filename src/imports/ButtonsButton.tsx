export default function ButtonsButton() {
  return (
    <div className="bg-[#f5f5f5] relative rounded-[8px] size-full" data-name="Buttons/Button">
      <div className="content-stretch flex gap-[4px] items-center justify-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[2px] relative shrink-0" data-name="Text padding">
          <p className="font-['Cabin:Semibold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#a4a7ae] text-[14px] whitespace-nowrap">Disabled Button</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#e9eaeb] border-solid inset-0 pointer-events-none rounded-[8px] shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)]" />
    </div>
  );
}