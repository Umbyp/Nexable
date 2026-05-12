export default function LineMockup() {
  return (
    <div className="w-[80%] max-w-[280px] aspect-[9/16] bg-white rounded-3xl p-3 shadow-lift">
      <div className="bg-accent/10 rounded-2xl h-full overflow-hidden flex flex-col text-[11px]">
        <div className="bg-accent text-text-1 px-3 py-2 flex items-center gap-2 text-xs font-medium">
          <span className="w-2 h-2 rounded-full bg-white animate-pulse-soft" />
          IT Support · TH
        </div>
        <div className="flex-1 p-3 flex flex-col gap-1.5 overflow-hidden">
          <div className="self-start max-w-[85%] bg-accent text-bg px-2.5 py-1.5 rounded-2xl rounded-bl-sm shadow-soft">
            สวัสดีค่ะ มีปัญหาเรื่องอะไรคะ
          </div>
          <div className="self-end max-w-[85%] bg-accent text-text-1 px-2.5 py-1.5 rounded-2xl rounded-br-sm">
            VPN เชื่อมต่อไม่ได้
          </div>
          <div className="self-start max-w-[85%] bg-accent text-bg px-2.5 py-1.5 rounded-2xl rounded-bl-sm shadow-soft">
            ลองรีสตาร์ท GlobalProtect ก่อนนะคะ
          </div>
          <div className="self-end max-w-[85%] bg-accent text-text-1 px-2.5 py-1.5 rounded-2xl rounded-br-sm">
            รีสตาร์ทแล้วยังไม่ได้
          </div>
          <div className="self-start max-w-[85%] bg-accent text-bg px-2.5 py-1.5 rounded-2xl rounded-bl-sm shadow-soft">
            เปิด ticket INC-22914 แล้วค่ะ ทีม Network จะติดต่อกลับใน 15 นาที
          </div>
        </div>
      </div>
    </div>
  )
}
