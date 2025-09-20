import React from "react";
import WindowHeader from "./components/WindowHeader";

const App = () => {
	return (
		<div className="min-h-screen flex items-center justify-center bg-grid">
			<div className="grid grid-cols-2 gap-x-4 flex-1 px-[1rem]">
				<div className="rounded-sm g-border bg-white w-shadow h-[calc(100dvh-2rem)] p-2">
					<div className="flex flex-col gap-y-2  h-full">
            <WindowHeader title={"editor.exe"}/>
						<textarea
							className="text-base g-border resize-none flex-1"
							name=""
							id=""
						></textarea>
					</div>
				</div>

				<div className="rounded-sm g-border bg-white w-shadow h-[calc(100dvh-2rem)] p-2">
					<div className="flex flex-col gap-y-2">
            <WindowHeader title={"previewer.exe"}/>
          </div>
        </div>
			</div>
		</div>
	);
};

export default App;
