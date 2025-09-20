import React from "react";

const WindowHeader = ({title}) => {
	return (
		<div className="g-border bg-[#b5a2fb] grad-h">
			<div className="flex justify-center max-h-0">
				<h2 className="w-title">{title}</h2>
			</div>

			<div className="flex justify-end gap-0.5 p-0.5 relative">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={14}
					height={14}
					viewBox="3 3 18 18"
					className="bg-white size-4"
				>
					<path
						fill="#6c4b7c"
						d="M5 3H3v18h18V3zm14 2v14H5V5zm-3 6H8v2h8z"
					></path>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={14}
					height={14}
					viewBox="3 3 18 18"
					className="bg-white size-4"
				>
					<path
						fill="#6c4b7c"
						d="M3 3h18v18H3zm16 16V5H5v14zm-6-8h4v2h-4v4h-2v-4H7v-2h4V7h2z"
					></path>
				</svg>

				<svg
					xmlns="http://www.w3.org/2000/svg"
					width={14}
					height={14}
					viewBox="3 3 18 18"
					className="bg-white size-4"
				>
					<path
						fill="#6c4b7c"
						d="M5 3H3v18h18V3zm14 2v14H5V5zm-8 4H9V7H7v2h2v2h2v2H9v2H7v2h2v-2h2v-2h2v2h2v2h2v-2h-2v-2h-2v-2h2V9h2V7h-2v2h-2v2h-2z"
					></path>
				</svg>
			</div>
		</div>
	);
};

export default WindowHeader;
