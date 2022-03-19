import { isString } from '../types/guards/utils';

/**
 * Merges a React element with a set of properties, and merges class names.
 * @param element The React element.
 * @param props The updated props.
 * @returns The merged React element.
 */
export function mergeElementProps<PropsType extends Record<string, unknown>>(
	element: React.ReactElement<PropsType>,
	props: PropsType
): React.ReactElement<PropsType> {
	return {
		...element,
		props: {
			...element.props,
			...props,
			className: isString(element.props.className)
				? `${element.props.className}${
						isString(props.className) ? ` ${props.className}` : ''
				  }`
				: undefined,
		},
	};
}
