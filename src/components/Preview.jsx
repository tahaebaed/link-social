import React, { useState } from 'react';
import { BsPencil } from 'react-icons/bs';

/**
 * @usage
- use `img` to set initial image
- use `id` to set input id
- use `name` to set input name
- use `label` to set input label
- use `onChange` add onChange function with file, event params
- use `icon` to change label icon
- use `className` to add any additional className

 * @example

<Preview onChange={file=>console.log(file)} />
// to hide popover set label to null
<Preview onChange={file=>console.log(file)} label='' />

 * @param {{ img:string, onChange:(file,evt)=>void, className:string, id:string, name:string, icon:React.ReactElement, label:string }} props 
 * @returns {React.ReactElement}
 */
function Preview({ img, onChange, className, id, name, icon, label }) {
	const [image, setImage] = useState(img);
	const [isIconHover, setIsIconHover] = useState(false);

	const OnInputChange = (evt) => {
		onChange(evt.target.files[0], evt);
		setImage(URL.createObjectURL(evt.target.files[0]));
	};

	const Wrapper = () => {
		return (
			<div
				className='border-4 border-white shadow-md rounded-md h-40 w-40'
				style={{
					background: `#eee center / cover no-repeat url('${image}')`,
				}}
			></div>
		);
	};

	const Popover = () => {
		return (
			<div
				className={`absolute bg-white top-[-20%] translate-y-[-50%] right-[-50%] translate-x-[-50%] py-1 px-2 text-sm rounded transition-all duration-400 shadow ${
					isIconHover ? '' : 'opacity-0'
				}`}
			>
				{label}
			</div>
		);
	};

	const Icon = () => {
		return (
			<div className='w-8 h-8 rounded-full border shadow-md flex justify-center items-center text-gray-600 hover:text-aurora hover:shadow-xl cursor-pointer transition-all absolute top-0 right-0 translate-x-[50%] translate-y-[-50%] bg-white'>
				{icon}
			</div>
		);
	};

	return (
		<div className={`relative rounded-md inline-block ${className}`}>
			<Wrapper />
			<label
				htmlFor={id}
				onMouseEnter={() => setIsIconHover(true)}
				onMouseLeave={() => setIsIconHover(false)}
			>
				{label && <Popover />}
				<Icon />
			</label>
			<input
				type='file'
				className='hidden'
				id={id}
				accept='image/*'
				name={name}
				onChange={OnInputChange}
			/>
		</div>
	);
}

Preview.defaultProps = {
	id: 'preview-id',
	name: 'preview',
	img: 'https://res.cloudinary.com/mohammed-taysser/image/upload/h_500,w_500/v1654621448/paperCuts/authors/avatar/mu931hsdzu68wwqpumbh.jpg',
	onChange: () => {},
	label: 'Change Preview',
	className: '',
	icon: <BsPencil />,
};

export default Preview;
