import { useSelector } from "react-redux";
import ToogleButton from "./components/ToogleButton";
import UpdateTimeButton from "./components/UpdateTimeButton";
import getFormattedValue from "./utils/getFormattedValue";

function App() {
  const chronoValue = useSelector((state) => state.chrono);
  console.log(chronoValue);
  return (
    <div className="bg-slate-700 text-slate-100 pt-20 min-h-screen">
      <div className="max-w-xl mx-auto border border-slate-500 rounded p-10">
        <h1 className="text-center text-3xl mb-8">Pomodoro</h1>
        <div className="flex justify-center mb-8">
          {/* session block */}
          <div className="mr-10">
            <p className="text-center mb-1">sessions</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"session"} />
              <p className="mx-4 text-xl">{chronoValue.session.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"session"} />
            </div>
          </div>
          {/* pause block */}
          <div>
            <p className="text-center mb-1">pause</p>
            <div className="flex">
              <UpdateTimeButton sign={"-"} type={"pause"} />

              <p className="mx-4 text-xl">{chronoValue.pause.value / 60}</p>
              <UpdateTimeButton sign={"+"} type={"pause"} />
            </div>
          </div>
        </div>
        <p className="text-center mb-2 text-xl font-semibold">
          {chronoValue.displayedValue.heading}
        </p>
        <p className="text-center flex justify-center mb-1">
          <span className="text-4xl p-4 rounded bg-slate-300 text-slate-900">
            {getFormattedValue(chronoValue.displayedValue.value)}
          </span>
        </p>
        <p className="mb-10 text-center">
          passed cycle(s) : {chronoValue.cycles}
        </p>
        <ToogleButton />
      </div>
    </div>
  );
}

export default App;
