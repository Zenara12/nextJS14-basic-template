'use client';

import { useState, useEffect } from 'react';
import SingleLink from './SingleLink';
import styles from './navlinks.module.css';
import Image from 'next/image';

const navigations = [
	{ title: 'Home', path: '/' },
	{ title: 'About', path: '/about' },
	{ title: 'Contact', path: '/contact' },
	{ title: 'Blog', path: '/blog' },
];

//temp

const session = true;
const isAdmin = true;

const signOut = () => {
	console.log('sign-out');
};

const Navlinks = () => {
	const [open, setOpen] = useState(false);

	return (
		<div>
			<div className={styles.links}>
				{navigations.map((nav, index) => (
					<SingleLink key={index} item={nav} />
				))}

				{session ? (
					<>
						{isAdmin && (
							<SingleLink item={{ title: 'Admin', path: '/admin' }} />
						)}{' '}
						<button
							type='button'
							onClick={() => signOut()}
							className={styles.logout}
						>
							Sign-out
						</button>
					</>
				) : (
					<SingleLink item={{ title: 'Sign-in', path: '/sign-in' }} />
				)}
			</div>
			<Image
				className={styles.menuButton}
				src='/menu.png'
				alt=''
				width={30}
				height={30}
				onClick={() => setOpen((prev) => !prev)}
			/>
			{open && (
				<div className={styles.mobileLinks}>
					{navigations.map((nav, index) => (
						<SingleLink item={nav} key={index} />
					))}
					{session ? (
						<>
							{isAdmin && (
								<SingleLink item={{ title: 'Admin', path: '/admin' }} />
							)}{' '}
							<button
								type='button'
								onClick={() => signOut()}
								className={styles.logout}
							>
								Sign-out
							</button>
						</>
					) : (
						<SingleLink item={{ title: 'Sign-in', path: '/sign-in' }} />
					)}
				</div>
			)}
		</div>
	);
};

export default Navlinks;
