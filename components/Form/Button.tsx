export function Button(
	props: Omit<JSX.IntrinsicElements['button'], 'className'>
) {
	return (
		<button
			{...props}
			className="rounded bg-blue-400 px-2 py-1 text-neutral-900"
		></button>
	);
}
