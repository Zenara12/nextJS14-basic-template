'use client';

import React from 'react';
import styles from './singlelink.module.css';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const SingleLink = ({ item }) => {
	const currentPathname = usePathname();
	return (
		<Link
			href={item.path}
			className={`${styles.container} ${
				currentPathname === item.path && styles.active
			}`}
		>
			{item.title}
		</Link>
	);
};

export default SingleLink;
