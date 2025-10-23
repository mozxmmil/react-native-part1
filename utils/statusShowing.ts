export function statusShowing(status: string) {
	switch (status) {
		case "Pending":
			return "bg-red-400 px-2 py-1 rounded-md ";

		case "Complete":
			return "bg-green-400 px-2 py-1 rounded-md";
		default:
			return "bg-yellow-400 px-2 py-1 rounded-md";
	}
}
