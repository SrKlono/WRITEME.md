import React from "react";
import WindowHeader from "./components/WindowHeader";
import Markdown from "react-markdown";
import { useState } from "react";

const App = () => {
	const [text, setText] = useState(
		"# Heading \n## Subheading \nHere’s a [link to example.com](https://example.com).\n Some inline code: \`\`\`javascript const x = 42;\`\`\` \n\`\`\`javascript \nfunction greet(name) { \n    return \`Hello, \${name}!\`; \n} \n\`\`\`\` \n* List item one \n* List item two \n> This is a blockquote. \n![Alt text for image](https://placehold.co/400) \nThis is **bolded text** for emphasis."
	);

	return (
		<div className="min-h-screen flex items-center justify-center bg-grid">
			<div className="grid sm:grid-rows-2 md:grid-cols-2 md:max-h-screen gap-4 flex-1 p-[1rem]">
				<div className="rounded-sm g-border bg-white w-shadow h-[calc(100dvh-2rem)] p-2">
					<div className="flex flex-col gap-y-2 h-full">
						<WindowHeader title={"editor.exe"} />
						<textarea
							value={text}
							onChange={(e) => setText(e.target.value)}
							className="text-base g-border resize-none flex-1 px-1"
							id="editor"
							placeholder="Type your markdown here..."
						></textarea>
					</div>
				</div>

				<div className="rounded-sm g-border bg-white w-shadow h-[calc(100dvh-2rem)] p-2">
					<div className="flex flex-col gap-y-2 h-full">
						<WindowHeader title={"previewer.exe"} />
						<div
							id="preview"
							className="text-base g-border resize-none flex-1 px-1 overflow-scroll prose-sm lg:prose"
						>
							<Markdown>{text}</Markdown>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
