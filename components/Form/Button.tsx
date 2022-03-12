export function Button(
	props: Omit<JSX.IntrinsicElements['button'], 'className'>
) {
	return (
		<button
			{...props}
			className="rounded bg-sky-300 px-2 py-1 font-display font-semibold text-neutral-800 shadow hover:brightness-110"
		></button>
	);
}
