import React, { useState } from 'react';
import { BsPencil } from 'react-icons/bs';

/**
 * @usage
- use `img` to set initial image
- use `id` to set input id
- use `name` to set input name
- use `label` to set input label
- use `noLabel` to disable preview picker
- use `onChange` add onChange function with file, event params
- use `icon` to change label icon
- use `circle` to make wrapper circle
- use `className` to add any additional className
- use `imageClassName` to add any additional className to image

 * @example

<Preview onChange={evt=>console.log(evt)} />
// to hide popover set label to null
<Preview onChange={(_, file)=>console.log(file)} label='' />

 * @param {{ img:string, onChange:(evt, file)=>void, className:string, imageClassName:string, id:string, name:string, icon:React.ReactElement, label:string, circle:boolean, noLabel:boolean }} props 
 * @returns {React.ReactElement}
 */
function Preview(props) {
	const [image, setImage] = useState(props.img);
	const [isIconHover, setIsIconHover] = useState(false);

	const OnInputChange = (evt) => {
		props.onChange(evt, evt.target.files[0]);
		setImage(URL.createObjectURL(evt.target.files[0]));
	};

	return (
		<div
			className={`relative rounded-md inline-block h-40 w-40 ${props.className}`}
		>
			<img
				src={image}
				alt={props.label}
				className={`border-4 object-cover border-white shadow-md rounded-${
					props.circle ? 'full' : 'md'
				} h-40 w-40 max-h-full max-w-full ${props.imageClassName}`}
			/>
			{!props.noLabel && (
				<label
					htmlFor={props.id}
					onMouseEnter={() => setIsIconHover(true)}
					onMouseLeave={() => setIsIconHover(false)}
				>
					{props.label && <Popover label={props.label} isHover={isIconHover} />}
					<Icon icon={props.icon} />
				</label>
			)}
			<input
				type='file'
				className='hidden'
				id={props.id}
				accept='image/*'
				name={props.name}
				onChange={OnInputChange}
			/>
		</div>
	);
}

const Icon = ({ icon }) => {
	return (
		<div className='w-8 h-8 rounded-full border shadow-md flex justify-center items-center text-gray-600 hover:text-aurora hover:shadow-xl cursor-pointer transition-all absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-white'>
			{icon}
		</div>
	);
};

const Popover = ({ label, isHover }) => {
	return (
		<div
			className={`absolute bg-white top-[-20%] translate-y-[-50%] right-[-50%] translate-x-[-50%] py-1 px-2 text-sm rounded transition-all duration-400 shadow ${
				isHover ? '' : 'opacity-0'
			}`}
		>
			{label}
		</div>
	);
};

Preview.defaultProps = {
	id: 'preview-id',
	name: 'preview',
	circle: false,
	noLabel: false,
	img: 'https://res.cloudinary.com/mohammed-taysser/image/upload/h_500,w_500/v1654621448/paperCuts/authors/avatar/mu931hsdzu68wwqpumbh.jpg',
	onChange: () => {},
	label: 'Change Preview',
	className: '',
	imageClassName: '',
	icon: <BsPencil />,
};

export default Preview;
