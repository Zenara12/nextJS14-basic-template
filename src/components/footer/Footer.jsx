import styles from './footer.module.css';

const Footer = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className={styles.container}>
			<div className={styles.logo}>dev</div>
			<div className={styles.text}>© {currentYear} All rights reserved.</div>
		</div>
	);
};

export default Footer;
