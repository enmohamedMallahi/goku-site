import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
	return (
		<>
			<Head>
				<title>The Mighty Luffy</title>
				<meta name='description' content='Generated by create next app' />
				<link rel='icon' href='/Luffy-logo.png' />
			</Head>
			<header className='h-screen w-screen overflow-x-hidden flex items-center justify-center'>
				<div className='absolute flex items-center gap-2 top-4 left-4'>
					<img
						className='w-16 opacity-70 animate-spin'
						src='./luffy-logo.png'
						alt='The Mighty Luffy'
					/>
					<span className='font-bold text-xl text-gray-600'>
						The Strong Luffy
					</span>
				</div>
				<div>
					<p className='font-bold ml-2'>
						The <span className='text-red-500'>Strong</span>
					</p>
					<h1 className='text-9xl font-bold'>LUFFY</h1>
				</div>
				<img
					className='max-h-[32rem] absolute top-[50%] transform translate-y-[-50%]'
					src='./luffy-hero.png'
					alt='The Mighty Luffy'
				/>
				<img
					className='w-0 md:w-52 absolute top-0 right-[-3rem] opacity-70 '
					src='./straw-hat.png'
					alt='One Piece Straw Hat'
				/>
			</header>

			<div className='mx-auto max-w-screen-md py-6 text-center'>
				<p className='text-2xl uppercase font-bold text-gray-900'>
					"May <span className='text-red-500'>5</span> is Luffy day in{' '}
					<span className='text-red-500'>japan</span>"
				</p>
			</div>

			<div className='md:flex py-4 px-8 items-center'>
				<div className='md:w-1/2 flex items-center justify-center'>
					<img className='w-[40%]' src='./luffy.png' alt='The Mighty Luffy' />
				</div>
				<div className='md:w-1/2'>
					<h2 className='mb-3 font-bold text-3xl uppercase'>
						Monkey D. <span className='text-red-500'>Luffy</span>
					</h2>
					<p>
						<span className='font-bold'>Monkey D. Luffy</span> is a Saiyan
						raised on Earth and the overall main protagonist of the Dragon Ball
						series. Originally sent to Earth as an infant, Kakarot would be
						adopted by Grandpa Gohan who named him Son Luffy. A head injury at
						an early age alters Luffy's memory, ridding him of his initial
						destructive nature and allowing him to grow up to become one of
						Earth's greatest defenders. He constantly strives and trains to be
						the greatest warrior possible, which has kept the Earth and the
						universe safe from destruction many timesMonkey D. Luffy, known as
						"Straw Hat Luffy", is the main protagonist of the manga and anime,
						One Piece. He is the son of the Revolutionary leader Monkey D.
						Dragon, the grandson of the Marine hero Monkey D. Garp, the sworn
						brother of late "Fire Fist" Portgas D. Ace and Revolutionary chief
						of staff Sabo, and the foster son of Curly Dadan.
					</p>
				</div>
			</div>

			<div className='md:flex gap-4 py-4 items-center justify-center'>
				<div className='md:w-1/2 w-full p-4'>
					<table className='w-full'>
						<tbody>
							<tr>
								<td>Name:</td>
								<td>Luffy Kakarot</td>
							</tr>
							<tr>
								<td>Race:</td>
								<td>Saiyan</td>
							</tr>
							<tr>
								<td>Gender:</td>
								<td>Male</td>
							</tr>
							<tr>
								<td>Height:</td>
								<td>175cm</td>
							</tr>
							<tr>
								<td>Weight:</td>
								<td>62Kg</td>
							</tr>
							<tr>
								<td>Birth Date:</td>
								<td>Age 737 or Age 734 </td>
							</tr>
						</tbody>
					</table>
				</div>

				<img
					className='md:w-[16%] w-1/3 mx-auto'
					src='./Luffy-hero.png'
					alt='The Mighty Luffy'
				/>
			</div>

			<div className='mx-auto max-w-screen-md py-6 '>
				<h2 className='mb-2 text-3xl text-center uppercase font-bold text-gray-900'>
					Luffy Gears <span className='text-red-500'>Forms</span>
				</h2>
				<p className='mb-6 text-center'>
					A lot has been done with the Super Saiyan concept since its initial
					appearance, and there is now a total of 21 different Super Saiyan
					forms in the Dragon Ball franchise.
				</p>
				<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
					<div className='flex flex-col items-center '>
						<img className='h-60' src='./gear-2.webp' alt='Gear 2nd' />
						<h3 className='font-bold'>
							Gear <span className='text-red-500'>2nd</span>
						</h3>
					</div>
					<div className='flex flex-col items-center '>
						<img className='h-60' src='./gear-3.webp' alt='Gear 3rd' />
						<h3 className='font-bold'>
							Gear <span className='text-red-500'>3rd</span>
						</h3>
					</div>
					<div className='flex flex-col items-center '>
						<img
							className='h-60'
							src='./gear-4b.webp'
							alt='Gear 4th: Bound Man'
						/>
						<h3 className='font-bold'>
							Gear
							<span className='text-red-500'> 4th: Bound Man</span>
						</h3>
					</div>
					<div className='flex flex-col items-center '>
						<img className='h-60' src='./gear-4t.webp' alt='Kaioken' />
						<h3 className='font-bold'>
							Gear
							<span className='text-red-500'>4th: Tankman Full Version</span>
						</h3>
					</div>
					<div className='flex flex-col items-center '>
						<img
							className='h-60'
							src='./gear-4s.webp'
							alt='Gear 4th: Snakeman'
						/>
						<h3 className='font-bold'>
							Gear <span className='text-red-500'>4th: Snakeman</span>
						</h3>
					</div>
					<div className='flex flex-col items-center '>
						<img className='h-60' src='./gear-5.png' alt='Gear 4th: Snakeman' />
						<h3 className='font-bold'>
							Devil Fruit <span className='text-red-500'>Awakening</span>
						</h3>
					</div>
				</div>
			</div>

			<footer className='text-center py-4'>
				<p>
					© 2022 -{' '}
					<span className='text-red-500 font-bold'>The Strong Luffy</span>. All
					rights reserved.
				</p>
			</footer>
		</>
	);
}
