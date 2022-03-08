import Link from 'next/link';
import { IconType } from 'react-icons';

export function PoweredByIcon(props: {
	icon: IconType;
	url: string;
	color: string;
	brightness?: number;
}) {
	return (
		<li className="inline-block">
			<Link href={props.url}>
				<a>
					<props.icon
						className="h-6 w-6"
						style={{
							fill: props.color,
							filter: props.brightness
								? `brightness(${props.brightness})`
								: undefined,
						}}
					/>
				</a>
			</Link>
		</li>
	);
}
