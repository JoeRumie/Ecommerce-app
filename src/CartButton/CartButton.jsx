import clsx from 'clsx';
import {RiShoppingBag3Line} from 'react-icons/ri';
import {Link} from 'react-router-dom';

const CartButton = ({disabled, count}) => {
    return(
        <Link
            aria-label="Cart button"
            to="/cart"
            className={clsx(
                'relative rounded text-neutral-600',
                'focus:outline-none focus-visible:ring-4 focus-visible:ring-indigo-600/[.12]',
                {
                    'pointer-events-none text-neutral-400': disabled,
                }
            )}>
            <RiShoppingBag3Line className="size-6" aria-hidden="true"/>
            <span>{count}</span>

        </Link>
    )
}
export default CartButton;