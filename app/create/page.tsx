
import { BackgroundBeams } from "@/components/Background";
import { CodeEditor } from "@/components/CodeEditor";
import { Form } from "@/components/Form";
import { Terminal } from "@/components/Terminal";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"


export default async function Home() {

  return (
    <div className="w-full h-screen flex z-50 items-start mt-10 justify-center">
      <div className="h-10/12  w-10/12 gap-3 flex ">
        <div className="w-full lg:w-1/3  md:w-1/2 rounded-md">
          <Form />
        </div>
        <div className="lg:w-2/3 md:w-1/2 hidden md:flex    overflow-hidden rounded-md">
          {/* todo: add suspense boundary */}

          <ResizablePanelGroup direction="vertical">

            <ResizablePanel minSize={6} defaultSize={70}>

              <CodeEditor height="h-[500px]" width="w-full" className="" />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel minSize={6} defaultSize={30}   >
              <Terminal />
            </ResizablePanel>
          </ResizablePanelGroup>
        </div>
        <BackgroundBeams className="-z-10" />
      </div>
    </div>
  );
}

