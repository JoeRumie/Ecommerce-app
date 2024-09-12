import clsx from 'clsx';
import { Link } from 'react-router-dom';
import CartButton from '../CartButton';

const links = [
    { 
        name: 'Shop all',
        href: '/shop-all',
    },
    {
        name: 'Latest Arrivals',
        href: '/latest-arrivals',

    }
]

const Navbar = () => {
    return (
        <div
            className={clsx(
                'z-sticky sticky top-0 mx-auto h-[68px] max-w-[1216px] px-4 py-3 md:px-8 lg:h-auto xl:px-0',
                'flex items-center justify-between gap-4 lg:gap-20',
        )}>
            <img 
                src="https://vaqybtnqyonvlwtskzmv.supabase.co/storage/v1/object/public/e-commerce-track-images/logo.svg"
                alt="StyleNest's logo" 
            />
            {links.map((link) => (
                <Link key={link.href} to={link.href}>{link.name}</Link>
            ))}
            <CartButton />
        </div>   
    )
};
export default Navbar;