import styles from "../styles";
import logo from '../assets/logo.png';
import { footerLinks } from "../Constants";

const Footer = () => {
    return (
        <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start">
                    <img src={logo} alt="bitcoin" className="w-[266px] h-[72px] object-contain" />
                    <p className={`${styles.paragraph} left-0 mt-4 max-w-[310px] center`}>PEMP ecosystem</p>
                </div>
                <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">{footerLinks.map((footerLinks) => (
                    <div key={footerLinks.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                        <h4 className="text-white font-poppins font-medium text-[18px] leading-[27px]">
                            {footerLinks.title}
                        </h4>
                        <ul>
                            {footerLinks.links.map((links, index) => (
                                <li key={links.name} className={`font-poppins font-normal text-[16px] leading-[24px] text-white hover:text-secondary cursor-pointer`}>
                                    {links.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}</div>
            </div>
        </section>
    )
}

export default Footer