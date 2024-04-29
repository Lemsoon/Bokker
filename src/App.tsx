import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";

function App() {
  return (
    <div className="bg-gray-600 h-screen flex justify-center items-center">
      <Alert className="w-[20rem] h-[4rem] m-20 ">
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>Tailwind, Shadcn, and React TS is ready</AlertDescription>
      </Alert>
    </div>
  );
}

export default App;
