const habits = [
  { name: "Deep Work", done: true },
  { name: "Journal", done: true },
  { name: "Newsletter", done: false },
  { name: "Sleep 8h", done: true },
  { name: "Workout", done: true },
  { name: "Make my bed", done: true },
  { name: "Meditation", done: true },
  { name: "Reading", done: false },
];

const goals = [
  { name: "Newsletter", frac: "0/1", pct: 0 },
  { name: "Journal", frac: "1/7", pct: 14 },
  { name: "Sleep 8h", frac: "3/7", pct: 43 },
  { name: "Workout", frac: "2/5", pct: 40 },
];

function Donut({ pct, color, label }: { pct: number; color: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className="rounded-full flex items-center justify-center relative"
        style={{
          width: 68,
          height: 68,
          background: `conic-gradient(${color} ${pct * 3.6}deg, #2c2c27 0deg)`,
        }}
      >
        <div
          className="rounded-full flex items-center justify-center text-xs font-semibold"
          style={{ width: 52, height: 52, background: "#1E1E1C", color: "#F6F2E9" }}
        >
          {pct}%
        </div>
      </div>
      <span className="text-[10px] uppercase tracking-wide" style={{ color: "#7a7a73" }}>
        {label}
      </span>
    </div>
  );
}

export default function DashboardMock() {
  return (
    <div className="mt-16 max-w-2xl mx-auto">
      <div className="border border-charcoal bg-charcoal-soft p-5 sm:p-6 w-full text-left">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-cream text-sm font-semibold tracking-wide block">
              Weekly Planner
            </span>
            <span className="text-[11px]" style={{ color: "#7a7a73" }}>
              Wednesday, July 22
            </span>
          </div>
          <span
            className="text-lime text-xs font-semibold border px-2 py-1"
            style={{ borderColor: "rgba(207,244,58,0.4)" }}
          >
            9 day streak
          </span>
        </div>
        <div
          className="border border-charcoal px-3 py-2 mb-4 flex items-center justify-between"
          style={{ background: "#17170f" }}
        >
          <span className="text-xs" style={{ color: "#7a7a73" }}>
            <span className="text-lime">&gt;_</span> Quick log &gt; sleep 8
          </span>
          <span className="text-[10px]" style={{ color: "#55554e" }}>
            enter
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2 mb-4">
          {[
            ["Habits", "91%"],
            ["Goals", "38%"],
            ["Weekly", "28%"],
            ["Energy", "7/10"],
          ].map(([label, value]) => (
            <div key={label} className="border border-charcoal p-2">
              <div className="text-[9px] uppercase tracking-wider mb-1" style={{ color: "#7a7a73" }}>
                {label}
              </div>
              <div className="text-lime text-sm font-semibold">{value}</div>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "#7a7a73" }}>
            Today&apos;s habits
          </div>
          <div className="grid grid-cols-2 gap-2">
            {habits.map((h) => (
              <div
                key={h.name}
                className="flex items-center gap-2 border px-2 py-1.5 text-xs"
                style={{
                  borderColor: h.done ? "rgba(207,244,58,0.3)" : "#2c2c27",
                  background: h.done ? "rgba(207,244,58,0.06)" : "transparent",
                }}
              >
                <span
                  className="w-2.5 h-2.5 rounded-full flex-none border"
                  style={{
                    background: h.done ? "#CFF43A" : "transparent",
                    borderColor: h.done ? "#CFF43A" : "#55554e",
                  }}
                />
                <span style={{ color: h.done ? "#e9e7de" : "#6f6f68" }}>{h.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "#7a7a73" }}>
              Weekly goals
            </div>
            <div className="space-y-2">
              {goals.map((g) => (
                <div key={g.name}>
                  <div className="flex justify-between text-[11px] mb-1">
                    <span style={{ color: "#c9c7bd" }}>{g.name}</span>
                    <span style={{ color: "#7a7a73" }}>{g.frac}</span>
                  </div>
                  <div className="h-1 w-full" style={{ background: "#2c2c27" }}>
                    <div className="h-1" style={{ width: `${g.pct}%`, background: "#CFF43A" }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest mb-2" style={{ color: "#7a7a73" }}>
              Performance
            </div>
            <div className="flex justify-around">
              <Donut pct={91} color="#CFF43A" label="Habits" />
              <Donut pct={38} color="#8FAE1F" label="Goals" />
              <Donut pct={28} color="#6b8f14" label="Weekly" />
            </div>
          </div>
        </div>
      </div>
      <p className="text-[10px] uppercase tracking-widest text-center mt-3" style={{ color: "#55554e" }}>
        Example data
      </p>
    </div>
  );
}
