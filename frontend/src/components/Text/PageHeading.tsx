import { mergeElementProps } from '../../utils/components';

export function PageHeading(props: JSX.IntrinsicElements['h1']) {
	return mergeElementProps(
		<h1 className="font-display text-3xl font-extrabold" />,
		props
	);
}
